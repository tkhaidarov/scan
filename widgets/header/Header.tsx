import React from 'react';
import LogoHeader from '@/shared/components/LogoHeader';
import NavMenu from '@/features/nav-menu/NavMenu';
import Authorization from '@/features/authorization/ui/Authorization';
import NavMenuMobile from '@/features/nav-menu/NavMenuMobile';
import CompanyUsageInfo from '@/entities/company/ui/CompanyUsageInfo';
import ProfileInfo from '@/features/user/ui/ProfileInfo';

const Header = () => {
  const hiddenOnMobile = 'hidden md:flex';
  return (
    <header className="h-[93px] w-full">
      <div className="container mx-auto flex h-full items-center justify-between pr-[20px] pl-[14px] md:pr-0 md:pl-0 lg:grid lg:grid-cols-3 xl:max-w-[1320px]">
        <LogoHeader />
        <div className={`justify-center ${hiddenOnMobile}`}>
          <NavMenu />
        </div>
        <div className="hidden">
          <Authorization />
        </div>
        <div className="flex items-center justify-center md:justify-between md:gap-3">
          <CompanyUsageInfo />
          <ProfileInfo />
        </div>

        <div className="flex justify-end md:hidden">
          <NavMenuMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
