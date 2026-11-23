import { PageLink } from '@/components/page-link'
import { SiteFooter, SiteHeader } from '@/components/site-chrome'
import { CommitmentCarousel, Reveal, WeddingFilm } from '@/components/site-interactions'
import { articles, caseStudies, getAppointmentUrl, media, services } from '@/lib/site-data'
import { detailPath, paths } from '@/lib/site-routes'
import './home-page.css'

const steps = [
  ['01', 'Premier contact', 'Écrivez-nous sur WhatsApp avec la date de votre mariage et vos disponibilités.', 'SUR WHATSAPP'],
  ['02', 'Vos envies et votre budget', 'Partagez les styles qui vous attirent et le budget que vous souhaitez consacrer à votre tenue.', 'LORS DU PREMIER ÉCHANGE'],
  ['03', 'L’essayage', 'Comparez les coupes disponibles et voyez comment chaque robe tombe quand vous bougez.', 'SUR RENDEZ-VOUS'],
  ['04', 'Le choix de la robe', 'Une fois votre choix fait, nous échangeons sur les disponibilités et les modalités de location.', 'SELON LE MODÈLE'],
]

const partners = ['Maisons de couture', 'Créateurs', 'Fournisseurs', 'Professionnels du mariage']

const collage = [
  [media.collage[0], 'Robe de mariée accrochée à un miroir'],
  [media.collage[1], 'Une mariée en robe fluide'],
  [media.collage[2], 'Portrait de mariée sous un voile lumineux'],
  [media.collage[3], 'Robe de mariée en dentelle près d’une fenêtre'],
  [media.contact, 'Une mariée dans une robe en dentelle'],
]

function Sprig({ className = '' }: { className?: string }) {
  return <span className={`botanical-sprig ${className}`} aria-hidden="true"><i /><i /><i /><i /><i /></span>
}

