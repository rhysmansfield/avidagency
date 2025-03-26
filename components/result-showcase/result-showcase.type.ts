type ResultShowcaseItem = {
  url: string;
  title: string;
  text: string;
  result: string;
};

export type ResultShowcaseProps = {
  title: string;
  text: string;
  items: ResultShowcaseItem[];
};
