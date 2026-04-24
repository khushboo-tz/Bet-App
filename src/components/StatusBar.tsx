type Props = { tint?: 'dark' | 'light' };

/** iOS-style status bar that matches the Figma designs. */
export default function StatusBar({ tint = 'dark' }: Props) {
  const color = tint === 'dark' ? 'text-black' : 'text-white';
  const stroke = tint === 'dark' ? 'stroke-black' : 'stroke-white';
  const fill = tint === 'dark' ? 'fill-black' : 'fill-white';
  return (
    <div className={`status-bar ${color}`}>
      <span className="tabular-nums">9:41</span>
      <div className="flex items-center gap-1.5">
        {/* Signal */}
        <svg width="17" height="11" viewBox="0 0 17 11" className={fill}>
          <rect x="0" y="7" width="3" height="4" rx="0.5" />
          <rect x="4.5" y="5" width="3" height="6" rx="0.5" />
          <rect x="9" y="2.5" width="3" height="8.5" rx="0.5" />
          <rect x="13.5" y="0" width="3" height="11" rx="0.5" />
        </svg>
        {/* Wifi */}
        <svg width="16" height="11" viewBox="0 0 16 11" className={fill}>
          <path d="M8 2.2c2.4 0 4.6.9 6.2 2.3l1.3-1.3C13.5 1.4 10.9.3 8 .3S2.5 1.4.5 3.2l1.3 1.3C3.4 3.1 5.6 2.2 8 2.2z" />
          <path d="M8 5.2c1.5 0 2.9.6 3.9 1.5l1.3-1.3C11.9 4.2 10 3.4 8 3.4s-3.9.8-5.2 2l1.3 1.3c1-.9 2.4-1.5 3.9-1.5z" />
          <path d="M8 8.2c.7 0 1.3.3 1.8.7L8 10.8 6.2 8.9c.5-.4 1.1-.7 1.8-.7z" />
        </svg>
        {/* Battery */}
        <div className="flex items-center gap-0.5">
          <div className={`h-[12px] w-[24px] rounded-[3px] border ${stroke === 'stroke-black' ? 'border-black/40' : 'border-white/60'} relative p-[1.5px]`}>
            <div className={`h-full w-[85%] rounded-[1.5px] ${fill}`} />
          </div>
          <div className={`h-[4px] w-[1.5px] rounded-r-sm ${fill}`} />
        </div>
      </div>
    </div>
  );
}
