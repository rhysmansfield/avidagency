import { HTMLAttributes } from 'react';

export const MenuSvg = (props: HTMLAttributes<SVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    strokeLinecap="square"
    strokeLinejoin="round"
    strokeWidth="2"
    stroke="currentColor"
    {...props}
  >
    <path d="M1 12h22M1 4h22M1 20h22" />
  </svg>
);
