'use client';

import { Target, TargetAndTransition, motion } from 'motion/react';
import { useState } from 'react';

import { FrequentlyAskedQuestionsProps } from '@/components/frequently-asked-questions/frequently-asked-questions.type';

import { classList } from '@/utils/class-list';

import { transition } from '@/data/transition';

import styles from './frequently-asked-questions.module.scss';

export const FrequentlyAskedQuestions = ({
  title,
  text,
  items,
  className,
}: FrequentlyAskedQuestionsProps) => {
  const [isOpen, setIsOpen] = useState<string | null>(items[0].title);

  const toggleOpen = (title: string) => {
    setIsOpen((prev) => (prev === title ? null : title));
  };

  return (
    <section className={classList('wrapper', styles.root, className)}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>

      {items.map(({ title, text }) => {
        const isItemOpen = isOpen === title;
        const animationControls: Target = isItemOpen
          ? { height: 'auto', opacity: 1 }
          : {
              height: 0,
              opacity: 0,
            };

        return (
          <div
            key={title}
            className={classList(
              styles.item,
              isItemOpen && styles['item--active'],
            )}
          >
            <button
              className={styles['item__title']}
              onClick={() => toggleOpen(title)}
            >
              {title}
            </button>

            <motion.p
              initial={animationControls}
              animate={animationControls}
              transition={transition}
              className={styles['item__text']}
              style={{
                visibility: isItemOpen ? 'visible' : 'hidden',
              }}
            >
              {text}
            </motion.p>
          </div>
        );
      })}
    </section>
  );
};
