import { Hero } from '@/components/hero/hero';
import { TrustedBy } from '@/components/trusted-by/trusted-by';

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

    <TrustedBy />
  </>
);

export default Home;
