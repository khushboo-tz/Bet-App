import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import HomeIndicator from '../components/HomeIndicator';
import GradientBg from '../components/GradientBg';
import BetLogo from '../components/BetLogo';

export default function Login() {
  const nav = useNavigate();
  const [phone, setPhone] = useState('');

  const canContinue = phone.replace(/\D/g, '').length >= 7;

  const submit = () => {
    if (!canContinue) return;
    nav('/otp', { state: { phone } });
  };

  return (
    <GradientBg>
      <StatusBar tint="dark" />

      <div className="absolute left-5 right-5" style={{ top: 88 }}>
        <BetLogo size={56} />

        <h1 className="mt-8 text-[22px] leading-7 font-semibold tracking-[-0.3px] text-ink">
          Welcome to BetOnYou
        </h1>
        <p className="mt-2 text-[14px] leading-5 text-ink-muted">
          Log in/Create an account to manage your commitments
        </p>
      </div>

      <div className="absolute left-5 right-5" style={{ top: 300 }}>
        <label className="block text-[14px] font-medium text-ink">
          Mobile number
        </label>
        <div className="mt-2.5 h-[52px] rounded-[14px] bg-white/95 backdrop-blur border border-black/5 flex items-center px-4">
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            inputMode="tel"
            placeholder="+1 (405) 555-0128"
            className="w-full bg-transparent outline-none text-[15px] text-ink placeholder:text-black/35"
            autoFocus
          />
        </div>

        <button
          className={`mt-4 btn-primary ${!canContinue ? 'opacity-50' : ''}`}
          onClick={submit}
          disabled={!canContinue}
        >
          Get OTP
        </button>
      </div>

      <p className="absolute left-5 right-5 text-center text-[12px] leading-5 text-ink-muted" style={{ bottom: 44 }}>
        By clicking, I accept the <span className="underline">terms of service</span> &amp;{' '}
        <span className="underline">privacy policy</span>.
      </p>

      <HomeIndicator tint="dark" />
    </GradientBg>
  );
}
