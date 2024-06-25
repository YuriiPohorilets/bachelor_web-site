import { PagePathname } from '@/types';

export const navList = [
  { id: 'nav-01', label: 'Home', link: PagePathname.Home },
  { id: 'nav-04', label: 'Grab & Go', link: PagePathname.GrabAndGo },
  { id: 'nav-02', label: 'About us', link: PagePathname.AboutUs },
  { id: 'nav-05', label: 'In-Home Executive Delivery', link: PagePathname.Delivery },
  { id: 'nav-03', label: 'Contact us', link: PagePathname.ContactUs },
  { id: 'nav-06', label: 'Catering & Events', link: PagePathname.CateringAndEvents },
];

export const headerNavList = [
  { id: 'nav-01', label: 'Home', link: PagePathname.Home },
  { id: 'nav-02', label: 'About us', link: PagePathname.AboutUs },
  {
    id: 'nav-03',
    label: 'Services',
    dropdown: [
      { id: 'nav-04', label: 'Grab & Go', link: PagePathname.GrabAndGo },
      { id: 'nav-05', label: 'In-Home Executive Delivery', link: PagePathname.Delivery },
      { id: 'nav-06', label: 'Catering & Events', link: PagePathname.CateringAndEvents },
    ],
  },
  { id: 'nav-07', label: 'Contact us', link: PagePathname.ContactUs },
];

export interface INavItem {
  id: string;
  label: string;
  link?: PagePathname;
  dropdown?: INavItem[];
}
