import React from 'react';
import { CAROUSEL_DATA } from './constants';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui/carousel';

const TheCarousel = () => {
  return (
    <div>
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4 py-4">
          {CAROUSEL_DATA.map((item, index) => (
            <CarouselItem key={index} className="basis-full pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="mx-auto flex h-[188px] w-full max-w-[298px] flex-col gap-[15px] rounded-md bg-white px-5 pt-[20px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.20)] lg:h-[225px] xl:w-[400px] xl:max-w-[400px] xl:gap-[19px] xl:pt-[30px]">
                <div className="relative h-12 w-12 lg:h-16 lg:w-16">
                  <Image
                    src={item.iconPath}
                    alt="Carousel icons"
                    fill
                    sizes="(max-width: 768px) 50px, 64px"
                    className="object-contain"
                  />
                </div>
                <p className="w-full text-[18px] lg:max-w-[313px]">{item.description}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hover:bg-muted-foreground/20 -left-4 h-12 w-12 border-none bg-transparent lg:-left-7 [&>svg]:h-10 [&>svg]:w-10" />
        <CarouselNext className="hover:bg-muted-foreground/20 -right-4 h-12 w-12 border-none bg-transparent lg:-right-7 [&>svg]:h-10 [&>svg]:w-10" />
      </Carousel>
    </div>
  );
};

export default TheCarousel;
