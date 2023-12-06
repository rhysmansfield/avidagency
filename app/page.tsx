import { Hero } from "@/components/hero/hero";

export default function Home() {
  return (
    <>
      <Hero
        title={["Avid", "Media"]}
        text={
          <>
            We work with a range of companies to transform their digital
            identity, through <span>best-in-class</span> digital marketing and
            web development.
          </>
        }
      />
    </>
  );
}
