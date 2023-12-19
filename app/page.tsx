import { Hero } from "@/components/hero/hero";
import { Services } from "@/components/services/services";
import { TextBlock } from "@/components/text-block/text-block";

import { heroProps, servicesProps, textBlockProps } from "@/json/homepage";

export default function Home() {
  return (
    <>
      <Hero {...heroProps} />
      <TextBlock {...textBlockProps} />
      <Services {...servicesProps} />
    </>
  );
}
