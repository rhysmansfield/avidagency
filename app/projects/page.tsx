import { env } from 'process';

import { FooterContactForm } from '@/components/footer-contact-form/footer-contact-form';
import { Hero } from '@/components/hero/hero';
import {
  ProjectArticleList,
  SharedArticleList,
} from '@/components/project-article-list/project-article-list';

import { PROJECTS } from '@/data/projects';
import { URLS } from '@/data/urls';

const Projects = () => (
  <>
    <Hero
      title="Bespoke projects, consistent results."
      text="We transform ordinary results into extraordinary outcomes, without adding strain to your business, with our comprehensive digital solutions. Say goodbye to fluctuations and hello to consistent, quality results."
    />

    <ProjectArticleList
      items={[
        {
          ...PROJECTS[0],
          title: `${PROJECTS[0].title} 1`,
        },
        {
          ...PROJECTS[0],
          title: `${PROJECTS[0].title} 2`,
        },
        {
          ...PROJECTS[0],
          title: `${PROJECTS[0].title} 3`,
        },
        {
          ...PROJECTS[0],
          title: `${PROJECTS[0].title} 4`,
        },
        {
          ...PROJECTS[0],
          title: `${PROJECTS[0].title} 5`,
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
      className="space-20 md:space-28 xl:space-36"
    />
  </>
);

export default Projects;
