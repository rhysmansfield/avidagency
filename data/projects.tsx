import { Project } from './projects.type';

export const PROJECTS: Project[] = [
  {
    url: '/project-name',
    title: 'Project Name',
    excerpt: 'Client Name',
    description: 'Test',
    tags: ['Web Design', 'Web Development', 'SEO'],
    image: {
      src: 'https://i.imgur.com/BBTRwm9.jpeg',
      alt: 'Project Name',
    },
    content: <p>Test</p>,
  },
];
