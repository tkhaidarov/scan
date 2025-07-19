import React from 'react';

const LayoutH2 = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="lg:text-[33px] xl:text-[45px]">{children}</h2>;
};

export default LayoutH2;
