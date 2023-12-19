import { Hero } from "@/components/hero/hero";
import { TextBlock } from "@/components/text-block/text-block";

import { heroProps, textBlockProps } from "@/json/homepage";

export default function Home() {
  return (
    <>
      <Hero {...heroProps} />
      <TextBlock {...textBlockProps} />
    </>
  );
}
