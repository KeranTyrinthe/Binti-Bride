import Link from 'next/link'
import { ContactForm } from '@/components/contact-form'
import { SiteFooter, SiteHeader } from '@/components/site-chrome'
import { Reveal } from '@/components/site-interactions'
import { articles, caseStudies, contact, formatHours, galleryImages, getAppointmentUrl, media, services } from '@/lib/site-data'
import { detailPath, paths } from '@/lib/site-routes'

const faqs = [
  ['Comment demander un essayage ?', 'Écrivez-nous sur WhatsApp avec la date de votre mariage et vos disponibilités. Nous vous indiquerons les créneaux possibles.'],
  ['Quels styles souhaitez-vous proposer ?', 'Nous souhaitons proposer des robes classiques, romantiques, modernes et sophistiquées selon les disponibilités.'],
  ['Puis-je vous indiquer mon budget ?', 'Oui. En parler dès le premier échange nous aide à orienter la recherche vers les options qui vous correspondent.'],
  ['Est-il déjà possible d’acheter une robe ?', 'Nous envisageons de développer la vente à mesure que le projet grandira. Vous pouvez nous écrire pour manifester votre intérêt.'],
  ['Comment proposer un partenariat ?', 'Présentez votre activité et votre idée de collaboration par e-mail ou sur WhatsApp.'],
]

export function SitePage({ path }: { path: string }) {
  const [, section, detail] = path.split("/")
  const parent = `/${section}`
  let content: React.ReactNode

  if (path === paths.about) content = <AboutPage />
  else if (path === paths.services) content = <ServicesPage />
  else if (parent === paths.services && detail) {
    const service = services.find(item => item.slug === detail)
    if (!service) return null
    content = <ServiceDetail service={service} />
  } else if (path === paths.inspirations) content = <CaseStudiesPage />
  else if (parent === paths.inspirations && detail) {
    const story = caseStudies.find(item => item.slug === detail)
    if (!story) return null
    content = <CaseStudyDetail story={story} />
  } else if (path === paths.gallery) content = <GalleryPage />
  else if (path === paths.blog) content = <BlogPage />
  else if (parent === paths.blog && detail) {
    const article = articles.find(item => item.slug === detail)
    if (!article) return null
    content = <ArticlePage article={article} />
  } else if (path === paths.contact) content = <ContactPage />
  else if (path === paths.privacy) content = <LegalPage kind="privacy" />
  else if (path === paths.terms) content = <LegalPage kind="terms" />
  else return null

  return <><SiteHeader />{content}<SiteFooter /></>
}

export function PageIntro({ eyebrow, title, text, className = '' }: { eyebrow: string; title: React.ReactNode; text?: string; className?: string }) {
  return <section className={`page-intro ${className}`}><div className="page-intro-copy"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1>{text && <p>{text}</p>}</div><span className="page-intro-number" aria-hidden="true">BINTI<br />BRIDE</span></section>
}

