import React from 'react';
import TheCarousel from '@/widgets/why-choose-us/ui/TheCarousel';
import Image from 'next/image';
import LayoutH1 from '@/shared/layout/LayoutH1';
import LayoutSection from '@/shared/layout/LayoutSection';

const WhyChooseUs = () => {
  return (
    <LayoutSection>
      <LayoutH1>
        Почему <br className="md:hidden" /> именно мы
      </LayoutH1>
      <TheCarousel />
      <div className="relative mt-[64px] h-[392px] w-full md:mt-[54px] md:aspect-[1307/576] md:h-full">
        <Image
          src="/assets/images/illustrations/illustration-why-choose-us.png"
          alt="Hero workspace illustration"
          fill
          priority
          className="hidden object-contain md:block"
        />
        <Image
          src="/assets/images/illustrations/illustration-why-choose-us-mobile.png"
          alt="Hero workspace illustration"
          fill
          priority
          className="block object-contain md:hidden"
        />
      </div>
    </LayoutSection>
  );
};

export default WhyChooseUs;
