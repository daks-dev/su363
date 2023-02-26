import type { NavSite } from 'daks-svelte/types';

const config: NavSite = {
  navbar: {
    links: [
      {
        href: '/about',
        label: 'О!'
      },
      {
        href: '/contacts',
        label: 'Контакты'
      }
    ],
    pages: [
      '/about',
      '/contacts'
    ]
  },
  footer: {
    copylink: {
      href: '/',
      label: 'СУ&nbsp;363'
    },
    links: [
      {
        href: '/privacy',
        label: 'Конфиденциальность'
      },
      {
        href: '/admin',
        label: 'ic:outline-settings'
      }
    ],
    pages: [
      '/privacy'
    ]
  }
};

export const map = [
  ...(config.navbar.pages ?? config.navbar.links.map((el) => el.href)),
  ...(config.footer.pages ?? [])
];

export default config;
