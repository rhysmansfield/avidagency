import { HTMLAttributes } from 'react';

export const CloseSvg = (props: HTMLAttributes<SVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.2"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    {...props}
  >
    <path d="m22.5 2-21 20.6M1 2l21 20.3" />
  </svg>
);
