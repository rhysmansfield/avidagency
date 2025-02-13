import { Button } from '@/components/button/button';

import { CommonButton } from '@/types/common.type';

export const Hero = ({
  title,
  text,
  cta,
}: {
  title: string;
  text: string;
  cta: CommonButton;
}) => (
  <section>
    <h1>{title}</h1>
    <div>
      <p>{text}</p>
      <Button
        theme="pink"
        appearance="link"
        href={cta.href}
        target={cta.external ? '_blank' : undefined}
      >
        {cta.label}
      </Button>
    </div>
  </section>
);
