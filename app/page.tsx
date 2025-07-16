import Hero from '@/widgets/hero/Hero';
import WhyChooseUs from '@/widgets/why-choose-us/WhyChooseUs';
import Tariffs from '@/widgets/tariffs/Tariffs';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <WhyChooseUs />
      <Tariffs />
    </div>
  );
}
