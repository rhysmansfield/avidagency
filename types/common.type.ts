export type CommonLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type CommonImage = {
  src: string;
  alt: string;
};

type PageParams = {
  slug: string;
};

type SearchParams = {
  [key: string]: string | string[] | undefined;
};

export type CommonPageProps = Readonly<{
  params: PageParams;
  searchParams?: SearchParams;
}>;

export type CommonLayoutProps = Readonly<{
  children: React.ReactNode;
}>;
