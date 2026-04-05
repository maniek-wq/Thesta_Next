export function NewsCardImagePlaceholder() {
  return (
    <div
      className="relative aspect-video w-full overflow-hidden bg-gradient-to-b from-[#0a1420] to-[#060d16]"
      aria-hidden
    >
      {/* Subtle sonar tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-sonar/[0.03] to-transparent" />
      {/* Radial glow */}
      <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,212,177,0.13)_0%,transparent_70%)]" />
      {/* Sonar / radar icon */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sonar/60">
        <svg width="52" height="52" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.25" />
          <circle cx="32" cy="32" r="21" stroke="currentColor" strokeWidth="1" opacity="0.45" />
          <circle cx="32" cy="32" r="12" stroke="currentColor" strokeWidth="1" opacity="0.65" />
          <circle cx="32" cy="32" r="4" fill="currentColor" opacity="0.9" />
          <line x1="32" y1="32" x2="32" y2="2" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          <line x1="32" y1="32" x2="58" y2="32" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          <line x1="32" y1="32" x2="11" y2="11" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        </svg>
      </div>
      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#060a10]/80 to-transparent" />
    </div>
  );
}
