export type BrandCardKey = 'A' | 'V' | 'I' | 'D';

type BrandCardItem = {
  key: BrandCardKey;
  title: string;
  text: string;
};

export type BrandCardProps = {
  title: string;
  text: string;
  items: BrandCardItem[];
  className?: string;
};
