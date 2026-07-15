import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface LiveProjectButtonProps {
  href: string;
  className?: string;
  children?: ReactNode;
}

export default function LiveProjectButton({
  href,
  className = '',
  children = 'Live Project',
}: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-colors duration-200 hover:bg-[#D7E2EA]/10 ${className}`}
    >
      {children}
      <ArrowUpRight size={18} />
    </a>
  );
}