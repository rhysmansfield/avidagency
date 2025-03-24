import { Project } from './projects.type';

export const PROJECTS: Project[] = [
  {
    url: '/project-name',
    title: 'Project Name',
    excerpt: 'Client Name',
    description: 'Test',
    tags: ['PPC', 'Paid Social'],
    image: {
      src: 'https://i.imgur.com/BBTRwm9.jpeg',
      alt: 'Project Name',
    },
    content: <p>Test</p>,
  },
];
