import { Hero } from "@/components/hero/hero";
import { TextBlock } from "@/components/text-block/text-block";
import { Services } from "@/components/services/services";

import {
  contactFormProps,
  heroProps,
  servicesProps,
  textBlockProps,
} from "@/json/homepage";
import { ContactForm } from "@/components/contact-form/contact-form";

export default function Home() {
  return (
    <>
      <Hero {...heroProps} />
      <TextBlock {...textBlockProps} />
      <Services {...servicesProps} />
      <ContactForm {...contactFormProps} />
    </>
  );
}
