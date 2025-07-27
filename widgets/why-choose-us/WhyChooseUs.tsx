import React from 'react';
import TheCarousel from '@/widgets/why-choose-us/ui/TheCarousel';
import LayoutH2 from '@/shared/layout/LayoutH2';
import LayoutSection from '@/shared/layout/LayoutSection';
import TheImage from '@/shared/components/TheImage';

const WhyChooseUs = () => {
  const imagePath = '/assets/images/illustrations/illustration-why-choose-us.png';
  const imagePathMobile = '/assets/images/illustrations/illustration-why-choose-us-mobile.png';
  const imageAlt = 'Hero workspace illustration';
  const imageClassName = 'hidden object-contain md:block';
  const imageClassNameMobile = 'block object-contain md:hidden';
  return (
    <LayoutSection>
      <LayoutH2>
        Почему <br className="md:hidden" /> именно мы
      </LayoutH2>
      <TheCarousel />
      <div className="relative mt-[64px] h-[392px] w-full md:mt-[54px] md:aspect-[1307/576] md:h-full">
        <TheImage src={imagePath} alt={imageAlt} className={imageClassName} />
        <TheImage src={imagePathMobile} alt={imageAlt} className={imageClassNameMobile} />
      </div>
    </LayoutSection>
  );
};

export default WhyChooseUs;
