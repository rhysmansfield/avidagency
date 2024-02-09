import { ContactFormProps } from "@/components/contact-form/contact-form.type";
import { HeroProps } from "@/components/hero/hero.type";
import { ServicesProps } from "@/components/services/services.type";
import { TextBlockProps } from "@/components/text-block/text-block.type";
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
  buttons: [primaryCta, { label: "Our services", url: "#services" }],
  image: {
    url: "/images/hero-image.jpg",
    alt: "Projects completed by Avid Media. Including Footasylum, Primo Sports, Heat and Slice Golf Balls.",
  },
};

export const textBlockProps: TextBlockProps = {
  title: "What do we do?",
  text: "Our team will take you through a bespoke process to upgrade your website and re-think your digital stategy. We'll also work with you on an ongoing basis, towards a target for monthly sales & leads and make sure they are achieved.",
};

export const servicesProps: ServicesProps = {
  title: "Our services",
  text: "We offer 3 key services that will transform your digital identity & generate quality leads",
  image: {
    url: "/images/services-image.webp",
    alt: "Coding a website on a laptop",
  },
  services: [
    {
      title: "Digital strategy",
      text: "We work with you to define your digital strategy and roadmap, and then we help you execute it.",
    },
    {
      title: "Website development",
      text: "We build blazing-fast websites that not only look great, but also convert visitors into customers.",
    },
    {
      title: "Ongoing marketing",
      text: "We help you grow your business with ongoing marketing services, including SEO, PPC, and more.",
    },
  ],
};

export const contactFormProps: ContactFormProps = {
  title: (
    <>
      <div>Lets chat.</div> Tell us about your project.
    </>
  ),
  text: "Let's create something together 👋",
  formTitle: "Send us a message 🚀",
};
