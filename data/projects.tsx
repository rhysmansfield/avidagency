import { env } from 'process';

import { Project } from './projects.type';

export const PROJECTS: Project[] = [
  {
    url: '/a-modern-stack-for-the-dfc-experience',
    title: 'A modern stack for The DFC Experience',
    excerpt: 'The DFC Experience',
    description:
      'This will be a basic yet insightful description of the project below. Highlighting specific information such as the industry, length of project and tease results. It can also feature information directly about the client also.',
    tags: ['Website build', 'On-going support'],
    externalUrl: {
      href: 'https://thedfcexperience.co.uk',
      label: 'thedfcexperience.co.uk',
    },
    image: {
      src: `${env.S3_URL}/projects/the-dfc-experience/thumbnail.jpg`,
      alt: 'The DFC Experience website screenshot',
    },
    content: <p>Test</p>,
  },
];
