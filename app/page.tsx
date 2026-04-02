import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Search, ShieldCheck, ExternalLink, CheckCircle2, AlertTriangle } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroDisclaimer } from '@/components/hero-disclaimer'
import { EventCard } from '@/components/event-card'
import { EVENTS } from '@/lib/events'

const FEATURED_EVENTS = EVENTS.slice(0, 6)

const PARTNERS = [
  { name: 'Ticketmaster', url: 'https://ticketmaster.hu' },
  { name: 'Jegy.hu', url: 'https://jegy.hu' },
  { name: 'Viagogo', url: 'https://viagogo.com' },
  { name: 'StubHub', url: 'https://stubhub.com' },
  { name: 'Eventim', url: 'https://eventim.com' },
]

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Válassz eseményt',
    description:
      'Böngéssz a sportrendezvények között Magyarországon és Európában. Szűrj kategória és dátum szerint.',
  },
  {
    step: '02',
    title: 'Hasonlítsd össze az árakat',
    description:
      'Megmutatjuk a legfontosabb jegyértékesítők aktuális árait egy helyen. Átláthatóan, valós időben.',
  },
  {
    step: '03',
    title: 'Vásárolj közvetlenül',
    description:
      'A legjobb ajánlat kiválasztása után közvetlenül a partner oldalán vásárolj. Nem tárolunk személyes adatot.',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero section */}
      <section>
        {/* Disclaimer – 20% hero height, larger font */}
        <HeroDisclaimer />

        {/* Hero content — image mosaic background */}
        <div className="relative overflow-hidden" style={{ minHeight: '420px' }}>
          {/* 4-column image mosaic */}
          <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4">
            {[
              '/images/events/fradi-ferencvaros-football.jpg',
              '/images/events/formula1-budapest-hungaroring.jpg',
              '/images/events/athletics-world-championships.jpg',
              '/images/events/handball-hungary.jpg',
            ].map((src, i) => (
              <div key={i} className="relative overflow-hidden">
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-foreground/70" />

          {/* Text content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-8 py-24 md:py-36">
            <h1 className="text-3xl md:text-5xl font-bold text-white text-balance leading-tight mb-5 max-w-3xl">
              Sportjegy árak
              <br />
              egy helyen összehasonlítva
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-xl mx-auto leading-relaxed text-pretty">
              Nem értékesítünk jegyeket. Megmutatjuk, hol találod a legjobb árat
              kedvenc rendezvényedre – átláthatóan és ingyenesen.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Hogyan működik?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Egyszerűen, gyorsan és teljesen átláthatóan – a legjobb
              jegyárakat hozzuk el neked, vásárlás nélkül.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOW_IT_WORKS.map((item) => (
              <div
                key={item.step}
                className="bg-card border border-border rounded-xl p-8"
              >
                <span className="text-5xl font-bold text-border">
                  {item.step}
                </span>
                <h3 className="text-xl font-semibold text-foreground mt-4 mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Rules callout */}
          <div className="mt-12 bg-card border border-border rounded-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="text-accent" size={24} />
                <h3 className="text-lg font-semibold text-foreground">
                  Mire nem vállalunk felelősséget
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  'Nem értékesítünk jegyeket egyetlen rendezvényre sem',
                  'Nem gyűjtünk fizetési adatokat',
                  'Nem tárolunk személyes adatokat',
                  'Nem garantáljuk az árak pontosságát',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <CheckCircle2
                      size={16}
                      className="text-accent shrink-0 mt-0.5"
                    />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Search className="text-accent" size={24} />
                <h3 className="text-lg font-semibold text-foreground">
                  Amit nyújtunk
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  'Árak összehasonlítása több partnertől egy helyen',
                  'Közvetlen link a partner vásárlási oldalára',
                  'Rendszeres árfrissítés az eseményekre',
                  'Magyar és európai sportrendezvények listája',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <CheckCircle2
                      size={16}
                      className="text-accent shrink-0 mt-0.5"
                    />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Section disclaimer */}
          <div className="bg-disclaimer-bg border-2 border-disclaimer-border rounded-xl px-5 py-5 mb-10 flex items-start gap-4">
            <AlertTriangle size={24} className="text-disclaimer-text shrink-0 mt-0.5" />
            <p className="text-disclaimer-text font-semibold text-base leading-relaxed">
              <strong className="font-extrabold uppercase">
                Másodlagos piaci árösszehasonlítás — NEM jegyértékesítés.
              </strong>{' '}
              Az alábbi árak viszonteladói ajánlatokon alapulnak, és{' '}
              <strong>magasabbak lehetnek a névértéknél.</strong>{' '}
              Vásárlás kizárólag a partner weboldalán lehetséges.
            </p>
          </div>

          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Közelgő események
            </h2>
            <Link
              href="/esemenyek"
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
            >
              Összes esemény
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_EVENTS.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              href="/esemenyek"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
            >
              Összes esemény
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">
                Rólunk
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Átlátható árösszehasonlítás – minden esetben
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A HungaryMatchTickets egy független árösszehasonlítási platform,
                amelyet a sportszerelők igényei alapján hoztunk létre. Nem
                értékesítünk jegyeket, csupán megmutatjuk, hol érheted el a
                legjobb árat.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Partnereink folyamatosan frissített adatai alapján pontos
                árinformációkat nyújtunk Magyarország és Európa legnépszerűbb
                sportrendezvényeiről. Minden vásárlás közvetlenül a partner
                oldalán történik.
              </p>
              <Link
                href="/rolunk"
                className="inline-flex items-center gap-2 font-semibold text-foreground hover:text-accent transition-colors"
              >
                Tudj meg többet
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '16+', label: 'Aktív esemény' },
                { value: '6', label: 'Partner platform' },
                { value: '100%', label: 'Ingyenes szolgáltatás' },
                { value: '0', label: 'Tárolt személyes adat' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card border border-border rounded-xl p-6 text-center"
                >
                  <p className="text-4xl font-bold text-foreground mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">
              Partnereink
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Az alábbi platformokon keressük a legjobb árakat. Minden vásárlás
              közvetlenül a partner weboldalán történik.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {PARTNERS.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-border rounded-xl py-5 px-4 flex flex-col items-center gap-2 hover:border-accent/50 hover:shadow-sm transition-all group"
              >
                <ExternalLink
                  size={18}
                  className="text-muted-foreground group-hover:text-accent transition-colors"
                />
                <span className="text-sm font-semibold text-foreground">
                  {p.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
