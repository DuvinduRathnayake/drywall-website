import Hero from '../sections/Hero';
import ServiceTeaser from '../sections/ServiceTeaser';
import WhyChooseUs from '../sections/WhyChooseUs';

export default function Home() {
  return (
    <div className='p-6'>
      <Hero />
      <WhyChooseUs />
      <ServiceTeaser />
    </div>
  );
}
