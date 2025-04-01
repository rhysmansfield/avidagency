import { FooterContactForm } from '@/components/footer-contact-form/footer-contact-form';
import { Hero } from '@/components/hero/hero';
import { ImpactText } from '@/components/impact-text/impact-text';
import { LogoSwiper } from '@/components/logo-swiper/logo-swiper';
import { ProjectArticleList } from '@/components/project-article-list/project-article-list';
import { ProjectArticle } from '@/components/project-article/project-article';
import { RadialImage } from '@/components/radial-image/radial-image';
import { ResultShowcase } from '@/components/result-showcase/result-showcase';
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
      title="Some of our recent projects"
      items={[
        {
          ...PROJECTS[0],
          title: 'Project Name 1',
        },
        {
          ...PROJECTS[0],
          title: 'Project Name 2',
        },
        {
          ...PROJECTS[0],
          title: 'Project Name 3',
        },
        {
          ...PROJECTS[0],
          title: 'Project Name 4',
        },
        {
          theme: 'wink',
          href: URLS.PROJECTS,
          label: 'View all projects',
        },
      ]}
    />

    <ResultShowcase
      theme="verde"
      title="Why our clients choose us"
      text="Explore some of our exceptional client results and discover why brands seeking success choose us."
      items={[
        {
          url: URLS.PROJECTS,
          title: 'Boosted engagement',
          text: 'Client name',
          result: '+XX%',
        },
        {
          url: URLS.PROJECTS,
          title: 'Increase in organic traffic',
          text: 'Client name',
          result: '+XX%',
        },
        {
          url: URLS.PROJECTS,
          title: 'Increase in conversion',
          text: 'Client name',
          result: '+X.X%',
        },
        {
          url: URLS.PROJECTS,
          title: 'Lighthouse performance score',
          text: 'Client name',
          result: '+XXX%',
        },
        {
          url: URLS.PROJECTS,
          title: 'Returning customers',
          text: 'Client name',
          result: '+XX%',
        },
      ]}
    />

    <FooterContactForm
      theme="azul"
      title="Have a project in mind?"
      text="Whether you have questions, project ideas, or need assistance, we're here to help. Complete the form below to explore how we can elevate your brand's digital presence together."
      image={{
        src: 'https://placehold.co/1280x1280',
        alt: 'Hand holding a phone showing The DFC Experience website',
      }}
    />
  </>
);

export default Home;
