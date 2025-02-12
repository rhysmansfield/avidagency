import { useEffect, useState } from 'react';

import { useMobileMenuHook } from './use-mobile-menu.type';

export const useMobileMenu = (): useMobileMenuHook => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      window.scrollY = 0;
      document.body.classList.add('body--no-scroll');
    } else document.body.classList.remove('body--no-scroll');
  }, [isMobileMenuOpen]);

  return {
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
  };
};
