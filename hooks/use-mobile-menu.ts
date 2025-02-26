import { useEffect, useState } from 'react';

import { UseMobileMenuResult } from './use-mobile-menu.type';

export const useMobileMenu = (): UseMobileMenuResult => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      window.scrollTo(0, 0);
      document.body.classList.add('body--no-scroll');
    } else document.body.classList.remove('body--no-scroll');

    return () => document.body.classList.remove('body--no-scroll');
  }, [isMobileMenuOpen]);

  return {
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
  };
};
