import { env } from 'process';

import { FooterContactForm } from '@/components/footer-contact-form/footer-contact-form';
import { FrequentlyAskedQuestions } from '@/components/frequently-asked-questions/frequently-asked-questions';
import { Hero } from '@/components/hero/hero';
import { ImpactText } from '@/components/impact-text/impact-text';
import { LogoSwiper } from '@/components/logo-swiper/logo-swiper';
import { ProjectArticleList } from '@/components/project-article-list/project-article-list';
import { RadialImage } from '@/components/radial-image/radial-image';
import { ResultShowcase } from '@/components/result-showcase/result-showcase';
import { ServiceGrid } from '@/components/service-grid/service-grid';

import { PROJECTS } from '@/data/projects';
import { URLS } from '@/data/urls';

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
        src: `${env.S3_URL}/homepage/hero-phone-060625.webp`,
        alt: 'Hand holding a phone showing The DFC Experience website',
      }}
      className="space-20 sm:space-32"
    />

    <ImpactText
      title={
        <>
          Scaling your Shopify or ecommerce business with{' '}
          <span>results, not just promises.</span>
        </>
      }
      className="space-24 sm:space-40"
    />

    <ServiceGrid
      title="Our services"
      text="We offer a range of tailored services to elevate your brand's online presence. Everything from website development to strategic marketing."
      cta={{
        href: URLS.SERVICES,
        label: 'View all services',
      }}
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
      className="space-28 lg:space-56"
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
          theme: 'azul',
          href: URLS.PROJECTS,
          label: 'View all projects',
        },
      ]}
      className="space-20 md:space-40"
    />

    <ResultShowcase
      theme="verde"
      title="Why our clients choose us"
      text="Explore some of our exceptional client results and discover why brands seeking success choose us."
      items={[
        {
          title: 'Increase in revenue',
          text: 'Pannelli UK',
          result: '+180%',
        },
        {
          title: 'Average order value',
          text: 'Pannelli UK',
          result: '+30%',
        },
        {
          title: 'Increase in revenue',
          text: 'Slice Golf Balls',
          result: '+235%',
        },
        {
          title: 'Average order value',
          text: 'Slice Golf Balls',
          result: '+31%',
        },
        {
          title: 'Increase in revenue',
          text: 'Fresher Fighter',
          result: '+326%',
        },
      ]}
    />

    <FrequentlyAskedQuestions
      title="Frequently asked questions"
      text="This is a basic description, supporting the title of this section. It should simply inform the user and provide an effective button below if applicable."
      items={[
        {
          title: 'What services do you offer?',
          text: 'We offer a range of digital services including web design, development, SEO, paid advertising, and social media marketing.',
        },
        {
          title: 'How can I get a quote?',
          text: 'You can get a quote by contacting us through our contact form or by emailing us directly.',
        },
        {
          title: 'Do you work with international clients?',
          text: 'Yes, we work with clients from all over the world.',
        },
        {
          title: 'What is your project turnaround time?',
          text: 'Our project turnaround time varies depending on the scope and complexity of the project. We will provide an estimated timeline during the initial consultation.',
        },
      ]}
      className="space-24 md:space-36"
    />

    <FooterContactForm
      theme="wink"
      title="Have a project in mind?"
      text="Whether you have questions, project ideas, or need assistance, we're here to help. Complete the form below to explore how we can elevate your brand's digital presence together."
      image={{
        src: `${env.S3_URL}/shared/footer-contact.png`,
        alt: 'Hand holding a phone showing The DFC Experience website',
      }}
      className="space-32 xl:space-42"
    />
  </>
);

export default Home;
