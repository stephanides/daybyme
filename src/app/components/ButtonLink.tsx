import { ArrowTop } from "./ArrowTop";

export const ButtonLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="flex justify-center bg-black text-white font-medium text-base md:text-[19px] px-6 py-4 gap-4 md:gap-2 border-[3px] border-solid border-white"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="relative top-[2px] text-white">{children}</span>
    <ArrowTop />
  </a>
);
