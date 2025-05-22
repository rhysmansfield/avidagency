import { ContactForm } from '@/components/contact-form/contact-form';
import { LandingForm } from '@/components/landing-form/landing-form';

import { EXTERNAL_URLS } from '@/data/urls';

const Landing = () => (
  <>
    <LandingForm
      theme="verde"
      title="Lead magnet headline"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      links={[
        {
          href: EXTERNAL_URLS.CALENDLY,
          label: 'Book a call',
          external: true,
        },
      ]}
    />
  </>
);

export default Landing;
