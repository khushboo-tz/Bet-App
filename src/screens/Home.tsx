import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import HomeIndicator from '../components/HomeIndicator';
import { useAuth } from '../auth';

type Tab = 'feed' | 'heatmap';

const FEED = [
  {
    id: 'f1',
    who: 'Maya',
    handle: '@maya.lx',
    avatar: '#d9ccff',
    text: 'Bet on running my first 10k before November.',
    stake: '$40',
    cheers: 23,
    days: 22,
    status: 'On track',
  },
  {
    id: 'f2',
    who: 'Jordan',
    handle: '@jord',
    avatar: '#c9f158',
    text: 'Ship side project v1 this quarter.',
    stake: '$100',
    cheers: 51,
    days: 64,
    status: 'Just started',
  },
  {
    id: 'f3',
    who: 'Priya',
    handle: '@p.writes',
    avatar: '#ffd3b0',
    text: 'Write every day for 30 days straight.',
    stake: '$25',
    cheers: 17,
    days: 8,
    status: 'On track',
  },
];

export default function Home() {
  const [tab, setTab] = useState<Tab>('feed');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onDown = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [menuOpen]);

  const doLogout = () => {
    logout();
    navigate('/', { replace: true });
  };

  return (
    <div className="screen-full bg-paper relative pb-24">
      <StatusBar tint="dark" />

      {/* Header */}
      <div className="px-6 pt-2 flex items-center justify-between relative">
        <div>
          <div className="text-[12px] text-ink-subtle">Morning,</div>
          <div className="text-[22px] font-semibold tracking-[-0.4px] text-ink">Khushboo</div>
        </div>
        <div ref={menuRef} className="relative">
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="h-10 w-10 rounded-full bg-lavender-200 grid place-items-center text-[14px] font-semibold text-lavender-500 active:scale-95 transition"
            aria-label="Account menu"
          >
            K
          </button>
          {menuOpen && (
            <div className="absolute right-0 top-12 w-44 rounded-2xl bg-white shadow-card border border-line overflow-hidden z-10">
              <button className="w-full text-left px-4 py-3 text-[14px] text-ink hover:bg-black/5">
                Profile
              </button>
              <button className="w-full text-left px-4 py-3 text-[14px] text-ink hover:bg-black/5">
                Settings
              </button>
              <div className="h-px bg-line" />
              <button
                onClick={doLogout}
                className="w-full text-left px-4 py-3 text-[14px] text-[#d9477e] hover:bg-black/5 font-medium"
              >
                Log out
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-5 px-6">
        <div className="inline-flex gap-1 p-1 rounded-pill bg-black/5">
          <button
            className={`px-4 py-1.5 rounded-pill text-[13px] font-medium transition ${
              tab === 'feed' ? 'bg-white text-ink shadow-soft' : 'text-ink-muted'
            }`}
            onClick={() => setTab('feed')}
          >
            Your feed
          </button>
          <button
            className={`px-4 py-1.5 rounded-pill text-[13px] font-medium transition ${
              tab === 'heatmap' ? 'bg-white text-ink shadow-soft' : 'text-ink-muted'
            }`}
            onClick={() => setTab('heatmap')}
          >
            Predictive heatmap
          </button>
        </div>
      </div>

      {/* Content */}
      {tab === 'feed' ? (
        <div className="mt-4 px-6 space-y-3">
          {FEED.map((f) => (
            <button
              key={f.id}
              onClick={() => navigate(`/bet/${f.id}`)}
              className="w-full text-left rounded-card bg-white shadow-soft p-4 active:scale-[0.995] transition"
            >
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full" style={{ background: f.avatar }} />
                <div className="flex-1">
                  <div className="text-[13px] font-semibold text-ink">{f.who}</div>
                  <div className="text-[12px] text-ink-subtle">{f.handle}</div>
                </div>
                <span className="chip">{f.status}</span>
              </div>
              <p className="mt-3 text-[15px] leading-[22px] text-ink">{f.text}</p>
              <div className="mt-3 flex items-center justify-between text-[12px] text-ink-muted">
                <span>Stake · <span className="text-ink font-medium">{f.stake}</span></span>
                <span>{f.days} days left</span>
                <span>♡ {f.cheers}</span>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <Heatmap />
      )}

      <TabBar />
      <HomeIndicator tint="dark" />
    </div>
  );
}

function Heatmap() {
  // 12 x 18 grid — mimics the colorful heatmap shown in the designs.
  const cols = 12;
  const rows = 18;
  const palette = [
    '#ebe5ff', '#d9ccff', '#b9a6f5', '#c9f158', '#d9f25e',
    '#ffd3b0', '#ffb38a', '#ff8a8a', '#a8d43e', '#7a5ce0',
  ];

  return (
    <div className="mt-4 px-6">
      <div className="rounded-card overflow-hidden shadow-card">
        <div
          className="grid gap-[3px] p-3"
          style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`, background: '#f5f2ff' }}
        >
          {Array.from({ length: cols * rows }).map((_, i) => {
            // Pseudo-random but stable pattern
            const v = (Math.sin(i * 0.53) + 1) / 2;
            const idx = Math.floor(v * palette.length);
            const op = 0.55 + ((i * 37) % 45) / 100;
            return (
              <div
                key={i}
                className="aspect-square rounded-[4px]"
                style={{ background: palette[idx], opacity: op }}
              />
            );
          })}
        </div>
        <div className="bg-white p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[13px] font-semibold text-ink">This week's pulse</span>
            <span className="chip">+12%</span>
          </div>
          <p className="text-[12px] text-ink-muted leading-5">
            More people are betting on themselves this week than last — especially around fitness
            and creative work. Tap a cell to see what's trending.
          </p>
        </div>
      </div>
    </div>
  );
}

function TabBar() {
  return (
    <nav className="absolute bottom-6 left-4 right-4 rounded-pill bg-ink text-white flex items-center justify-around py-3 px-2 shadow-card">
      <IconBtn label="Feed" active />
      <IconBtn label="Explore" />
      <IconBtn label="New" primary />
      <IconBtn label="You" />
      <IconBtn label="Settings" />
    </nav>
  );
}

function IconBtn({ label, active, primary }: { label: string; active?: boolean; primary?: boolean }) {
  return (
    <button
      className={`flex flex-col items-center gap-0.5 min-w-[48px] ${
        active ? 'text-white' : 'text-white/55'
      }`}
    >
      <span
        className={`h-8 w-8 grid place-items-center rounded-full text-[14px] ${
          primary ? 'bg-lime-500 text-ink' : ''
        }`}
      >
        {primary ? '+' : '•'}
      </span>
      <span className="text-[10px] font-medium tracking-wide">{label}</span>
    </button>
  );
}
