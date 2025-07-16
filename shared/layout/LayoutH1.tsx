import React from 'react';

const LayoutH1 = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="lg:text-[33px] xl:text-[45px]">{children}</h1>;
};

export default LayoutH1;
