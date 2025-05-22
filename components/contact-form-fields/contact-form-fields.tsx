import { Button } from '@/components/button/button';
import { ContactFormFieldsProps } from '@/components/contact-form-fields/contact-form-fields.type';
import { InputField } from '@/components/form/input-field/input-field';
import { MultiSelectField } from '@/components/form/multiselect-field/multiselect-field';
import { TextareaField } from '@/components/form/textarea-field/textarea-field';
import { Icon } from '@/components/icon/icon';

import { REGEX_EMAIL_VALIDATION } from '@/utils/patterns';

import styles from './contact-form-fields.module.scss';

export const ContactFormFields = ({
  theme,
  control,
  onSubmit,
  fieldErrors,
  isPending,
  isError,
  isSuccess,
}: ContactFormFieldsProps) => {
  return (
    <>
      {isSuccess && (
        <p className={styles['form__success']}>
          <Icon name="tick" />
          We have received your message & will be in touch shortly.
        </p>
      )}

      {isError && (
        <p className={styles['form__error']}>
          <Icon name="alert" />
          Something went wrong. Please try again.
        </p>
      )}

      <form onSubmit={onSubmit} className={styles.form}>
        <InputField
          control={control}
          label="Name"
          type="text"
          name="name"
          placeholder="Full name"
          rules={{
            required: 'Please enter your full name',
          }}
          error={fieldErrors.name}
        />

        <InputField
          control={control}
          label="Email"
          type="email"
          name="email"
          placeholder="email@yourdomain.com"
          rules={{
            required: 'Please enter a valid email address',
            pattern: {
              value: REGEX_EMAIL_VALIDATION,
              message: 'Please enter a valid email address',
            },
          }}
          error={fieldErrors.email}
        />

        <MultiSelectField
          control={control}
          label="Services"
          name="services"
          options={[
            { value: 'Ecommerce', label: 'Ecommerce' },
            { value: 'Website', label: 'Website' },
            { value: 'Shopify', label: 'Shopify' },
            { value: 'Marketing', label: 'Marketing' },
            { value: 'SEO', label: 'SEO' },
            { value: 'PCC', label: 'PPC ' },
            { value: 'Email marketing', label: 'Email marketing' },
            { value: 'Other', label: 'Other' },
          ]}
          rules={{
            required: 'Please select at least one service',
          }}
          error={fieldErrors.services}
        />

        <TextareaField
          control={control}
          label="Message"
          name="message"
          placeholder="Hey Avid, we'd love to start a project..."
          rules={{
            required: 'Please enter your message',
          }}
          error={fieldErrors.message}
        />

        <div>
          <Button
            appearance="button"
            isLoading={isPending}
            theme={theme}
            type="submit"
            className={styles.button}
          >
            Get in touch
          </Button>
        </div>
      </form>
    </>
  );
};