export default function HomePage() {
  return <>
    <SiteHeader home />
    <main className="home-main">
      <section className="hero" aria-label="Présentation de BINTI Bride">
        <video className="hero-video" autoPlay muted loop playsInline poster={media.hero}><source src={media.heroVideo} type="video/mp4" /></video>
        <div className="hero-shade" />
        <div className="hero-content">
          <img className="hero-emblem" src={media.emblem} alt="" />
          <h1><span className="hero-title-line"><span>BINTI</span></span>{' '}<span className="hero-title-line"><span>BRIDE</span></span></h1>
          <p className="hero-tagline">Robes de mariée à Lubumbashi</p>
          <a href="#ethos" className="hero-scroll"><span>Découvrir</span><i aria-hidden="true" /></a>
          <span className="hero-location hero-location-left">LUBUMBASHI</span><span className="hero-location hero-location-right">RÉPUBLIQUE DÉMOCRATIQUE DU CONGO</span>
        </div>
      </section>

      <section className="ethos section-wrap" id="ethos">
        <Sprig className="ethos-sprig-left" />
        <Sprig className="ethos-sprig-right" />
        <Reveal className="ethos-top"><div className="ethos-mark"><img loading="lazy" decoding="async" src={media.emblem} alt="" /><span>NOS VALEURS</span></div></Reveal>
        <Reveal className="ethos-title" delay={100}><h2>ÉLÉGANCE <i>·</i> ÉCOUTE <i>·</i> EXCELLENCE</h2></Reveal>
        <div className="ethos-columns">
          <Reveal className="ethos-story" delay={80} effect="left"><h3>Notre histoire</h3><p>BINTI Bride est né à Lubumbashi d’une conviction simple : chaque femme mérite de se sentir exceptionnelle le jour de son mariage.</p><div className="story-strip"><div className="thumb-row" aria-hidden="true">{[...media.storyThumbs, ...media.storyThumbs].map((src, i) => <img loading="lazy" decoding="async" key={`${src}-${i}`} src={src} alt="" />)}</div><PageLink className="strip-button" href={paths.about}>Voir notre histoire <span aria-hidden="true">↗</span></PageLink></div></Reveal>
          <Reveal className="ethos-journey" delay={160} effect="right"><div><h3>Notre ambition</h3><p>Faire grandir un projet nuptial congolais autour de robes élégantes, pensées pour des styles et des budgets différents.</p></div><WeddingFilm poster={media.hero} src={media.heroVideo} /></Reveal>
        </div>
        <div className="stats-row"><Reveal><strong>01</strong><h3>Élégance</h3><p>Des robes soigneusement sélectionnées pour mettre votre style en valeur.</p></Reveal><Reveal delay={100}><strong>02</strong><h3>Écoute</h3><p>Des conseils qui tiennent compte de vos envies et de votre budget.</p></Reveal><Reveal delay={200}><strong>03</strong><h3>Excellence</h3><p>Une attention portée à la qualité des robes et de l’accompagnement.</p></Reveal></div>
      </section>

      <section className="offer-section" id="services">
        <div className="offer-story">
          <Reveal className="offer-photo" effect="wipe"><img loading="lazy" decoding="async" src={media.story} alt="Robe de mariée en dentelle près d’une fenêtre" /></Reveal>
          <div className="offer-copy"><Reveal effect="left" delay={120}><h2>VOTRE ROBE,<br />À VOTRE<br />IMAGE</h2><p>Des coupes classiques, des lignes modernes et des détails romantiques à explorer selon vos envies.</p></Reveal><Reveal delay={160}><PageLink className="button button-light" href={`${paths.contact}/#rendez-vous`}>Parler de votre robe <span aria-hidden="true">→</span></PageLink></Reveal></div>
        </div>
        <div className="offer-list"><Reveal delay={120}><h2 className="eyebrow">Nos activités</h2></Reveal><div className="service-links">{services.map((service, index) => <Reveal key={service.slug} effect="right" delay={index * 75}><PageLink href={detailPath(paths.services, service.slug)}><span className="service-main">{service.title}<small>{service.short}</small></span><span className="service-arrow" aria-hidden="true">→</span></PageLink></Reveal>)}</div></div>
      </section>

      <section className="couples-section section-wrap" id="stories">
        <Sprig className="couples-sprig" />
        <Reveal className="section-heading centered"><h2>QUATRE STYLES DE ROBES<br className="desktop-break" /> À EXPLORER</h2></Reveal>
        <div className="couples-grid">
          <div className="couple-column couple-column-left">{caseStudies.slice(0, 2).map((story, index) => <CoupleCard story={story} index={index} key={story.slug} />)}</div>
          <div className="couple-column couple-column-right">{caseStudies.slice(2).map((story, index) => <CoupleCard story={story} index={index + 2} key={story.slug} />)}</div>
        </div>
        <Reveal className="center-link"><PageLink className="text-link" href={paths.inspirations}>Voir toutes les inspirations <span aria-hidden="true">↗</span></PageLink></Reveal>
      </section>

      <section className="press-section section-wrap"><Reveal><h2>Collaborations recherchées</h2></Reveal><Reveal className="press-window" delay={120}><div className="press-row"><div>{partners.map(partner => <span key={partner}>{partner}</span>)}</div><div aria-hidden="true">{partners.map(partner => <span key={partner}>{partner}</span>)}</div></div></Reveal></section>

      <section className="review-section section-wrap" aria-label="Les engagements de BINTI Bride"><Reveal className="review-card" effect="wipe" style={{ '--review-background': `url("${media.reviewBackground}")` } as React.CSSProperties}><CommitmentCarousel /></Reveal></section>

      <section className="process-section section-wrap" id="process">
        <Sprig className="process-sprig" />
        <div className="limited-card"><Reveal className="process-photo" effect="wipe"><img loading="lazy" decoding="async" src={media.processPhoto} alt="Robes de mariée suspendues en boutique" /></Reveal><Reveal className="limited-frame"><h3>Un essayage sur rendez-vous</h3><p>Écrivez-nous pour connaître les créneaux disponibles.</p></Reveal></div>
        <div className="process-content"><Reveal effect="right"><h2>DE LA PREMIÈRE<br />RENCONTRE AU CHOIX</h2></Reveal><div className="process-steps">{steps.map(([number, title, description, note], index) => <Reveal className="process-step" effect="right" delay={index * 55} key={number}><span className="step-number">{number}</span><div><h3>{title}</h3><p>{description}</p><small>{note}</small></div></Reveal>)}</div></div>
      </section>

      <section className="founder-section section-wrap" id="about">
        <div className="founder-quote"><Reveal><span className="eyebrow">Le projet BINTI Bride</span></Reveal><Reveal delay={110} effect="left"><blockquote>« Chaque femme mérite de se sentir exceptionnelle. »</blockquote></Reveal></div>
        <Reveal className="founder-photo" delay={120} effect="wipe"><img loading="lazy" decoding="async" src={media.portrait} alt="Portrait d’une mariée souriante sous son voile" /></Reveal>
        <div className="founder-bio"><Reveal delay={180} effect="right"><p>Notre ambition est de devenir, pas à pas, une référence dans l’univers nuptial congolais.</p></Reveal><Reveal className="founder-signature" delay={120} effect="right"><h2>BINTI</h2><PageLink className="button button-taupe" href={paths.about}>À propos de BINTI <span aria-hidden="true">↗</span></PageLink></Reveal><div className="press-mentions"><Reveal><h3>Nos priorités</h3></Reveal><Reveal delay={65}><span>Location</span><small>Au cœur du projet</small></Reveal><Reveal delay={130}><span>Accompagnement</span><small>Conseils personnalisés</small></Reveal><Reveal delay={195}><span>Vente</span><small>À développer</small></Reveal></div></div>
      </section>

      <section className="collage-section section-wrap">
        <Reveal className="collage-heading"><span className="eyebrow">Essayage à Lubumbashi</span><h2>ENVIE D’ESSAYER<br />UNE ROBE ?</h2><a className="button button-taupe" href={getAppointmentUrl()}>Prendre rendez-vous <span aria-hidden="true">↗</span></a></Reveal>
        <div className="collage-grid">{collage.map(([src, alt], index) => <Reveal key={src} className={`collage-img collage-img-${index + 1}`} effect={index < 2 ? 'left' : index < 4 ? 'right' : 'wipe'} delay={index % 2 * 90} replay><img loading="lazy" decoding="async" src={src} alt={alt} /></Reveal>)}</div>
        <div className="closing-mark"><Reveal className="closing-left" effect="left"><span className="eyebrow">Rendez-vous</span><span className="closing-type">À BIENTÔT</span></Reveal><Sprig className="closing-sprig" /><Reveal className="closing-right" effect="right" delay={110}><span className="closing-type">CHEZ BINTI</span><span className="eyebrow">Lubumbashi · RDC</span></Reveal></div>
      </section>

      <section className="journal-section section-wrap" id="journal">
        <Reveal className="journal-heading" effect="left"><h2>NOS CONSEILS<br />POUR L’ESSAYAGE</h2><PageLink className="button button-taupe" href={paths.blog}>Tous les conseils <span aria-hidden="true">↗</span></PageLink></Reveal>
        <div className="journal-grid">{articles.slice(0, 3).map((article, index) => <Reveal className="journal-card" effect="wipe" delay={index * 95} key={article.slug}><PageLink href={detailPath(paths.blog, article.slug)} className="journal-image" aria-label={article.title}><img loading="lazy" decoding="async" src={article.image} alt="" /><span>Lire l’article ↗</span></PageLink><div className="journal-meta"><span>{article.category}</span><time dateTime={`PT${article.minutes}M`}>{article.minutes} min</time></div><h3><PageLink href={detailPath(paths.blog, article.slug)}>{article.title}</PageLink></h3></Reveal>)}</div>
      </section>
    </main>
    <SiteFooter />
  </>
}

function CoupleCard({ story, index }: { story: (typeof caseStudies)[number]; index: number }) {
  const href = detailPath(paths.inspirations, story.slug)
  return <article className={`couple-card couple-card-${index + 1}`}><Reveal effect="wipe" delay={index % 2 * 80}><PageLink href={href} className="couple-image"><img loading="lazy" decoding="async" src={story.image} alt={`Inspiration nuptiale : ${story.title}`} /></PageLink></Reveal><Reveal className="couple-caption" delay={100}><div><h3><PageLink href={href}>{story.title}</PageLink></h3><PageLink className="text-link" href={href}>Voir le style <span aria-hidden="true">↗</span></PageLink></div><div><div className="couple-meta">{story.tags.map(tag => <span key={tag}>{tag}</span>)}</div><p>{story.intro}</p></div></Reveal></article>
}
