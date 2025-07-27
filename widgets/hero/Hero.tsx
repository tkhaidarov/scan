import React from 'react';
import { Button } from '@/shared/ui/button';
import LayoutHero from '@/shared/layout/LayoutHero';
import LayoutH1 from '@/shared/layout/LayoutH1';
import TheImage from '@/shared/components/TheImage';

const Hero = () => {
  const imagePath = '/assets/images/illustrations/illustration-hero-workspace.png';
  const imageAlt = 'Hero workspace illustration';
  const imageClassName = 'object-contain';
  return (
    <LayoutHero>
      <div className="z-1 flex-1">
        <div className="relative flex max-w-[593px] flex-col pt-5 lg:absolute lg:top-[45px] lg:max-w-none lg:pt-0">
          <LayoutH1>
            сервис по поиску
            <br className="sm:hidden lg:inline" /> публикаций
            <br className="sm:hidden lg:inline" /> о компании
            <br className="sm:hidden lg:inline" /> по его ИНН
          </LayoutH1>
          <p className="mt-5 lg:max-w-[534px] lg:text-[18px] xl:text-xl">
            Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.
          </p>
          <Button className="mt-[32px] h-[59px] w-full text-[22px] lg:mt-[70px] lg:max-w-[335px]">
            Запросить данные
          </Button>
        </div>
      </div>
      <div className="relative aspect-[620/593] w-full max-w-[620px] flex-1">
        <TheImage src={imagePath} alt={imageAlt} className={imageClassName} />
      </div>
    </LayoutHero>
  );
};

export default Hero;
