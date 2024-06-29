import { Mails, Phones } from '@/types';

export const list = [
  { id: 'address-01', label: 'Food@BachelorBunny.com', link: `mailto:${Mails.Primary}` },
  { id: 'address-02', label: '(866) 698-2607', link: `tel:${Phones.Primary}` },
  { id: 'address-03', label: '(312) 722-2526', link: `tel:${Phones.Secondary}` },
];
