import React from "react"

type Props = {
  href: string,
  children?: React.ReactNode,
  className?: string,
}

export const Anchor: React.FC<Props> = ({ href, children, className }) =>
  <a href={href} className={`${className || ''} hover:underline text-cyan-700 dark:text-cyan-300`} target="_blank" rel="noopener noreferrer">{children}</a>
