import { UseCustomFormResult } from '@/hooks/use-custom-form.type';

import { ContactRequest, ContactResponse } from '@/types/api/contact.type';
import { CommonTheme } from '@/types/common.type';

export type ContactFormFieldsProps = Omit<
  UseCustomFormResult<ContactRequest, ContactResponse>,
  'ref'
> & {
  theme: CommonTheme;
};
