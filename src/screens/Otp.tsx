import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import HomeIndicator from '../components/HomeIndicator';
import GradientBg from '../components/GradientBg';
import { useAuth } from '../auth';

const LEN = 6;

export default function Otp() {
  const nav = useNavigate();
  const { state } = useLocation() as { state?: { phone?: string } };
  const phone = state?.phone || '+1 (405) 555-0128';
  const { login } = useAuth();
  const [digits, setDigits] = useState<string[]>(Array(LEN).fill(''));
  const [remaining, setRemaining] = useState(36);
  const refs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    if (remaining <= 0) return;
    const t = setInterval(() => setRemaining((r) => Math.max(0, r - 1)), 1000);
    return () => clearInterval(t);
  }, [remaining]);

  useEffect(() => {
    refs.current[0]?.focus();
  }, []);

  const filled = digits.every((d) => d !== '');

  const setDigit = (i: number, v: string) => {
    const clean = v.replace(/\D/g, '').slice(-1);
    const next = [...digits];
    next[i] = clean;
    setDigits(next);
    if (clean && i < LEN - 1) refs.current[i + 1]?.focus();
  };

  const onKey = (i: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !digits[i] && i > 0) {
      refs.current[i - 1]?.focus();
    }
  };

  const onPaste = (e: React.ClipboardEvent) => {
    const text = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, LEN);
    if (!text) return;
    e.preventDefault();
    const next = Array(LEN).fill('');
    [...text].forEach((c, idx) => (next[idx] = c));
    setDigits(next);
    refs.current[Math.min(text.length, LEN - 1)]?.focus();
  };

  const submit = () => {
    if (!filled) return;
    login(phone);
    nav('/home', { replace: true });
  };

  const mm = Math.floor(remaining / 60)
    .toString()
    .padStart(1, '0');
  const ss = (remaining % 60).toString().padStart(2, '0');

  return (
    <GradientBg>
      <StatusBar tint="dark" />

      <button
        className="absolute top-[66px] left-5 h-9 w-9 rounded-full bg-white/70 backdrop-blur grid place-items-center text-ink"
        onClick={() => nav(-1)}
        aria-label="Back"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="absolute left-5 right-5" style={{ top: 138 }}>
        <h1 className="text-[22px] leading-7 font-semibold tracking-[-0.3px] text-ink">
          OTP Verification
        </h1>
        <p className="mt-2 text-[14px] leading-5 text-ink-muted">
          We've sent a verification code to<br />
          <span className="text-ink font-medium">{phone}</span>
        </p>
      </div>

      {/* OTP inputs */}
      <div className="absolute left-5 right-5" style={{ top: 250 }}>
        <div className="flex gap-[6px]" onPaste={onPaste}>
          {digits.map((d, i) => (
            <input
              key={i}
              ref={(el) => {
                refs.current[i] = el;
              }}
              value={d}
              onChange={(e) => setDigit(i, e.target.value)}
              onKeyDown={(e) => onKey(i, e)}
              inputMode="numeric"
              maxLength={1}
              className="h-[48px] w-[42.5px] rounded-[10px] bg-white/95 border border-black/5 text-center text-[20px] font-semibold text-ink outline-none focus:border-ink/40"
            />
          ))}
        </div>

        <p className="mt-5 text-[13px] text-ink-muted">
          Didn't get the OTP?{' '}
          {remaining > 0 ? (
            <span>
              Resend OTP in <span className="text-ink font-medium tabular-nums">{mm}:{ss}</span>
            </span>
          ) : (
            <button
              className="text-ink font-medium underline"
              onClick={() => setRemaining(36)}
            >
              Resend OTP
            </button>
          )}
        </p>
      </div>

      <div className="absolute left-5 right-5" style={{ top: 422 }}>
        <button
          className={`btn-primary ${!filled ? 'opacity-50' : ''}`}
          onClick={submit}
          disabled={!filled}
        >
          Continue
        </button>
      </div>

      <HomeIndicator tint="dark" />
    </GradientBg>
  );
}
