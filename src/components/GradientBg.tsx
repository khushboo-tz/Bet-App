import type { ReactNode } from 'react';

/**
 * Soft cream → lavender gradient background used on splash and onboarding
 * screens, matching the Figma vectors (Vector 1 + Vector 2 blobs).
 */
export default function GradientBg({ children }: { children: ReactNode }) {
  return (
    <div
      className="screen-full relative overflow-hidden"
      style={{
        background:
          'linear-gradient(203.85deg, #f9f0df 0%, #e7e6eb 55%, #c6b3ef 100%)',
      }}
    >
      {/* Soft lime / orange blob bottom-left */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          top: 420,
          left: -140,
          width: 430,
          height: 420,
          background:
            'radial-gradient(closest-side, rgba(205,234,92,0.55), rgba(205,234,92,0) 70%)',
          filter: 'blur(10px)',
        }}
      />
      {/* Soft purple blob top-right */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          top: -140,
          right: -120,
          width: 400,
          height: 400,
          background:
            'radial-gradient(closest-side, rgba(159,127,240,0.45), rgba(159,127,240,0) 70%)',
          filter: 'blur(8px)',
        }}
      />
      {children}
    </div>
  );
}
