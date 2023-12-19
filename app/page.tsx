import { Hero } from "@/components/hero/hero";

import { heroProps } from "@/json/homepage";

export default function Home() {
  return (
    <>
      <Hero {...heroProps} />
    </>
  );
}
