import { MailIcon, PhoneIcon } from '@/assets/icons';
import { Mails, Phones } from '@/types';

export const addressList = [
  {
    id: 'address-01',
    label: 'Food@BachelorBunny.com',
    icon: MailIcon,
    link: `mailto:${Mails.Primary}`,
  },
  {
    id: 'address-02',
    label: '(866) 698-2607',
    icon: PhoneIcon,
    link: `tel:${Phones.Primary}`,
  },
  {
    id: 'address-03',
    label: '312.722.2526',
    icon: PhoneIcon,
    link: `fax:${Phones.Secondary}`,
  },
];
