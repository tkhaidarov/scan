'use client';
import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/shared/ui/sheet';
import NavMenu from '@/features/nav-menu/NavMenu';
import { AlignJustifyIcon } from 'lucide-react';
import LogoMobileAndFooter from '@/shared/components/LogoMobileAndFooter';

const NavMenuMobile = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustifyIcon
          strokeWidth={3}
          strokeLinecap="square"
          className="text-primary2 h-8 w-8"
        />
      </SheetTrigger>
      <SheetContent aria-describedby={undefined}>
        <SheetHeader className="flex h-[93px] justify-center py-0 pr-[26px] pl-[14px]">
          <SheetTitle>
            <LogoMobileAndFooter />
          </SheetTitle>
        </SheetHeader>
        <NavMenu />
      </SheetContent>
    </Sheet>
  );
};

export default NavMenuMobile;
