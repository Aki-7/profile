import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  children?: React.ReactNode;
  className?: string;
};

export const Anchor: React.FC<Props> = ({ href, children, className }) => (
  <Link
    href={href}
    className={`${className || ""} hover:underline text-cyan-700 dark:text-cyan-300`}
    target={!href || href.startsWith("/") ? undefined : "_blank"}
    rel={!href || href.startsWith("/") ? undefined : "noopener noreferrer"}
  >
    {children}
  </Link>
);
