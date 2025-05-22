import {
  Body,
  Column,
  Container,
  Font,
  Html,
  Img,
  Preview,
  Row,
  Section,
} from '@react-email/components';
import Head from 'next/head';

import { ContactThankYouProps } from '@/emails/emails.type';

import { EXTERNAL_URLS } from '@/data/urls';

export const ContactThankYou = ({
  title,
  name,
  email,
  services = [],
  message,
}: ContactThankYouProps) => {
  const firstName = name.split(' ')[0];

  return (
    <Html>
      <Head>
        <Font
          fontFamily="DM Sans"
          fallbackFontFamily="Helvetica"
          webFont={{
            url: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap',
            format: 'woff2',
          }}
          fontStyle="normal"
        />
        <title>
          Hey {firstName}, {title}
        </title>
      </Head>
      <Body
        style={{
          fontFamily: 'DM Sans, sans-serif',
          backgroundColor: '#eee',
        }}
      >
        <Preview>{title}</Preview>
        <Container
          style={{
            maxWidth: '640px',
          }}
        >
          <Section
            style={{
              padding: '32px 16px',
              background: 'linear-gradient(180deg, #1c1e20 0%, #1c1e20 100%)',
              backgroundColor: '#1c1e20',
              color: '#f8f8f8',
            }}
          >
            <Row
              style={{
                width: 'auto',
                margin: '0 auto',
              }}
            >
              <Column
                style={{
                  paddingRight: '14px',
                }}
              >
                <a href="https://avidagency.co.uk">
                  <Img
                    src={`${process.env.S3_URL}/email/avid-white.png`}
                    alt="Avid Agency"
                    width="64"
                  />
                </a>
              </Column>
              <Column
                style={{
                  height: '100%',
                  paddingLeft: '14px',
                  borderLeft: '1px solid #515254',
                }}
              >
                <Row
                  style={{
                    fontSize: '12px',
                    fontWeight: 400,
                    lineHeight: '130%',
                  }}
                >
                  <Column>
                    <span
                      style={{
                        background: '#1c1e20',
                        mixBlendMode: 'screen',
                      }}
                    >
                      <span
                        style={{
                          background: '#1c1e20',
                          mixBlendMode: 'difference',
                        }}
                      >
                        For everything
                      </span>
                    </span>
                  </Column>
                  <Column
                    style={{
                      paddingLeft: '8px',
                    }}
                  >
                    <Img
                      src={`${process.env.S3_URL}/email/shopify-white.png`}
                      alt="Shopify"
                      width="56"
                    />
                  </Column>
                </Row>
              </Column>
            </Row>
          </Section>
          <Section
            style={{
              backgroundColor: '#f8f8f8',
              color: '#1c1e20',
              padding: '32px 24px',
            }}
          >
            <div
              style={{
                maxWidth: '512px',
                margin: '0 auto',
              }}
            >
              <h1
                style={{
                  fontSize: '32px',
                  fontWeight: 500,
                  lineHeight: '120%',
                  margin: '0 0 20px 0',
                }}
              >
                Hey {firstName},
              </h1>
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '130%',
                }}
              >
                <p>
                  We've received your message and appreciate you reaching out to
                  us. We are reviewing your request, and you can expect a
                  response over the next few days.
                </p>
                <p>You can see a copy of your request below:</p>
                <p>
                  <strong>Name:</strong> {name}
                </p>
                <p>
                  <strong>Email:</strong> {email}
                </p>
                <p>
                  <strong>Service{services.length > 1 ? 's' : ''}:</strong>{' '}
                  {services.map((service, index) => (
                    <span key={service}>
                      {service}
                      {index < services.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </p>
                <p>
                  <strong>Message:</strong>
                  <br />
                  <span
                    dangerouslySetInnerHTML={{
                      __html: message.replace(/\n/g, '<br/>'),
                    }}
                  />
                </p>
                <p
                  style={{
                    marginTop: '20px',
                  }}
                >
                  If you have any questions in the meantime, either reply to
                  this email or{' '}
                  <a href={EXTERNAL_URLS.CALENDLY} style={{ color: '#f54891' }}>
                    book a call
                  </a>
                  .
                </p>
              </div>

              <p
                style={{
                  fontSize: '12px',
                  fontWeight: 400,
                  lineHeight: '130%',
                  color: '#484a4b',
                  marginTop: '32px',
                }}
              >
                &copy; Avid Agency LTD. All rights reserverd.
              </p>
            </div>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const PreviewProps: ContactThankYouProps = {
  title: 'Thanks for getting in touch!',
  name: 'John Doe',
  email: 'john@doe.com',
  services: ['Shopify', 'Web Design'],
  message:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};
ContactThankYou.PreviewProps = PreviewProps;

export default ContactThankYou;
