'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

import { Icon } from '@/components/icon/icon';

import { classList } from '@/utils/class-list';

import { transition } from '@/data/transition';

import { FrequentlyAskedQuestionsProps } from './frequently-asked-questions.type';

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

        return (
          <div
            key={title}
            className={classList(
              styles.item,
              isItemOpen && styles['item--active'],
            )}
          >
            <motion.button
              className={styles['item__title']}
              onTap={() => toggleOpen(title)}
            >
              {title}
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: isItemOpen ? 180 : 0 }}
                transition={transition}
              >
                <Icon name="chevron-down" />
              </motion.span>
            </motion.button>

            <AnimatePresence initial={false}>
              {isItemOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={transition}
                  className={classList(styles['item__text-wrapper'])}
                >
                  <p className={classList(styles['item__text'])}>{text}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </section>
  );
};
