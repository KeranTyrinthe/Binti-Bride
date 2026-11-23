import { publicPath } from '@/lib/site-path'

export const siteName = 'BINTI Bride'
export const city = 'Lubumbashi'
export const country = 'République démocratique du Congo'

export const contact = {
  email: 'lnmmputu@gmail.com',
  phone: '+243833932115',
  phoneLabel: '+243 833 932 115',
  location: `${city}, ${country}`,
  hours: [
    { day: 'Lundi', schemaDay: 'Monday', opens: '09:00', closes: '18:00' },
    { day: 'Mardi', schemaDay: 'Tuesday', opens: '09:00', closes: '18:00' },
    { day: 'Mercredi', schemaDay: 'Wednesday', opens: '09:00', closes: '18:00' },
    { day: 'Jeudi', schemaDay: 'Thursday', opens: '10:00', closes: '18:00' },
    { day: 'Vendredi', schemaDay: 'Friday', opens: '09:00', closes: '18:00' },
    { day: 'Samedi', schemaDay: 'Saturday', opens: '08:00', closes: '16:00' },
    { day: 'Dimanche', schemaDay: 'Sunday', opens: null, closes: null },
  ],
}

export function formatHours(opens: string | null, closes: string | null) {
  if (!opens || !closes) return 'Fermé'
  return `${Number(opens.slice(0, 2))} h – ${Number(closes.slice(0, 2))} h`
}

export function getAppointmentUrl(message = 'Bonjour BINTI Bride, je souhaite prendre rendez-vous pour un essayage de robe de mariée à Lubumbashi. Pourriez-vous m’indiquer vos prochains créneaux disponibles ? Merci !') {
  return `https://wa.me/${contact.phone.slice(1)}?text=${encodeURIComponent(message)}`
}

export const siteDescription = 'BINTI Bride, un projet nuptial à Lubumbashi dédié à la location de robes de mariée et à l’accompagnement des futures mariées.'

const bridalPhoto = (name: string) => publicPath(`/binti/${name}.jpg`)

export const media = {
  logo: publicPath('/binti/logo.png'),
  emblem: publicPath('/binti/embleme.png'),
  favicon: publicPath('/binti/favicon.png'),
  hero: bridalPhoto('accueil'),
  heroVideo: publicPath('/binti-accueil.mp4'),
  story: bridalPhoto('robe-fenetre'),
  reviewBackground: bridalPhoto('robe-detail'),
  processPhoto: bridalPhoto('robe-boutique'),
  portrait: bridalPhoto('portrait-sourire'),
  contact: bridalPhoto('portrait-voile'),
  storyThumbs: [
    bridalPhoto('robe-dentelle'),
    bridalPhoto('portrait-sourire'),
    bridalPhoto('robe-cintre'),
    bridalPhoto('robe-detail'),
  ],
  collage: [
    bridalPhoto('robe-miroir'),
    bridalPhoto('robe-fluide'),
    bridalPhoto('voile-lumiere'),
    bridalPhoto('robe-fenetre'),
  ],
}

export const services = [
  {
    slug: 'location-de-robes-de-mariee',
    legacySlug: 'full-planning-design',
    title: 'Location de robes',
    short: 'Notre activité principale',
    availability: 'Sur demande',
    image: bridalPhoto('robe-boutique'),
    intro: 'La location est au cœur du projet BINTI Bride. Nous souhaitons réunir des robes classiques, romantiques et modernes pour les futures mariées de Lubumbashi.',
    includes: ['Sélection de styles selon vos envies', 'Échange sur votre budget', 'Conseils sur les coupes et les matières', 'Essayage sur rendez-vous selon les disponibilités', 'Présentation des conditions de location'],
  },
  {
    slug: 'accompagnement-et-essayage',
    legacySlug: 'partial-planning',
    title: 'Accompagnement',
    short: 'Un choix à votre mesure',
    availability: 'Sur rendez-vous',
    image: bridalPhoto('robe-romantique'),
    intro: 'Nous souhaitons vous accompagner dans le choix d’une robe adaptée à votre morphologie, à vos goûts et à votre budget.',
    includes: ['Écoute de vos attentes', 'Conseils adaptés à votre morphologie', 'Comparaison de plusieurs silhouettes', 'Repères pour choisir une robe confortable', 'Conseils sur le voile et les accessoires'],
  },
  {
    slug: 'vente-de-robes-de-mariee',
    legacySlug: 'day-of-coordination',
    title: 'Vente de robes',
    short: 'Une activité à venir',
    availability: 'À venir',
    image: bridalPhoto('robe-cintre'),
    intro: 'À mesure que BINTI Bride se développera, nous envisageons de proposer des robes à la vente pour les mariées qui souhaitent conserver leur tenue.',
    includes: ['Sélection de robes à développer', 'Plusieurs styles et silhouettes envisagés', 'Possibilité de manifester votre intérêt dès maintenant'],
  },
  {
    slug: 'partenariats-nuptiaux',
    legacySlug: 'destination-weddings',
    title: 'Partenariats',
    short: 'Avec les professionnels du mariage',
    availability: 'Sur prise de contact',
    image: bridalPhoto('robe-dentelle'),
    intro: 'Nous souhaitons tisser des liens avec des maisons de couture, des créateurs, des fournisseurs et des professionnels du mariage.',
    includes: ['Maisons de couture et ateliers', 'Créatrices et créateurs indépendants', 'Fournisseurs de robes, matières et accessoires', 'Professionnels de l’univers nuptial'],
  },
]

