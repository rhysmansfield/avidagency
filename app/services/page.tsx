import { FullWidthImage } from '@/components/full-width-image/full-width-image';
import { Hero } from '@/components/hero/hero';

const Services = () => (
  <>
    <Hero
      title="Fully-stacked services"
      text="From website development to digital marketing, we offer tailored services to enhance your brand's online presence. Whether you need Shopify development, ecommerce solutions, or strategic marketing - our team is ready to help you succeed."
      className="space-hero"
    />
    <FullWidthImage
      image={{
        src: 'https://i.imgur.com/BBTRwm9.jpeg',
        alt: 'A person working on a laptop with a coffee cup beside them',
      }}
      className="space-20 sm:space-32"
    />
  </>
);

export default Services;
