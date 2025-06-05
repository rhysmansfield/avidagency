export type FrequentlyAskedQuestionsItem = {
  title: string;
  text: string;
};

export type FrequentlyAskedQuestionsProps = {
  title: string;
  text: string;
  items: FrequentlyAskedQuestionsItem[];
  className?: string;
};
