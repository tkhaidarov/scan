'use client';
import React from 'react';
import Image from 'next/image';

const LogoHeader = () => {
  return (
    <div className="relative h-[73px] w-[111px] overflow-hidden md:h-[93px] md:w-[141px]">
      <Image
        src="/assets/images/logos/logo-header.png"
        alt="Logo"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 111px, 141px"
      />
    </div>
  );
};

export default LogoHeader;
