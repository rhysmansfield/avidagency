import Link from "next/link";

import styles from "@/styles/pages/privacy-policy.module.scss";

const PrivacyPolicy = () => (
  <section className={styles.root}>
    <h1 className={styles.title}>Privacy Policy</h1>

    <div className={styles.wrapper}>
      <p>
        This Privacy Policy outlines how Avid Agency (&#34;we,&#34;
        &#34;us,&#34; or &#34;our&#34;) collects, uses, discloses, and protects
        your information. By accessing or using the Website, you agree to the
        terms of this Privacy Policy.
      </p>

      <h2>Information We Collect</h2>

      <h3>Personal Information</h3>
      <p>
        We may collect personal information, such as your name, email address,
        and other contact details when you voluntarily provide it to us through
        forms or other interactions on the Website.
      </p>

      <h3>Automatically Collected Information</h3>

      <p>
        We may also automatically collect certain information about your device,
        including your IP address, browser type, and operating system. This
        information helps us improve the Website and better understand how
        visitors use it.
      </p>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>
          To respond to your inquiries or provide the services you request.
        </li>
        <li>
          To send you updates, newsletters, or promotional materials, if you
          have opted to receive them.
        </li>
        <li>
          To analyze and improve the functionality and user experience of the
          Website.
        </li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2>Cookies and Similar Technologies</h2>
      <p>
        We use cookies and similar technologies to collect information about
        your browsing behavior on the Website. You can manage your cookie
        preferences through your browser settings.
      </p>

      <h2>Third-Party Disclosure</h2>
      <p>
        We do not sell, trade, or otherwise transfer your personal information
        to third parties without your consent, except for trusted third parties
        who assist us in operating the Website or conducting our business,
        provided they agree to keep this information confidential.
      </p>

      <h2>Security</h2>
      <p>
        We implement reasonable security measures to protect your personal
        information from unauthorized access, disclosure, alteration, and
        destruction.
      </p>

      <h2>Your Rights</h2>
      <p>
        You have the right to access, correct, update, or delete your personal
        information. To exercise these rights, please contact us at{" "}
        <Link href={`mailto:${process.env.SMTP_AUTH_USER}`}>
          {process.env.SMTP_AUTH_USER}
        </Link>
        .
      </p>

      <h2>Changes to this Privacy Policy</h2>
      <p>
        We may update this Privacy Policy periodically. We will notify you of
        any changes by posting the updated policy on the Website.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy, please
        contact us at{" "}
        <Link href={`mailto:${process.env.SMTP_AUTH_USER}`}>
          {process.env.SMTP_AUTH_USER}
        </Link>
        .
      </p>
    </div>
  </section>
);

export default PrivacyPolicy;
