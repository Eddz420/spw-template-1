export const AppConfig = {
  company: {
    name: 'The niggers',
    slogan: 'Welcome to the curve',
    description:
      'Experience the next generation of web development with Angular and Tailwind CSS.',
  },
  navigation: {
    links: [
      { path: '#', label: 'Home' },
      { path: '#', label: 'About' },
      { path: '#', label: 'Contact' },
    ],
  },
  footer: {
    links: [
      { path: '/terms', label: 'Terms of Service' },
      { path: '/privacy', label: 'Privacy Policy' },
      { path: '/cookies', label: 'Cookie Policy' },
      { path: '/disclaimer', label: 'Disclaimer' },
    ],
    copyright: '© 2024 Angular. All rights reserved.',
  },
  cta: {
    primary: 'Get Started',
  },
} as const;
