import { ContactForm } from '@/components/contact-form/contact-form';

import { EXTERNAL_URLS } from '@/data/urls';

const Contact = () => (
  <ContactForm
    theme="verde"
    title="Get in touch with the experts"
    text="Don't hesitate to get in touch - we're here to help you achieve your digital goals. Depending on your project needs we can tailor our solutions to meet your specific existing and future business needs."
    links={[
      {
        href: EXTERNAL_URLS.CALENDLY,
        label: 'Book a call',
        external: true,
      },
    ]}
    className="space-hero"
  />
);

export default Contact;
