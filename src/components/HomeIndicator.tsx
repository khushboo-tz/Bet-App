type Props = { tint?: 'dark' | 'light' };

export default function HomeIndicator({ tint = 'dark' }: Props) {
  return (
    <div
      className={`absolute bottom-2 left-1/2 -translate-x-1/2 h-[5px] w-[134px] rounded-full ${
        tint === 'dark' ? 'bg-black/20' : 'bg-white/70'
      }`}
    />
  );
}
