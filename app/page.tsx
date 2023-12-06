import { Hero } from "@/components/hero/hero";
import { TextBlock } from "@/components/text-block/text-block";

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
      <TextBlock
        id="about"
        title="Who are Avid Media?"
        text={
          <>
            <p>
              Avid Media is a digital agency based in Lancashire, UK. We
              specialise in creating bespoke digital solutions and tailored
              marketing packages - working with clients of all shapes and sizes
              to deliver exceptional results.
            </p>
          </>
        }
        cta={{
          url: "#contact",
          label: "Become a client",
        }}
      />
    </>
  );
}
