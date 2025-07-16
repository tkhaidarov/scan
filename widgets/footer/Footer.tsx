import React from 'react';
import LogoMobileAndFooter from '@/shared/components/LogoMobileAndFooter';
import Link from 'next/link';

const Footer = () => {
  const linkHoverStyle = 'transition-all hover:text-white/70';
  return (
    <footer className="bg-primary2 h-[137px] w-full">
      <div className="container mx-auto flex h-full w-full items-center justify-between pr-[20px] pl-[14px] md:pr-0 md:pl-0 xl:max-w-[1320px]">
        <LogoMobileAndFooter />
        <div className="flex flex-col items-end gap-5">
          <div className="flex flex-col items-end gap-1 text-white">
            <span className="text-[14px]">г. Москва, Цветной б-р, 40</span>
            <Link href="tel:+74957712111" className={linkHoverStyle}>
              +7 495 771 21 11
            </Link>
            <Link href="mailto:info@skan.ru" className={linkHoverStyle}>
              info@skan.ru
            </Link>
          </div>
          <span className="text-xs text-white">Copyright. 2025</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
