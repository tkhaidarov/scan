import React from 'react';
import Image from 'next/image';

const LogoMobileAndFooter = () => {
  return (
    <div className="relative h-[73px] w-[111px] overflow-hidden md:h-[93px] md:w-[141px]">
      <Image
        src="/assets/images/logos/logo-footer.png"
        alt="Logo"
        fill
        priority
        className="object-cover"
        sizes="(max-width: 768px) 111px"
      />
    </div>
  );
};

export default LogoMobileAndFooter;
