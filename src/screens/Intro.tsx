import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import HomeIndicator from '../components/HomeIndicator';

export default function Intro() {
  const nav = useNavigate();

  return (
    <div
      className="screen-full relative overflow-hidden"
      style={{
        // Diagonal: warm cream top-left → soft purple bottom-right,
        // matching the Figma "Commit to what you say you'll do" frame.
        background:
          'linear-gradient(135deg, #f6ecd7 0%, #f2e7d3 28%, #e3d3ea 62%, #c6b3ef 100%)',
      }}
    >
      <StatusBar tint="dark" />

      {/* ================= Cards cluster ================= */}
      <div className="absolute inset-x-0" style={{ top: 70 }}>
        {/* Small compass / diamond icon at top-center */}
        <div
          className="absolute left-1/2 -translate-x-1/2 h-8 w-8 rounded-full bg-white/70 backdrop-blur grid place-items-center shadow-soft"
          style={{ top: 40 }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 1.5 L10 5 L8 8 L6 5 Z" fill="#1a1a1a" />
            <path d="M8 8 L10 11 L8 14.5 L6 11 Z" fill="#1a1a1a" />
          </svg>
        </div>

        {/* FRONT card — "Attend 5 gym sessions this week" */}
        <div
          className="absolute left-[28px] top-[110px] w-[208px] rounded-[22px] bg-[#f6f2fa] shadow-card p-4"
          style={{ transform: 'rotate(-7deg)', zIndex: 2 }}
        >
          <Avatar src="https://i.pravatar.cc/120?img=12" />
          <p className="mt-3 text-[17px] leading-[21px] font-semibold text-ink">
            Attend 5 gym<br />sessions this week
          </p>
          <CardFooter />
        </div>

        {/* BACK card — "Complete 10km run by Sunday" */}
        <div
          className="absolute right-[6px] top-[170px] w-[210px] rounded-[22px] bg-[#f1ead5] shadow-card p-4"
          style={{ transform: 'rotate(10deg)', zIndex: 1 }}
        >
          <Avatar src="https://i.pravatar.cc/120?img=45" />
          <p className="mt-3 text-[17px] leading-[21px] font-semibold text-ink">
            Complete 10km<br />run by Sunday
          </p>
          <CardFooter />
        </div>

        {/* Small $ badge top-right */}
        <div
          className="absolute h-12 w-12 rounded-full grid place-items-center text-white font-semibold text-[18px] shadow-soft"
          style={{
            right: 30,
            top: 150,
            background: 'linear-gradient(135deg, #b9a6f5, #8a6be4)',
          }}
        >
          $
        </div>

        {/* Green + bottom-left */}
        <div
          className="absolute h-14 w-14 rounded-full grid place-items-center shadow-soft"
          style={{
            left: 28,
            top: 410,
            background: '#c9f158',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 3v14M3 10h14" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* ================= Copy ================= */}
      <div className="absolute left-5 right-5" style={{ top: 520 }}>
        <h1 className="text-[28px] leading-[34px] font-semibold tracking-[-0.5px] text-ink">
          Commit to what<br />you say you'll do.
        </h1>
        <p className="mt-4 text-[14px] leading-[22px] text-ink-muted">
          BetOnYou helps you follow through by putting real
          stakes behind your goals. Proof decides the
          outcome.
        </p>
      </div>

      {/* ================= Buttons ================= */}
      <div className="absolute left-5 right-5" style={{ bottom: 40 }}>
        <button className="btn-primary" onClick={() => nav('/login')}>
          Get Started
        </button>
        <button
          className="mt-2 w-full text-[14px] text-ink font-medium py-3"
          onClick={() => nav('/home')}
        >
          Skip
        </button>
      </div>

      <HomeIndicator tint="dark" />
    </div>
  );
}

function Avatar({ src }: { src: string }) {
  return (
    <div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-white">
      <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
    </div>
  );
}

function CardFooter() {
  return (
    <div className="mt-4 flex items-start justify-between text-[11px]">
      <div>
        <div className="text-ink-subtle leading-tight">Proofs submitted</div>
        <div className="text-ink font-semibold mt-0.5 text-[13px]">2</div>
      </div>
      <div className="text-right">
        <div className="text-ink-subtle leading-tight">Deadline</div>
        <div className="text-[#d9477e] font-semibold mt-0.5 text-[13px]">4 days left</div>
      </div>
    </div>
  );
}
