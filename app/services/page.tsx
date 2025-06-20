import { env } from 'process';

import { BrandCards } from '@/components/brand-cards/brand-cards';
import { FooterContactForm } from '@/components/footer-contact-form/footer-contact-form';
import { FullWidthImage } from '@/components/full-width-image/full-width-image';
import { Hero } from '@/components/hero/hero';
import { ServiceList } from '@/components/service-list/service-list';

const Services = () => (
  <>
    <Hero
      title="Fully-stacked services"
      text="From website development to digital marketing, we offer tailored services to enhance your brand's online presence. Whether you need Shopify development, ecommerce solutions, or strategic marketing - our team is ready to help you succeed."
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
          title: 'Amplify',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
        },
        {
          key: 'V',
          title: 'Visualise',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
        },
        {
          key: 'I',
          title: 'Innovate',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
        },
        {
          key: 'D',
          title: 'Deliver',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
        },
      ]}
      className="space-24 md:space-36"
    />

    <ServiceList
      items={[
        {
          image: {
            src: 'https://i.imgur.com/BBTRwm9.jpeg',
            alt: 'A person working on a laptop with a coffee cup beside them',
          },
          title: 'Bespoke websites',
          text: 'Every website is tailored and fine-tuned to your business needs. We blend innovative design, cutting-edge technology, and strategic content to deliver visually appealing, engaging, and highly functional websites that convert, elevating your brand to the next level.',
          services: [
            'UX/UI Design',
            'Shopify websites',
            'React websites',
            'SparkLayer integrations',
          ],
        },
        {
          image: {
            src: 'https://i.imgur.com/BBTRwm9.jpeg',
            alt: 'A person working on a laptop with a coffee cup beside them',
          },
          title: 'Tailored marketing',
          text: 'We tailor marketing strategies to fit your unique needs. From targeted ad campaigns to engaging content creation, we increase your brand visibility and drive customer engagement with our proven marketing solutions.',
          services: ['Strategy', 'Paid advertising', 'SEO', 'Email'],
        },
        {
          image: {
            src: 'https://i.imgur.com/BBTRwm9.jpeg',
            alt: 'A person working on a laptop with a coffee cup beside them',
          },
          title: 'E-Commerce solutions',
          text: 'We meticulously craft every e-commerce solution to suit your requirements. From custom Shopify development to seamless payment integration, we optimise every aspect of your e-commerce store. Elevating your online presence and driving growth for your business.',
          services: [
            'Shopify development',
            'Sparklayer integrations',
            'Converstion rate optimisation',
          ],
        },
      ]}
      className="space-36 md:space-48"
    />

    <FooterContactForm
      theme="wink"
      title="Have a project in mind?"
      text="Whether you have questions, project ideas, or need assistance, we're here to help. Complete the form below to explore how we can elevate your brand's digital presence together."
      image={{
        src: `${env.S3_URL}/shared/footer-contact.png`,
        alt: 'Hand holding a phone showing The DFC Experience website',
      }}
      className="space-20 md:space-28 xl:space-36"
    />
  </>
);

export default Services;
