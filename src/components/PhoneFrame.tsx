import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  /** Show the dark phone frame (desktop preview). Off on mobile / standalone. */
  framed?: boolean;
};

/**
 * Responsive container. On small screens it fills the viewport; on large
 * screens it shows a phone-sized canvas matching the Figma artboard (375x812),
 * so designs look identical to the mockups while still being a real
 * responsive web app underneath.
 */
export default function PhoneFrame({ children, framed = true }: Props) {
  return (
    <div className="w-full min-h-[100dvh] flex items-center justify-center bg-[#0d0d10] md:p-8">
      <div
        className={
          framed
            ? 'phone-viewport hidden md:block'
            : 'hidden'
        }
      >
        <div className="absolute inset-0 overflow-y-auto no-scrollbar">{children}</div>
      </div>
      {/* Mobile / narrow viewport: render full screen */}
      <div className="md:hidden screen-full bg-white overflow-y-auto no-scrollbar">
        {children}
      </div>
    </div>
  );
}
