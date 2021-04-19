interface IRoute {
  id: number;
  name: string;
  url: string;
  showNavLink?: boolean;
}

export const routes: IRoute[] = [
  {
    id: 1,
    name: 'Dashboard',
    url: '/dashboard',
    showNavLink: true,
  },
  {
    id: 2,
    name: 'Quotations',
    url: '/quotations',
    showNavLink: true,
  },
  {
    id: 3,
    name: 'Invoices',
    url: '/invoices',
    showNavLink: true,
  },
  {
    id: 4,
    name: 'Receipts',
    url: '/receipts',
    showNavLink: true,
  },
  {
    id: 5,
    name: 'Profile',
    url: '/profile',
    showNavLink: true,
  },
];