export const caseStudies = [
  {
    slug: 'dentelle-classique',
    legacySlug: 'sofia-luca',
    title: 'Dentelle classique',
    shape: 'Ligne structurée',
    detail: 'Dentelle et voile',
    image: bridalPhoto('portrait-dentelle'),
    secondary: bridalPhoto('robe-dentelle'),
    intro: 'Une dentelle travaillée et un voile délicat donnent du relief à une silhouette de mariée classique.',
    advice: 'Associez une dentelle marquée à des accessoires discrets pour laisser apparaître le motif.',
    tags: ['Classique', 'Dentelle'],
  },
  {
    slug: 'voile-romantique',
    legacySlug: 'mei-thomas',
    title: 'Voile romantique',
    shape: 'Silhouette légère',
    detail: 'Voile et transparence',
    image: bridalPhoto('robe-romantique'),
    secondary: bridalPhoto('voile-lumiere'),
    intro: 'Un voile souple et des détails ajourés adoucissent la ligne de la robe.',
    advice: 'Essayez le voile avec la robe pour juger de sa longueur et de son mouvement.',
    tags: ['Romantique', 'Voile'],
  },
  {
    slug: 'lignes-epurees',
    legacySlug: 'clara-james',
    title: 'Lignes épurées',
    shape: 'Coupe sobre',
    detail: 'Épaules dégagées',
    image: bridalPhoto('robe-epuree'),
    secondary: bridalPhoto('robe-fluide'),
    intro: 'Une encolure dégagée attire l’attention sur la coupe et le tombé du tissu.',
    advice: 'Sur une robe épurée, vérifiez le tombé du tissu en marchant et en vous asseyant.',
    tags: ['Moderne', 'Épuré'],
  },
  {
    slug: 'allure-sophistiquee',
    legacySlug: 'true-moments',
    title: 'Allure sophistiquée',
    shape: 'Silhouette affirmée',
    detail: 'Détails habillés',
    image: bridalPhoto('portrait-studio'),
    secondary: bridalPhoto('robe-portrait'),
    intro: 'Une silhouette dessinée et des détails affirmés offrent un style plus habillé.',
    advice: 'Choisissez un détail à mettre en valeur et gardez le reste de la tenue sobre.',
    tags: ['Sophistiqué', 'Silhouette'],
  },
]

