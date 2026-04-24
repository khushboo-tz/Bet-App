import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import StatusBar from '../components/StatusBar';
import HomeIndicator from '../components/HomeIndicator';

const LOOKUP: Record<string, { who: string; handle: string; text: string; stake: string; days: number; avatar: string }> = {
  f1: { who: 'Maya', handle: '@maya.lx', avatar: '#d9ccff', text: 'Bet on running my first 10k before November.', stake: '$40', days: 22 },
  f2: { who: 'Jordan', handle: '@jord', avatar: '#c9f158', text: 'Ship side project v1 this quarter.', stake: '$100', days: 64 },
  f3: { who: 'Priya', handle: '@p.writes', avatar: '#ffd3b0', text: 'Write every day for 30 days straight.', stake: '$25', days: 8 },
};

export default function BetDetail() {
  const { id = 'f1' } = useParams();
  const nav = useNavigate();
  const [cheered, setCheered] = useState(false);
  const bet = LOOKUP[id] ?? LOOKUP.f1;

  return (
    <div className="screen-full bg-paper relative pb-24">
      <StatusBar tint="dark" />

      <div className="px-6 pt-2 flex items-center justify-between">
        <button
          onClick={() => nav(-1)}
          className="h-9 w-9 rounded-full bg-black/5 grid place-items-center text-ink"
          aria-label="Back"
        >
          ‹
        </button>
        <button className="h-9 w-9 rounded-full bg-black/5 grid place-items-center text-ink">•••</button>
      </div>

      {/* Hero card */}
      <div className="mt-4 mx-6 rounded-card bg-lavender-gradient p-5 text-ink">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full" style={{ background: bet.avatar }} />
          <div>
            <div className="text-[14px] font-semibold">{bet.who}</div>
            <div className="text-[12px] opacity-70">{bet.handle}</div>
          </div>
        </div>
        <p className="mt-5 text-[22px] leading-[28px] font-semibold tracking-[-0.3px]">
          {bet.text}
        </p>
      </div>

      {/* Stats */}
      <div className="mt-5 mx-6 grid grid-cols-3 gap-2">
        <Stat label="Stake" value={bet.stake} />
        <Stat label="Days left" value={bet.days.toString()} />
        <Stat label="Cheers" value={cheered ? '24' : '23'} />
      </div>

      {/* Timeline */}
      <div className="mt-5 mx-6 rounded-card bg-white shadow-soft p-5">
        <div className="text-[13px] font-semibold text-ink">Progress</div>
        <div className="mt-3 space-y-4">
          <Entry color="#c9f158" title="Logged 5k in 28:12" meta="2 days ago" />
          <Entry color="#d9ccff" title="Signed up for the race" meta="1 week ago" />
          <Entry color="#ffd3b0" title="Bet was placed" meta="3 weeks ago" />
        </div>
      </div>

      {/* Cheer CTA */}
      <div className="absolute bottom-6 left-4 right-4">
        <button
          className={`w-full rounded-pill py-4 text-[15px] font-medium transition shadow-card ${
            cheered ? 'bg-white text-ink border border-line' : 'bg-ink text-white'
          }`}
          onClick={() => setCheered((v) => !v)}
        >
          {cheered ? '♡ Cheered' : '♡ Cheer them on'}
        </button>
      </div>

      <HomeIndicator tint="dark" />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white shadow-soft p-3">
      <div className="text-[11px] text-ink-subtle">{label}</div>
      <div className="text-[18px] font-semibold text-ink mt-0.5">{value}</div>
    </div>
  );
}

function Entry({ color, title, meta }: { color: string; title: string; meta: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="h-2.5 w-2.5 rounded-full mt-1.5 shrink-0" style={{ background: color }} />
      <div className="flex-1">
        <div className="text-[14px] text-ink font-medium">{title}</div>
        <div className="text-[12px] text-ink-subtle">{meta}</div>
      </div>
    </div>
  );
}
