import { Hero } from "@/components/hero/hero";

import { homepageHeroProps } from "@/json/homepage";

export default function Home() {
  return (
    <>
      <Hero {...homepageHeroProps} />
    </>
  );
}