export const articles = [
  {
    slug: 'choisir-sa-robe-de-mariee',
    legacySlug: 'your-guide-to-wedding-venues',
    title: 'Choisir sa robe de mariée',
    category: 'Bien choisir',
    minutes: 2,
    image: bridalPhoto('robe-classique'),
    intro: 'Commencez par les coupes dans lesquelles vous vous sentez à l’aise et les détails qui vous plaisent vraiment.',
    sections: [
      ['Repérez les coupes qui vous attirent', 'Comparez quelques silhouettes et notez ce qui vous plaît dans chacune, comme une taille marquée, un décolleté discret ou une jupe fluide.'],
      ['Fixez une fourchette de budget', 'Incluez le voile, les accessoires et les éventuels ajustements pour comparer les options sur la même base.'],
      ['Essayez la robe en mouvement', 'Marchez, asseyez-vous et levez les bras pendant l’essayage pour vérifier que la robe reste confortable.'],
    ],
  },
  {
    slug: 'preparer-son-premier-essayage',
    legacySlug: 'wedding-planning-mistakes-to-avoid',
    title: 'Préparer son premier essayage',
    category: 'Essayages',
    minutes: 2,
    image: bridalPhoto('robe-miroir'),
    intro: 'Quelques photos et deux ou trois repères suffisent pour aborder un premier essayage.',
    sections: [
      ['Apportez quelques inspirations', 'Choisissez des images où l’on distingue les détails qui vous plaisent. Une photo peut servir de point de départ pour discuter d’une coupe ou d’une matière.'],
      ['Pensez aux chaussures', 'Si vous connaissez la hauteur de talon que vous porterez, apportez une paire comparable pour vérifier la longueur de l’ourlet.'],
      ['Prenez le temps de comparer', 'Notez ce que vous avez aimé dans chaque robe, sa coupe et la liberté de mouvement qu’elle vous laisse.'],
    ],
  },
  {
    slug: 'louer-sa-robe-de-mariee',
    legacySlug: 'creating-a-smooth-wedding-timeline',
    title: 'Louer sa robe de mariée',
    category: 'Location',
    minutes: 2,
    image: bridalPhoto('robe-cintre'),
    intro: 'La location peut vous donner accès à des styles différents tout en maîtrisant le budget de la tenue.',
    sections: [
      ['Vérifiez la disponibilité', 'Indiquez la date du mariage dès le premier échange pour faire le point sur les créneaux et les modèles concernés.'],
      ['Discutez des ajustements', 'Demandez quelles retouches sont possibles et à quel moment faire un dernier essayage.'],
      ['Clarifiez le retrait et le retour', 'Avant de confirmer, demandez les horaires, le délai de retour et les modalités d’entretien de la robe.'],
    ],
  },
  {
    slug: 'questions-a-poser-a-lessayage',
    legacySlug: 'questions-before-hiring-a-planner',
    title: 'Les questions à poser à l’essayage',
    category: 'Essayages',
    minutes: 2,
    image: bridalPhoto('robe-romantique'),
    intro: 'Profitez de l’essayage pour obtenir des réponses sur la coupe, les ajustements et les délais.',
    sections: [
      ['Quels ajustements sont possibles ?', 'Demandez si la longueur, les bretelles ou la taille peuvent être adaptées et combien de temps prévoir.'],
      ['Quels accessoires essayer ?', 'Regardez le rendu du voile avec le dos de la robe et vérifiez que les bijoux s’accordent avec son encolure.'],
      ['Que faut-il prévoir ensuite ?', 'Notez les étapes, les dates utiles et les conditions à confirmer avant de vous engager.'],
    ],
  },
  {
    slug: 'accorder-son-voile-a-sa-robe',
    legacySlug: 'designing-a-wedding-your-way',
    title: 'Accorder son voile à sa robe',
    category: 'Inspiration',
    minutes: 2,
    image: bridalPhoto('voile-lumiere'),
    intro: 'La longueur et la transparence du voile changent la façon dont on voit la silhouette.',
    sections: [
      ['Observez la robe de dos', 'Si le dos présente un motif ou des boutons, essayez un voile plus transparent pour garder ces détails visibles.'],
      ['Comparez les longueurs', 'Un voile court dégage les épaules et le dos. Un voile long prolonge la ligne de la tenue.'],
      ['Essayez la coiffure et le voile ensemble', 'Vérifiez où placer l’attache et si le voile tient lorsque vous bougez la tête.'],
    ],
  },
  {
    slug: 'budget-tenue-de-mariage',
    legacySlug: 'your-guide-to-wedding-planning',
    title: 'Fixer le budget de sa tenue',
    category: 'Bien choisir',
    minutes: 2,
    image: bridalPhoto('robe-fenetre'),
    intro: 'Un budget qui inclut toute la tenue aide à faire des choix plus sereins.',
    sections: [
      ['Listez les dépenses', 'Prévoyez la robe, les chaussures, le voile et les accessoires dont vous avez envie.'],
      ['Comparez les modalités', 'Selon l’option retenue, demandez ce qui est compris dans le prix et le montant des éventuels ajustements.'],
      ['Gardez une marge', 'Une petite réserve vous laisse de la souplesse pour une retouche ou un accessoire choisi après l’essayage.'],
    ],
  },
]

export const galleryImages = [
  { src: bridalPhoto('portrait-voile'), height: 1563, title: 'Portrait de mariée', detail: 'Voile et lumière' },
  { src: bridalPhoto('robe-miroir'), height: 833, title: 'Une robe au miroir', detail: 'Détail de dentelle' },
  { src: bridalPhoto('portrait-sourire'), height: 1873, title: 'Un sourire sous le voile', detail: 'Portrait en studio' },
  { src: bridalPhoto('robe-detail'), height: 833, title: 'Les matières', detail: 'Dentelle et transparence' },
  { src: bridalPhoto('robe-fluide'), height: 1875, title: 'Une ligne fluide', detail: 'Portrait en noir et blanc' },
  ...caseStudies.map(({ slug, image, title, detail }) => ({ src: image, height: slug === 'allure-sophistiquee' ? 1563 : 1875, title, detail })),
  { src: bridalPhoto('robe-fenetre'), height: 1875, title: 'Une robe à la lumière du jour', detail: 'Dentelle lumineuse' },
]
