import { Project } from './projects.type';

export const PROJECTS: Project[] = [
  {
    url: '/project-name',
    title: 'Project Name',
    excerpt: 'Client Name',
    description: 'Test',
    tags: ['Web Design', 'Web Development', 'SEO'],
    image: {
      src: 'https://placehold.co/1280x640/FFF/000',
      alt: 'Project Name',
    },
    content: <p>Test</p>,
  },
];
