import { PagePathname } from '@/types';

enum Submenu {
  Services = 'Services',
}

export const navList = [
  {
    id: 'nav-01',
    label: 'Home',
    link: PagePathname.Home,
    submenu: null,
  },
  {
    id: 'nav-04',
    label: 'Grab & Go',
    link: PagePathname.GrabAndGo,
    submenu: Submenu.Services,
  },
  {
    id: 'nav-02',
    label: 'About us',
    link: PagePathname.AboutUs,
    submenu: null,
  },
  {
    id: 'nav-05',
    label: 'In-Home Executive Delivery',
    link: PagePathname.Delivery,
    submenu: Submenu.Services,
  },
  {
    id: 'nav-03',
    label: 'Contact us',
    link: PagePathname.ContactUs,
    submenu: null,
  },
  {
    id: 'nav-06',
    label: 'Catering & Events',
    link: PagePathname.CateringAndEvents,
    submenu: Submenu.Services,
  },
];

export interface INavItem {
  id: string;
  label: string;
  link: PagePathname;
  submenu: Submenu | null;
}