function AboutPage() {
  const timeline = [
    ['01', 'Un projet né à Lubumbashi', 'BINTI Bride prend naissance en République démocratique du Congo.'],
    ['02', 'La location comme priorité', 'Nous souhaitons proposer des styles variés, des lignes classiques aux coupes modernes.'],
    ['03', 'Des conseils à l’essayage', 'Nous souhaitons accompagner chaque future mariée selon ses envies, sa morphologie et son budget.'],
    ['04', 'Une ouverture aux collaborations', 'Nous aimerions travailler avec des ateliers, des créateurs et d’autres professionnels du mariage.'],
    ['05', 'La vente à développer', 'À mesure que le projet grandira, nous envisageons de proposer des robes à la vente.'],
    ['06', 'Une ambition congolaise', 'Nous souhaitons devenir progressivement une référence de l’univers nuptial congolais.'],
  ]
  const values = [
    ['01', 'Élégance', 'Valoriser la beauté et la féminité à travers des robes soigneusement sélectionnées.'],
    ['02', 'Écoute', 'Porter une attention particulière aux envies et aux attentes de chaque future mariée.'],
    ['03', 'Excellence', 'Rechercher la qualité dans les robes, les partenariats et les services.'],
    ['04', 'Respect du budget', 'Tenir compte des possibilités de chaque mariée dans le choix de sa tenue.'],
  ]
  return <main className="inner-page">
    <PageIntro eyebrow="À propos de BINTI Bride" title={<>UNE ROBE POUR<br />VOTRE MARIAGE</>} text="BINTI Bride est un projet né à Lubumbashi pour accompagner les futures mariées dans le choix de leur robe." />
    <section className="about-intro section-wrap"><Reveal className="about-portrait" effect="wipe"><img src={media.portrait} alt="Portrait d’une mariée souriante sous son voile" /><span>L’UNIVERS BINTI BRIDE</span></Reveal><Reveal className="about-story" effect="right" delay={180}><span className="eyebrow">Notre vision</span><h2>LA ROBE QUI<br />VOUS RESSEMBLE</h2><p>Inspirée par la beauté, la féminité et l’élégance, BINTI Bride souhaite offrir aux futures mariées une expérience à la hauteur de ce moment.</p><p>L’objectif est de permettre à chacune de porter une robe dans laquelle elle se sent belle, en tenant compte de ses goûts et de son budget.</p><blockquote>« Chaque femme mérite de se sentir exceptionnelle le jour de son mariage. »</blockquote><span className="eyebrow">— BINTI Bride</span><Link className="button button-taupe" href={paths.contact}>Nous contacter <span aria-hidden="true">↗</span></Link></Reveal></section>
    <section className="values-section section-wrap"><Reveal className="section-heading" delay={100}><span className="eyebrow">Nos engagements</span><h2>CE QUI NOUS<br />GUIDE</h2></Reveal><div className="values-grid">{values.map(([number, title, text], index) => <Reveal className="value-card" delay={150 + index * 40} key={number}><span className="value-number">{number}</span><h3>{title}</h3><p>{text}</p></Reveal>)}</div></section>
    <section className="timeline-section section-wrap"><Reveal className="section-heading" delay={100}><span className="eyebrow">De Lubumbashi à la suite du projet</span><h2>LES ÉTAPES<br />DU PROJET</h2></Reveal><div className="timeline-list">{timeline.map(([year, title, text]) => <Reveal className="timeline-item" effect="right" key={year}><span className="timeline-year">{year}</span><span className="timeline-dot" aria-hidden="true" /><div><h3>{title}</h3><p>{text}</p></div></Reveal>)}</div></section>
    <WideCta title={<>ENVIE D’ESSAYER<br />UNE ROBE ?</>} />
  </main>
}

function ServicesPage() {
  const serviceDelays = [150, 200, 250, 300]
  return <main className="inner-page">
    <PageIntro eyebrow="Nos activités" title={<>ROBES DE MARIÉE<br />ET CONSEILS</>} text="BINTI Bride souhaite proposer la location de robes de mariée à Lubumbashi, avec un accompagnement adapté à vos envies et à votre budget." />
    <section className="service-catalog section-wrap">{services.map((service, index) => <Reveal className={`service-detail-card service-detail-card-${index + 1}`} effect={index % 2 === 0 ? "left" : "right"} delay={serviceDelays[index]} key={service.slug}><Link href={detailPath(paths.services, service.slug)} className="service-card-image"><img src={service.image} alt={`Inspiration nuptiale : ${service.title}`} /><span>Découvrir ↗</span></Link><div className="service-card-copy"><span className="eyebrow">0{index + 1} · {service.short}</span><h2><Link href={detailPath(paths.services, service.slug)}>{service.title}</Link></h2><p>{service.intro}</p><div className="service-price"><span>Disponibilité</span><strong>{service.availability}</strong></div><Link className="text-link" href={detailPath(paths.services, service.slug)}>En savoir plus <span aria-hidden="true">↗</span></Link></div></Reveal>)}</section>
    <section className="service-journey section-wrap"><Reveal className="section-heading centered"><span className="eyebrow">Votre rendez-vous</span><h2>DU PREMIER MESSAGE<br />AU CHOIX DE LA ROBE</h2></Reveal><div className="journey-steps">{[['01', 'Premier contact'], ['02', 'Vos envies'], ['03', 'Votre budget'], ['04', 'Essayage'], ['05', 'Choix de la robe']].map(([number, title]) => <Reveal className="journey-step" delay={(Number(number) - 1) * 55} key={number}><span>{number}</span><h3>{title}</h3></Reveal>)}</div></section>
    <section className="faq-section section-wrap"><Reveal className="section-heading" delay={100}><span className="eyebrow">Questions fréquentes</span><h2>BON À SAVOIR</h2></Reveal><div className="faq-list">{faqs.map(([question, answer], index) => <Reveal className="faq-row" delay={150 + index * 50} key={question}><details><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details></Reveal>)}</div></section>
    <WideCta title={<>PARLONS DE<br />VOTRE ESSAYAGE</>} />
  </main>
}

