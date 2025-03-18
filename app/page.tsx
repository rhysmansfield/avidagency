import { Hero } from '@/components/hero/hero';
import { ImpactText } from '@/components/impact-text/impact-text';
import { LogoSwiper } from '@/components/logo-swiper/logo-swiper';
import { RadialImage } from '@/components/radial-image/radial-image';
import { ServiceGrid } from '@/components/service-grid/service-grid';

import { URLs } from '@/data/urls';

const Home = () => (
  <>
    <Hero
      title="Ready to make an Avid statement?"
      text="Avid Agency is a trusted ecommerce and Shopify agency, providing bespoke Shopify development and marketing to ensure nothing but consistent, quality results. Perfect for scaling."
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
      image={{
        src: 'https://avidagency.s3.eu-north-1.amazonaws.com/homepage/hero-phone.webp',
        alt: 'Hand holding a phone showing The DFC Experience website',
      }}
    />

    <ImpactText
      title={
        <>
          Scaling your Shopify or ecommerce business with{' '}
          <span>results, not just promises.</span>
        </>
      }
    />

    <ServiceGrid
      href={URLs.SERVICES}
      items={[
        {
          title: 'UX/UI Design',
          text: 'We create elevated user experience and interface designs to increase user engagement as well as brand alignment.',
        },
        {
          title: 'Web Development',
          text: "We craft bespoke websites tailored to your brand's needs, ensuring seamless functionality and optimised conversions.",
        },
        {
          title: 'Paid Ads',
          text: 'We drive targeted traffic and maximise ROI with strategic paid advertising campaigns across various platforms.',
        },
        {
          title: 'Email Marketing',
          text: 'We nurture customer relationships and drive conversions through personalised and impactful email campaigns.',
        },
        {
          title: 'SEO',
          text: 'We enhance your online visibility across search engine results pages, attracting more organic traffic and potential customers.',
        },
      ]}
    />
  </>
);

export default Home;
