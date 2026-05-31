import { FULL_VERSION_NOTE, useHideUnsupported } from "../lib/demo";

// A small "Full version only" pill shown next to features that can't run in the
// browser-only demo. Renders nothing when the user has opted to hide unsupported
// features (Settings → "Hide unsupported features").
export default function FullVersionBadge({ note, className = "" }: { note?: string; className?: string }) {
  const hidden = useHideUnsupported();
  if (hidden) return null;
  return (
    <span
      title={note || FULL_VERSION_NOTE}
      className={`inline-flex items-center rounded px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide bg-amber-950/50 text-amber-300 border border-amber-900/70 ${className}`}
    >
      Full version only
    </span>
  );
}
