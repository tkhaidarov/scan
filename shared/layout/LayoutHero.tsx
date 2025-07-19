import React from 'react';

const LayoutHero = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="relative flex h-full w-full flex-col items-center justify-between gap-6 pr-[20px] pl-[14px] md:pr-0 md:pl-0 lg:flex-row lg:gap-0">
      {children}
    </section>
  );
};

export default LayoutHero;
