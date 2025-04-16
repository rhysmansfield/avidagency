import { classList } from '@/utils/class-list';

import styles from './loading-spinner.module.scss';

export const LoadingSpinner = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    stroke="#000"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g className={classList(styles.root)}>
      <circle
        cx="12"
        cy="12"
        r="9.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        className={styles.circle}
      ></circle>
    </g>
  </svg>
);
