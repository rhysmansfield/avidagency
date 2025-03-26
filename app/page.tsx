import { Hero } from '@/components/hero/hero';
import { ImpactText } from '@/components/impact-text/impact-text';
import { LogoSwiper } from '@/components/logo-swiper/logo-swiper';
import { ProjectArticleList } from '@/components/project-article-list/project-article-list';
import { ProjectArticle } from '@/components/project-article/project-article';
import { RadialImage } from '@/components/radial-image/radial-image';
import { ServiceGrid } from '@/components/service-grid/service-grid';

import { PROJECTS } from '@/data/projects';
import { URLS } from '@/data/urls';

import { CommonButton } from '@/types/common.type';

const Home = () => (
  <>
    <Hero
      title="Ready to make an Avid statement?"
      text="Avid Agency is a trusted ecommerce and Shopify agency, providing bespoke Shopify development and marketing to ensure nothing but consistent, quality results. Perfect for scaling."
      cta={{
        href: URLS.CONTACT,
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
      cta={{
        href: URLS.SERVICES,
        label: 'View all services',
      }}
      title="Our services"
      text="We offer a range of tailored services to elevate your brand's online presence. Everything from website development to strategic marketing."
      items={[
        {
          title: 'Web Development',
          text: "We craft bespoke websites tailored to your brand's needs, ensuring seamless functionality and optimised conversions.",
        },
        {
          title: 'Ecommerce',
          text: 'We meticulously craft every e-commerce solution to suit your requirements. Elevating your online presence and driving growth for your business.',
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

    <ProjectArticleList
      title="Some of our recent Projects"
      items={[
        PROJECTS[0],
        PROJECTS[0],
        PROJECTS[0],
        PROJECTS[0],
        {
          theme: 'wink',
          href: URLS.PROJECTS,
          label: 'View all projects',
        },
      ]}
    />
  </>
);

export default Home;
