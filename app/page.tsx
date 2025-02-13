import { Hero } from '@/components/hero/hero';
import { LogoSwiper } from '@/components/logo-swiper/logo-swiper';

import { URLs } from '@/data/urls';

const Home = () => (
  <>
    <Hero
      title="Ready to make an Avid statement?"
      text="Avid Agency is a trusted e-commerce and Shopify agency, providing bespoke Shopify development and marketing to ensure nothing but consistent, quality results. Perfect for scaling."
      cta={{
        href: URLs.CONTACT,
        label: "Let's work together",
        theme: 'verde',
      }}
    />

    <LogoSwiper
      title="Trusted by:"
      items={[
        'pets',
        'footasylum',
        'heat',
        'meta',
        'shopify-partners',
        'sparklayer',
      ]}
    />
  </>
);

export default Home;