function ServiceDetail({ service }: { service: (typeof services)[number] }) {
  return <main className="inner-page">
    <PageIntro eyebrow={`BINTI Bride · ${service.availability}`} title={service.title.toUpperCase()} text={service.intro} />
    <section className="service-detail-hero section-wrap"><Reveal className="service-detail-photo" effect="wipe" delay={180}><img src={service.image} alt={`Inspiration nuptiale : ${service.title}`} /></Reveal><Reveal className="service-detail-copy" effect="right" delay={100}><span className="eyebrow">À Lubumbashi</span><h2>EN SAVOIR PLUS</h2><p>{service.intro}</p><p>Écrivez-nous pour échanger sur vos besoins ou sur votre proposition de collaboration.</p><Link className="button button-taupe" href={paths.contact}>Nous contacter <span aria-hidden="true">↗</span></Link></Reveal></section>
    <section className="included-section section-wrap"><Reveal className="section-heading" delay={150}><span className="eyebrow">Les points à retenir</span><h2>EN PRATIQUE</h2></Reveal><div className="included-list">{service.includes.map((item, index) => <Reveal className="included-item" delay={100 * index} key={item}><span>0{index + 1}</span><h3>{item}</h3><span aria-hidden="true">↗</span></Reveal>)}</div></section>
    <section className="service-note section-wrap"><Reveal><span className="eyebrow">Disponibilité</span><p><strong>{service.availability}</strong>. Contactez-nous pour connaître les prochaines étapes.</p><Link className="text-link" href={paths.contact}>Poser une question <span aria-hidden="true">↗</span></Link></Reveal></section>
    <WideCta title={<>UN ESSAYAGE<br />SUR RENDEZ-VOUS</>} />
  </main>
}

