import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import HomeIndicator from '../components/HomeIndicator';

const STEPS = [
  {
    kicker: 'Step 01',
    title: 'See what\nothers believe in.',
    body: 'Explore a live map of predictions from friends and strangers around the world.',
    preview: 'map',
  },
  {
    kicker: 'Step 02',
    title: 'Track your\nown bets.',
    body: 'Every promise you make to yourself — logged, tracked, and celebrated.',
    preview: 'card',
  },
  {
    kicker: 'Step 03',
    title: 'Pick a date\nyou\'ll show up.',
    body: 'Set the day you\'ll prove it. We\'ll hold you to it, gently.',
    preview: 'calendar',
  },
] as const;

export default function Onboarding() {
  const navigate = useNavigate();
  const [i, setI] = useState(0);
  const step = STEPS[i];

  const next = () => {
    if (i === STEPS.length - 1) navigate('/home');
    else setI((v) => v + 1);
  };

  return (
    <div className="screen-full bg-paper relative">
      <StatusBar tint="dark" />

      {/* Skip */}
      <div className="absolute top-[52px] right-6">
        <button
          className="text-[14px] font-medium text-ink-subtle"
          onClick={() => navigate('/home')}
        >
          Skip
        </button>
      </div>

      <div className="px-6 pt-4">
        <div className="text-[12px] font-medium text-lavender-500 tracking-wide uppercase">
          {step.kicker}
        </div>
        <h1 className="mt-2 text-[30px] font-semibold leading-[36px] tracking-[-0.6px] whitespace-pre-line text-ink">
          {step.title}
        </h1>
      </div>

      {/* Preview card */}
      <div className="mt-6 px-6">
        <PreviewCard kind={step.preview} />
      </div>

      <p className="px-6 mt-6 text-[15px] leading-6 text-ink-muted">{step.body}</p>

      {/* Progress dots */}
      <div className="absolute bottom-[140px] left-1/2 -translate-x-1/2 flex gap-1.5">
        {STEPS.map((_, idx) => (
          <span
            key={idx}
            className={`h-1.5 rounded-full transition-all ${
              idx === i ? 'w-6 bg-ink' : 'w-1.5 bg-black/20'
            }`}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="absolute bottom-16 left-0 right-0 px-6">
        <button className="btn-primary" onClick={next}>
          {i === STEPS.length - 1 ? 'Get started' : 'Continue'}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <HomeIndicator tint="dark" />
    </div>
  );
}

function PreviewCard({ kind }: { kind: 'map' | 'card' | 'calendar' }) {
  if (kind === 'map') {
    return (
      <div className="relative rounded-card overflow-hidden bg-lavender-100 h-[300px] shadow-card">
        {/* Abstract "map" of dots */}
        <svg viewBox="0 0 320 300" className="absolute inset-0 w-full h-full">
          <defs>
            <radialGradient id="g" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#d9ccff" />
              <stop offset="100%" stopColor="#ebe5ff" />
            </radialGradient>
          </defs>
          <rect width="320" height="300" fill="url(#g)" />
          {Array.from({ length: 60 }).map((_, i) => {
            const x = (i * 53) % 320;
            const y = (i * 31) % 300;
            const r = (i % 4) + 2;
            return <circle key={i} cx={x} cy={y} r={r} fill="#7a5ce0" opacity={0.15 + (i % 5) * 0.12} />;
          })}
          <circle cx="170" cy="140" r="8" fill="#7a5ce0" />
          <circle cx="170" cy="140" r="20" fill="#7a5ce0" opacity="0.25" />
        </svg>
        <div className="absolute left-4 bottom-4 right-4 bg-white/90 backdrop-blur rounded-2xl p-3 flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-lavender-500" />
          <div className="flex-1">
            <div className="text-[13px] font-semibold text-ink">Maya from Lisbon</div>
            <div className="text-[12px] text-ink-muted">Bet on running her first 10k</div>
          </div>
        </div>
      </div>
    );
  }

  if (kind === 'card') {
    return (
      <div className="rounded-card bg-white shadow-card p-5 h-[300px] flex flex-col">
        <div className="text-[12px] font-medium text-lime-600">Your bet</div>
        <div className="mt-1 text-[20px] font-semibold text-ink leading-tight">
          Launch my side project before my birthday.
        </div>
        <div className="mt-5 space-y-3">
          <Row label="Stake" value="$50 to charity if I miss" />
          <Row label="Witness" label2="@samira.k" />
          <Row label="Deadline" value="Oct 2, 2026" />
        </div>
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-line">
          <span className="chip">On track</span>
          <span className="text-[12px] text-ink-muted">64 days left</span>
        </div>
      </div>
    );
  }

  // calendar
  const days = Array.from({ length: 35 });
  const activeDay = 18;
  return (
    <div className="rounded-card bg-white shadow-card p-5 h-[300px]">
      <div className="flex items-center justify-between">
        <div className="text-[14px] font-semibold text-ink">October 2026</div>
        <div className="flex gap-2">
          <button className="h-7 w-7 rounded-full bg-black/5 grid place-items-center text-ink">‹</button>
          <button className="h-7 w-7 rounded-full bg-black/5 grid place-items-center text-ink">›</button>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-7 gap-y-2 text-center text-[11px] text-ink-subtle">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
          <div key={i}>{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-y-1 mt-1">
        {days.map((_, idx) => {
          const day = idx - 3; // offset
          if (day < 1 || day > 31) return <div key={idx} />;
          const isActive = day === activeDay;
          return (
            <div key={idx} className="grid place-items-center h-8">
              <div
                className={`h-8 w-8 grid place-items-center rounded-full text-[13px] ${
                  isActive ? 'bg-ink text-white font-semibold' : 'text-ink'
                }`}
              >
                {day}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Row({ label, value, label2 }: { label: string; value?: string; label2?: string }) {
  return (
    <div className="flex items-center justify-between text-[13px]">
      <span className="text-ink-subtle">{label}</span>
      <span className="text-ink font-medium">{value || label2}</span>
    </div>
  );
}
