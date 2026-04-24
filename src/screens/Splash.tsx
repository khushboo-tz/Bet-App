import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import HomeIndicator from '../components/HomeIndicator';
import BetLogo from '../components/BetLogo';

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => navigate('/onboarding'), 2200);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div className="screen-full bg-splash-gradient relative overflow-hidden">
      <StatusBar tint="dark" />

      {/* Soft lime blob bottom-left, matching Figma splash */}
      <div
        aria-hidden
        className="absolute -left-[140px] top-[550px] h-[420px] w-[440px] rounded-full blur-2xl opacity-60"
        style={{
          background: 'radial-gradient(closest-side, #cdea5c 0%, rgba(205,234,92,0) 70%)',
        }}
      />

      <div className="flex flex-col items-center justify-center pt-[230px] px-6 relative">
        <BetLogo size={140} />
        <h1 className="mt-8 text-[32px] font-semibold tracking-[-0.6px] text-ink">
          Bet On You
        </h1>
        <p className="mt-2 text-[14px] leading-5 text-ink-muted text-center">
          Because someone believes in you
        </p>
      </div>

      <HomeIndicator tint="dark" />
    </div>
  );
}