function CaseStudiesPage() {
  return <main className="inner-page">
    <PageIntro eyebrow="Inspirations nuptiales" title={<>DES STYLES<br />DE ROBES</>} text="Des photos d’inspiration pour explorer des coupes, des matières et des détails qui pourraient vous plaire." />
    <section className="case-studies-grid section-wrap">{caseStudies.map((story, index) => <Reveal effect="wipe" className={`case-study-card case-study-card-${index + 1}`} delay={index * 100} key={story.slug}><Link href={detailPath(paths.inspirations, story.slug)} className="case-study-image"><img src={story.image} alt={`Inspiration nuptiale : ${story.title}`} /><span>Voir le style ↗</span></Link><div className="couple-meta">{story.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="case-study-caption"><div><h2><Link href={detailPath(paths.inspirations, story.slug)}>{story.title}</Link></h2><span>{story.shape} · {story.detail}</span></div><p>{story.intro}</p></div></Reveal>)}</section>
    <WideCta title={<>QUEL STYLE<br />VOUS ATTIRE ?</>} />
  </main>
}

function CaseStudyDetail({ story }: { story: (typeof caseStudies)[number] }) {
  return <main className="inner-page">
    <PageIntro eyebrow={`${story.shape} · ${story.detail}`} title={story.title.toUpperCase()} text={story.intro} className="case-intro" />
    <section className="story-cover section-wrap"><Reveal effect="wipe" delay={300}><img src={story.image} alt={`Portrait nuptial : ${story.title}`} /></Reveal></section>
    <section className="story-details section-wrap"><Reveal className="story-quote" effect="left" delay={80}><span className="eyebrow">Conseil d’essayage</span><blockquote>« {story.advice} »</blockquote><span className="eyebrow">{story.title}</span></Reveal><Reveal className="story-narrative" effect="right" delay={150}><span className="eyebrow">Inspiration</span><h2>REGARDER<br />LES DÉTAILS</h2><p>{story.intro}</p><p>Pendant l’essayage, observez le rendu de la robe de face et de dos, puis regardez comment la matière bouge quand vous marchez.</p><div className="story-facts"><span><small>Coupe</small>{story.shape}</span><span><small>Finition</small>{story.detail}</span><span><small>Style</small>{story.tags[0]}</span></div></Reveal></section>
    <section className="story-gallery section-wrap"><Reveal effect="wipe" delay={100}><img src={story.secondary} alt={`Détail nuptial : ${story.title}`} /></Reveal><Reveal effect="wipe" delay={170}><img src={media.collage[2]} alt="Portrait de mariée sous un voile" /></Reveal></section>
    <div className="story-back"><Link className="text-link" href={paths.inspirations}>← Toutes les inspirations</Link></div><WideCta title={<>ESSAYER<br />UNE ROBE</>} />
  </main>
}

function GalleryPage() {
  return <main className="inner-page">
    <PageIntro eyebrow="Galerie" title={<>L’UNIVERS<br />DE LA MARIÉE</>} text="Des portraits, des coupes et des matières pour vous aider à imaginer votre tenue." />
    <section className="gallery-grid section-wrap">{galleryImages.map((item, index) => <Reveal effect="wipe" className={`gallery-card gallery-card-${(index % 4) + 1}`} delay={(index % 3) * 85} key={item.title}><img src={item.src} alt={`${item.title}, ${item.detail}`} /><div><h2>{item.title}</h2><p>{item.detail}</p></div></Reveal>)}</section>
    <WideCta title={<>ENVIE D’UN<br />ESSAYAGE ?</>} />
  </main>
}

function BlogPage() {
  return <main className="inner-page">
    <PageIntro eyebrow="Le journal BINTI Bride" title={<>CONSEILS<br />ET INSPIRATIONS</>} text="Des conseils pour préparer un essayage, comparer les coupes et choisir votre tenue." />
    <section className="blog-grid section-wrap">{articles.map((article, index) => <Reveal className="blog-card" effect="wipe" delay={(index % 3) * 100} key={article.slug}><Link className="blog-image" href={detailPath(paths.blog, article.slug)} aria-label={article.title}><img src={article.image} alt="" /><span>Lire l’article ↗</span></Link><div className="journal-meta"><span>{article.category}</span><time dateTime={`PT${article.minutes}M`}>{article.minutes} min</time></div><h2><Link href={detailPath(paths.blog, article.slug)}>{article.title}</Link></h2><p>{article.intro}</p><Link className="text-link" href={detailPath(paths.blog, article.slug)}>Lire l’article <span aria-hidden="true">↗</span></Link></Reveal>)}</section>
  </main>
}

function ArticlePage({ article }: { article: (typeof articles)[number] }) {
  return <main className="inner-page article-page">
    <section className="article-header section-wrap"><Reveal effect="left"><Link className="text-link" href={paths.blog}>← Retour au journal</Link><div className="journal-meta"><span>{article.category}</span><time dateTime={`PT${article.minutes}M`}>{article.minutes} min</time></div><h1>{article.title}</h1><p>{article.intro}</p></Reveal></section>
    <section className="article-cover section-wrap"><Reveal effect="wipe" delay={180}><img src={article.image} alt="" /></Reveal></section>
    <article className="article-body"><span className="eyebrow">Le journal BINTI Bride</span>{article.sections.map(([title, text], index) => <Reveal className="article-section" delay={200 + index * 60} key={title}><span className="eyebrow">0{index + 1}</span><div><h2>{title}</h2><p>{text}</p></div></Reveal>)}<blockquote>« La robe doit vous plaire autant portée que sur une photo. »</blockquote><Link className="button button-taupe" href={paths.contact}>Contacter BINTI Bride <span aria-hidden="true">↗</span></Link></article>
    <div className="story-back"><Link className="text-link" href={paths.blog}>Voir tous les conseils ↗</Link></div>
  </main>
}

function ContactPage() {
  return <main className="inner-page contact-page">
    <PageIntro eyebrow="BINTI Bride · Lubumbashi" title={<>PRENDRE<br />RENDEZ-VOUS</>} text="Envoyez-nous vos disponibilités sur WhatsApp pour demander un essayage de robe de mariée." />
    <section className="contact-layout section-wrap" id="rendez-vous">
      <Reveal className="contact-photo" effect="wipe" delay={220}>
        <img src={media.contact} alt="Portrait de mariée sous son voile" />
        <div><span className="eyebrow">Votre essayage</span><p>Indiquez la date du mariage et, si vous en avez déjà, les styles que vous aimeriez essayer.</p></div>
      </Reveal>
      <Reveal className="contact-form-wrap" effect="right" delay={150}>
        <span className="eyebrow">Demande de rendez-vous</span>
        <h2>PROPOSEZ<br />UN CRÉNEAU</h2>
        <ContactForm />
        <Reveal className="contact-facts" delay={80}>
          <div><span className="eyebrow">E-mail</span><a href={`mailto:${contact.email}`}>{contact.email}</a></div>
          <div><span className="eyebrow">Téléphone</span><a href={`tel:${contact.phone}`}>{contact.phoneLabel}</a></div>
          <div>
            <span className="eyebrow">Ville</span><span>{contact.location}</span>
            <span className="eyebrow contact-hours-title">Horaires d’ouverture</span>
            <dl className="contact-hours">{contact.hours.map(({ day, opens, closes }) => <div key={day}><dt>{day}</dt><dd>{formatHours(opens, closes)}</dd></div>)}</dl>
          </div>
        </Reveal>
      </Reveal>
    </section>
  </main>
}

function LegalPage({ kind }: { kind: 'privacy' | 'terms' }) {
  const title = kind === 'privacy' ? 'Politique de confidentialité' : 'Conditions d’utilisation'
  const paragraphs = kind === 'privacy' ? [
    ['Informations partagées', 'Lorsque vous écrivez à BINTI Bride, vous choisissez les informations à communiquer, comme votre nom, votre créneau souhaité ou la date du mariage.'],
    ['Demande de rendez-vous', 'Ces renseignements servent à répondre à votre demande et à échanger sur votre essayage.'],
    ['Messagerie', 'Le formulaire prépare un message dans WhatsApp. Les données que vous envoyez par cette application sont également régies par sa politique de confidentialité.'],
    ['Nous écrire', `Pour toute question sur les renseignements que vous nous avez transmis, écrivez à ${contact.email}.`],
  ] : [
    ['Le site BINTI Bride', 'Ce site présente le projet BINTI Bride et les activités qu’il souhaite développer à Lubumbashi.'],
    ['Rendez-vous et disponibilité', 'Un créneau proposé par message reste à confirmer avec BINTI Bride. Contactez-nous pour connaître les disponibilités et les conditions de location.'],
    ['Photographies', 'Les photographies illustrent des inspirations de styles et de matières. Contactez-nous pour connaître les robes disponibles.'],
    ['Nous contacter', `Pour toute question sur le site ou les services, écrivez à ${contact.email}.`],
  ]
  return <main className="inner-page legal-page"><PageIntro eyebrow="Infos pratiques" title={title.toUpperCase()} /><article className="legal-content section-wrap">{paragraphs.map(([heading, text], index) => <Reveal className="legal-block" delay={index * 50} key={heading}><span className="eyebrow">0{index + 1}</span><div><h2>{heading}</h2><p>{text}</p></div></Reveal>)}</article></main>
}

function WideCta({ title }: { title: React.ReactNode }) {
  return <section className="wide-cta"><Reveal delay={100}><span className="eyebrow">Essayage à Lubumbashi</span><h2>{title}</h2><a className="button button-light" href={getAppointmentUrl()}>Prendre rendez-vous <span aria-hidden="true">↗</span></a></Reveal></section>
}
