import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import HomeIndicator from '../components/HomeIndicator';
import BetLogo from '../components/BetLogo';

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => navigate('/intro'), 2200);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div
      className="screen-full relative overflow-hidden"
      style={{
        // Matches the Figma splash: warm cream, almost monochrome.
        background:
          'linear-gradient(203.85deg, #f9f0df 0%, #f3ead5 55%, #ede4cc 100%)',
      }}
    >
      <StatusBar tint="dark" />

      {/* Subtle lime blob at bottom center, exactly as in Figma */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          bottom: -120,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 360,
          height: 300,
          background:
            'radial-gradient(closest-side, rgba(205,234,92,0.55), rgba(205,234,92,0) 70%)',
          filter: 'blur(14px)',
        }}
      />

      {/* Logo + wordmark positioned higher up in frame */}
      <div className="absolute left-0 right-0 flex flex-col items-center" style={{ top: '38%' }}>
        <BetLogo size={108} />
        <h1 className="mt-8 text-[30px] font-semibold tracking-[-0.5px] text-ink">
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
