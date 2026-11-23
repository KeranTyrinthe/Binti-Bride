import { articles, caseStudies, media, services, siteDescription } from '@/lib/site-data'

export const paths = {
  home: '/',
  about: '/a-propos',
  services: '/services',
  inspirations: '/inspirations',
  gallery: '/galerie',
  blog: '/conseils',
  contact: '/contact',
  privacy: '/confidentialite',
  terms: '/conditions-utilisation',
} as const

export type PageDetails = {
  title: string
  description: string
  image: string
  parent?: string
  kind?: 'article'
}

const sections = {
  [paths.home]: {
    title: 'Robes de mariée à Lubumbashi',
    description: siteDescription,
    image: media.hero,
  },
  [paths.about]: {
    title: 'À propos de BINTI Bride',
    description: 'Découvrez le projet BINTI Bride à Lubumbashi et sa vision de la location de robes de mariée, entre élégance, écoute et respect du budget.',
    image: media.portrait,
  },
  [paths.services]: {
    title: 'Location de robes de mariée et essayages à Lubumbashi',
    description: 'Découvrez les activités de BINTI Bride à Lubumbashi : location de robes de mariée, accompagnement à l’essayage et partenariats nuptiaux.',
    image: media.processPhoto,
  },
  [paths.inspirations]: {
    title: 'Inspirations de robes de mariée',
    description: 'Explorez quatre styles de robes de mariée avec BINTI Bride : dentelle classique, voile romantique, lignes épurées et allure sophistiquée.',
    image: caseStudies[0].image,
  },
  [paths.gallery]: {
    title: 'Galerie de robes de mariée et de voiles',
    description: 'Parcourez des photos d’inspiration pour choisir votre robe de mariée, des détails de dentelle aux différentes coupes et longueurs de voile.',
    image: media.contact,
  },
  [paths.blog]: {
    title: 'Conseils pour choisir et louer sa robe de mariée',
    description: 'Préparez votre essayage avec les conseils BINTI Bride sur la location de robes de mariée, les coupes, le budget et le choix des accessoires.',
    image: articles[0].image,
  },
  [paths.contact]: {
    title: 'Rendez-vous d’essayage et horaires à Lubumbashi',
    description: 'Contactez BINTI Bride à Lubumbashi, consultez les horaires et demandez un rendez-vous d’essayage de robe de mariée sur WhatsApp.',
    image: media.contact,
  },
  [paths.privacy]: {
    title: 'Politique de confidentialité',
    description: 'Découvrez comment BINTI Bride traite les informations que vous choisissez de partager lors d’une prise de contact ou d’une demande d’essayage.',
    image: media.hero,
  },
  [paths.terms]: {
    title: 'Conditions d’utilisation',
    description: 'Consultez les informations pratiques de BINTI Bride sur les rendez-vous, les disponibilités et les photographies présentées sur le site.',
    image: media.hero,
  },
} satisfies Record<(typeof paths)[keyof typeof paths], PageDetails>

const collections = [
  { parent: paths.services, legacyParent: '/service', items: services },
  { parent: paths.inspirations, legacyParent: '/case-study', items: caseStudies },
  { parent: paths.blog, legacyParent: '/blog', items: articles },
]

export function detailPath(parent: string, slug: string) {
  return `${parent}/${slug}`
}

const pageDetails = new Map<string, PageDetails>(Object.entries(sections))
const redirects = new Map<string, string>([
  ['/about', paths.about],
  ['/service', paths.services],
  ['/case-study', paths.inspirations],
  ['/gallery', paths.gallery],
  ['/blog', paths.blog],
  ['/legal/privacy-policy', paths.privacy],
  ['/legal/terms-conditions', paths.terms],
])

for (const { parent, legacyParent, items } of collections) {
  for (const item of items) {
    const path = detailPath(parent, item.slug)
    const title = item.slug === 'vente-de-robes-de-mariee' ? 'Projet de vente de robes de mariée' : item.title
    pageDetails.set(path, {
      title,
      description: item.intro,
      image: item.image,
      parent,
      kind: parent === paths.blog ? 'article' : undefined,
    })
    redirects.set(detailPath(legacyParent, item.legacySlug), path)
  }
}

export const indexablePaths = [...pageDetails.keys()]
export const legacyPaths = [...redirects.keys()]

export function getPageDetails(path: string) {
  return pageDetails.get(path)
}

export function getRedirect(path: string) {
  return redirects.get(path)
}
