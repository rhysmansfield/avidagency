import { Project } from './projects.type';

export const PROJECTS: Project[] = [
  {
    url: '/project-name',
    title: 'Project name',
    excerpt: 'Client name',
    description: 'Test',
    tags: ['PPC', 'Email marketing'],
    image: {
      src: 'https://i.imgur.com/BBTRwm9.jpeg',
      alt: 'Project Name',
    },
    content: <p>Test</p>,
  },
];
