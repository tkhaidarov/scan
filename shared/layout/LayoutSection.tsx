import React from 'react';

const LayoutSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="mt-[59px] flex flex-col gap-4 pr-[26px] pl-[14px] lg:mt-[109px] lg:gap-[54px]">
      {children}
    </section>
  );
};

export default LayoutSection;
