export const AppConfig = {
  company: {
    name: 'The Curve',
  },
  navigation: {
    links: [
      { path: '#', labelKey: 'nav.home' },
      { path: '#', labelKey: 'nav.about' },
      { path: '#', labelKey: 'nav.contact' }
    ]
  },
  languageCodes : ['en', 'fr', 'ar'],
  footer: {
    links: [
      { path: '/terms', labelKey: 'footer.links.terms' },
      { path: '/privacy', labelKey: 'footer.links.privacy' },
      { path: '/cookies', labelKey: 'footer.links.cookies' },
      { path: '/disclaimer', labelKey: 'footer.links.disclaimer' }
    ],
    copyright: 'footer.copyright'
  },
} as const;
