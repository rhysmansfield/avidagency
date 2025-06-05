import { Tween } from 'motion/react';

export type TransitionProps = {
  duration: number;
} & Pick<Tween, 'ease'>;
