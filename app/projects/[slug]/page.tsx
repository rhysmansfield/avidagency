import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Hero } from '@/components/hero/hero';

import { PROJECTS } from '@/data/projects';

import { CommonPageProps } from '@/types/common.type';

const getProject = async ({ params }: CommonPageProps) => {
  const { slug } = await params;
  return PROJECTS.find(({ url }) => url === `/${slug}`) || null;
};

export const generateMetadata = async ({
  params,
}: CommonPageProps): Promise<Metadata> => {
  const project = await getProject({ params });
  if (!project) return {};

  const {
    title,
    description,
    image: { src: url, alt },
  } = project;

  return {
    title,
    description,
    openGraph: {
      images: [
        {
          url,
          alt,
        },
      ],
    },
  };
};

export const Project = async ({ params }: CommonPageProps) => {
  const project = await getProject({ params });
  if (!project) return notFound();

  const { title, tags, description, externalUrl } = project;

  return (
    <>
      <Hero
        title={title}
        tags={tags}
        text={description}
        cta={
          externalUrl && {
            href: externalUrl.href,
            label: externalUrl.label,
            external: true,
            theme: 'day-outline',
          }
        }
      />
      <div
        style={{
          height: '100vh',
        }}
      ></div>
    </>
  );
};

export default Project;
