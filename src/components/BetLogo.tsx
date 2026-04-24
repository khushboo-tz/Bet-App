type Props = { size?: number; className?: string };

/**
 * "Bet On You" mark — a raised fist with a small chart/arrow on the back
 * of the hand, matching the splash screen in Figma.
 */
export default function BetLogo({ size = 132, className = '' }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Fist silhouette (stylized) */}
      <g fill="#151518">
        <path d="M44 92c0-19 14-34 32-34 4 0 8 0 12 2 4-4 9-6 15-6 11 0 20 8 20 19v22c0 23-16 41-39 41H70c-15 0-26-10-26-25V92z" />
        <rect x="56" y="62" width="14" height="30" rx="6" />
        <rect x="72" y="56" width="14" height="36" rx="6" />
        <rect x="88" y="58" width="14" height="34" rx="6" />
        <rect x="104" y="66" width="14" height="26" rx="6" />
      </g>
      {/* Chart lines + arrow on top of hand */}
      <g stroke="#151518" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M48 54 L78 34 L96 44 L126 18" />
        <path d="M118 18 L128 18 L128 28" />
      </g>
      {/* Chart bars */}
      <g fill="#151518">
        <rect x="64" y="40" width="6" height="16" rx="1.5" />
        <rect x="76" y="30" width="6" height="26" rx="1.5" />
        <rect x="88" y="36" width="6" height="20" rx="1.5" />
      </g>
    </svg>
  );
}
