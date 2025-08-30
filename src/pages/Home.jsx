import Hero from '../sections/Hero';
import ServiceTeaser from '../sections/ServiceTeaser';
import WhyChooseUs from '../sections/WhyChooseUs';
import FeaturedProjects from '../sections/FeaturedProjects';
import Testimonials from '../sections/Testimonials';
import PrimaryCTA from '../sections/PrimaryCTA';
import PageEnter from '../components/PageEnter';

export default function Home() {
  return (
    <div className='p-6'>
      <PageEnter>
        <Hero />
        <WhyChooseUs />
        <ServiceTeaser />
        <FeaturedProjects />
        <Testimonials />
        <PrimaryCTA />
      </PageEnter>
    </div>
  );
}
