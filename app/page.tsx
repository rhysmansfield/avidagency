import { Hero } from "@/components/hero/hero";
import { TextBlock } from "@/components/text-block/text-block";
import { Services } from "@/components/services/services";

import { heroProps, servicesProps, textBlockProps } from "@/json/homepage";

export default function Home() {
  return (
    <>
      <Hero {...heroProps} />
      <TextBlock {...textBlockProps} />
      <Services {...servicesProps} />
      <div
        style={{
          backgroundColor: "var(--c-brand-black)",
          color: "var(--c-neutral-white)",
          padding: "5rem",
        }}
      >
        Content
      </div>
    </>
  );
}
