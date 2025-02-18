import { Hero } from '@/components/hero/hero';
import { LogoSwiper } from '@/components/logo-swiper/logo-swiper';
import { RadialImage } from '@/components/radial-image/radial-image';

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
        'shopify-partners',
        'meta',
        'sparklayer',
      ]}
    />

    <RadialImage
      images={{
        mobile: {
          src: 'https://avidagency.s3.eu-north-1.amazonaws.com/homepage/mobile.webp',
          alt: 'Radial image mobile',
        },
        desktop: {
          src: 'https://avidagency.s3.eu-north-1.amazonaws.com/homepage/desktop.webp',
          alt: 'Radial image desktop',
        },
      }}
    />
  </>
);

export default Home;
