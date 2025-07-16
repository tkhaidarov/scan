import React from 'react';
import Image from 'next/image';
import { Button } from '@/shared/ui/button';

const Hero = () => {
  return (
    <section className="relative flex h-full w-full flex-col items-center justify-between gap-6 pr-[20px] pl-[14px] md:pr-0 md:pl-0 lg:flex-row lg:gap-0">
      <div className="z-1 flex-1">
        <div className="relative flex max-w-[593px] flex-col pt-5 lg:absolute lg:top-[45px] lg:max-w-none lg:pt-0">
          <h1 className="text-[28px] lg:text-[44px] xl:text-6xl">
            сервис по поиску
            <br className="sm:hidden lg:inline" /> публикаций
            <br className="sm:hidden lg:inline" /> о компании
            <br className="sm:hidden lg:inline" /> по его ИНН
          </h1>
          <p className="mt-5 lg:max-w-[534px] lg:text-[18px] xl:text-xl">
            Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.
          </p>
          <Button className="mt-[32px] h-[59px] w-full text-[22px] lg:mt-[70px] lg:max-w-[335px]">
            Запросить данные
          </Button>
        </div>
      </div>

      <div className="relative aspect-[620/593] w-full max-w-[620px] flex-1">
        <Image
          src="/assets/images/illustrations/illustration-hero-workspace.png"
          alt="Hero workspace illustration"
          fill
          priority
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
