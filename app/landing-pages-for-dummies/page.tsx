import { env } from 'process';

import { FooterContactForm } from '@/components/footer-contact-form/footer-contact-form';
import { LandingForm } from '@/components/landing-form/landing-form';
import { ResultShowcase } from '@/components/result-showcase/result-showcase';
import { ServiceGrid } from '@/components/service-grid/service-grid';

import { EXTERNAL_URLS, URLS } from '@/data/urls';

const Landing = () => (
  <>
    <LandingForm
      theme="azul"
      title="Landing pages for dummies"
      text="Sign up and we'll send you a free guide on how to create effective landing pages that convert visitors into customers. Learn the secrets of successful landing pages and start boosting your conversion rates today!"
      links={[
        {
          href: EXTERNAL_URLS.CALENDLY,
          label: 'Book a call',
          external: true,
        },
      ]}
      className="space-hero"
    />

    <ServiceGrid
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
      className="space-28 lg:space-48"
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

    <FooterContactForm
      theme="wink"
      title="Have a project in mind?"
      text="Whether you have questions, project ideas, or need assistance, we're here to help. Complete the form below to explore how we can elevate your brand's digital presence together."
      image={{
        src: `${env.S3_URL}/shared/footer-contact.png`,
        alt: 'Hand holding a phone showing The DFC Experience website',
      }}
      className="space-20 md:space-28 xl:space-40"
    />
  </>
);

export default Landing;
