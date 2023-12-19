import { HeroProps } from "@/components/hero/hero.type";
import { CommonLink } from "@/types/common.type";

export const primaryCta: CommonLink = {
  label: "Become a client",
  url: "#contact",
};

export const heroProps: HeroProps = {
  title: ["Avid", "Media"],
  text: (
    <>
      We work with a range of companies to transform their digital identity,
      through <span>best-in-class</span> digital marketing and web development.
    </>
  ),
  buttons: [primaryCta, { label: "Meet the team", url: "#team" }],
  image: {
    url: "/images/hero-image.jpg",
    alt: "Projects completed by Avid Media. Including Footasylum, Primo Sports, Heat and Slice Golf Balls.",
  },
};
