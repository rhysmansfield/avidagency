import { BrandCards } from '@/components/brand-cards/brand-cards';
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
    />

    <BrandCards
      title="From sinking to soaring"
      text="We grow your business with our comprehensive digital solutions. From high-converting websites to organic search engine rankings, we drive traffic through paid ads and engage customers with targeted email marketing."
      items={[
        {
          key: 'A',
          title: 'Amplify your digital presence',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
        },
        {
          key: 'V',
          title: 'Visualise your goals',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
        },
        {
          key: 'I',
          title: 'Innovate through tested strategies',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
        },
        {
          key: 'D',
          title: 'Delivery quality results',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
        },
      ]}
      className="space-36"
    />
  </>
);

export default Services;
