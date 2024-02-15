import About from '@/components/site/about';
import Docs from '@/components/site/documentation';
import Features from '@/components/site/features';
import Footer from '@/components/site/footer';
import Hero from '@/components/site/hero';
import PriceCards from '@/components/site/pricing';

export default function Home() {
  return (
    <>
      <Hero />
      <PriceCards />
      <About />
      <Features />
      <Docs />
      <Footer />
    </>
  );
}
