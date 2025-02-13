import { Hero } from '@/components/hero/hero';

import { URLs } from '@/data/urls';

export default function Home() {
  return (
    <Hero
      title="Ready to make an Avid statement?"
      text="Avid Agency is a trusted E-Commerce and Shopify agency, providing bespoke Shopify development and marketing to ensure nothing but consistent, quality results. Perfect for scaling."
      cta={{
        href: URLs.CONTACT,
        label: "Let's work together",
        theme: 'verde',
      }}
    />
  );
}
