import Link from 'next/link'
import { ExternalLink, Globe, ShieldCheck, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroDisclaimer } from '@/components/hero-disclaimer'

const PARTNERS = [
  {
    name: 'Ticketmaster',
    url: 'https://ticketmaster.com',
    domain: 'ticketmaster.com',
    region: 'Nemzetközi',
    regionColor: 'bg-foreground text-primary-foreground',
    description:
      'A világ legnagyobb jegyértékesítő platformja. Több millió esemény jegyét értékesíti globálisan, megbízható vásárlói garanciával és biztonságos fizetéssel.',
    features: ['Vásárlói garancia', 'Mobilos jegy', '190+ ország'],
  },
  {
    name: 'Viagogo',
    url: 'https://viagogo.com',
    domain: 'viagogo.com',
    region: 'Nemzetközi',
    regionColor: 'bg-foreground text-primary-foreground',
    description:
      'Vezető másodlagos piaci jegyplatform, amelyen magánszemélyek és viszonteladók kínálnak jegyeket sportrendezvényekre és koncertekre szerte a világon.',
    features: ['Garancia minden vásárlásra', 'Digitális jegyek', 'Biztonságos fizetés'],
  },
  {
    name: 'StubHub',
    url: 'https://stubhub.com',
    domain: 'stubhub.com',
    region: 'Nemzetközi',
    regionColor: 'bg-foreground text-primary-foreground',
    description:
      'Az USA legnagyobb és egyik legismertebb jegypiactere. Átlátható ár­képzéssel és FanProtect garanciával működik minden vásárlásnál.',
    features: ['FanProtect garancia', 'Mobilos beléptetés', 'Ár­összehasonlítás'],
  },
  {
    name: 'Eventim',
    url: 'https://eventim.com',
    domain: 'eventim.com',
    region: 'Magyarország & EU',
    regionColor: 'bg-accent text-accent-foreground',
    description:
      'Európa egyik legnagyobb jegyértékesítő rendszere magyarországi jelenléttel. Sporteseményekre, koncertekre és kulturális programokra kínál jegyeket.',
    features: ['Magyar oldal', 'Európai lefedettség', 'Papíros és e-jegy'],
  },
  {
    name: 'Jegy.hu',
    url: 'https://jegy.hu',
    domain: 'jegy.hu',
    region: 'Magyarország',
    regionColor: 'bg-accent text-accent-foreground',
    description:
      'Magyarország egyik vezető jegyértékesítő platformja. Sportesemények, koncertek és kulturális rendezvények széles kínálatával.',
    features: ['Magyar platform', 'Azonnali e-jegy', 'Ügyfélszolgálat'],
  },
  {
    name: 'Interticket',
    url: 'https://interticket.com',
    domain: 'interticket.com',
    region: 'Magyarország & EU',
    regionColor: 'bg-accent text-accent-foreground',
    description:
      'Közép-európai jegyrendszer sporteseményekhez és kulturális programokhoz. Megbízható infrastruktúrával és kiterjedt partnerkapcsolatokkal.',
    features: ['Közép-EU fókusz', 'Partnerkapcsolatok', 'Gyors kiszállítás'],
  },
  {
    name: 'AXS',
    url: 'https://axs.com',
    domain: 'axs.com',
    region: 'Nemzetközi',
    regionColor: 'bg-foreground text-primary-foreground',
    description:
      'Modern digitális jegyplatform nagy sportcsapatok és arénák hivatalos jegyértékesítője. Innovatív mobilos beléptetési technológiával.',
    features: ['AXS Mobile ID', 'Hivatalos partner', 'Élő transzfer'],
  },
  {
    name: 'Jegymester',
    url: 'https://jegymester.hu',
    domain: 'jegymester.hu',
    region: 'Magyarország',
    regionColor: 'bg-accent text-accent-foreground',
    description:
      'Magyar jegyértékesítő szolgáltatás hazai sportrendezvények és kulturális programok számára, egyszerű foglalási folyamattal.',
    features: ['Magyar felület', 'Hazai rendezvények', 'Egyszerű foglalás'],
  },
]

const INTERNATIONAL = PARTNERS.filter((p) => p.region === 'Nemzetközi')
const LOCAL = PARTNERS.filter((p) => p.region !== 'Nemzetközi')

export default function PartnereinkPage() {
  return (
    <>
      <Navbar />
      <HeroDisclaimer />

      <main className="min-h-screen bg-background">

        {/* Hero */}
        <section className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
                  Partnereink
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance leading-tight mb-5">
                  Ellenőrzött jegyértékesítő platformok
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  Kizárólag megbízható, valóban működő jegyértékesítő szolgáltatások
                  árait hasonlítjuk össze. Minden partner ellenőrzött, biztonságos
                  és rendelkezik vásárlói garanciával.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-2xl px-6 py-7">
                  <p className="text-4xl font-extrabold text-foreground mb-1">{PARTNERS.length}</p>
                  <p className="text-sm text-muted-foreground leading-snug">ellenőrzött partner platform</p>
                </div>
                <div className="bg-card border border-border rounded-2xl px-6 py-7">
                  <p className="text-4xl font-extrabold text-accent mb-1">{INTERNATIONAL.length}</p>
                  <p className="text-sm text-muted-foreground leading-snug">nemzetközi szolgáltatás</p>
                </div>
                <div className="bg-card border border-border rounded-2xl px-6 py-7">
                  <p className="text-4xl font-extrabold text-foreground mb-1">{LOCAL.length}</p>
                  <p className="text-sm text-muted-foreground leading-snug">magyar / közép-európai</p>
                </div>
                <div className="bg-card border border-border rounded-2xl px-6 py-7">
                  <ShieldCheck size={28} className="text-accent mb-2" />
                  <p className="text-sm text-muted-foreground leading-snug">mind rendelkezik vásárlói garanciával</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer notice */}
        <section className="border-b border-border bg-disclaimer-bg">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex items-start gap-4">
            <AlertTriangle size={20} className="text-disclaimer-text shrink-0 mt-0.5" />
            <p className="text-disclaimer-text font-semibold text-base leading-relaxed">
              <strong className="font-extrabold uppercase">Fontos:</strong> A HungaryMatchTickets
              egy <strong>másodlagos piaci árösszehasonlító platform</strong> — nem értékesít
              jegyeket. Az alábbi partnerek által feltüntetett árak{' '}
              <strong>magasabbak lehetnek a névértéknél.</strong> Minden vásárlás
              közvetlenül a partner weboldalán történik.
            </p>
          </div>
        </section>

        {/* International partners */}
        <section className="py-16 md:py-20 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="mb-10">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                Globális platformok
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Nemzetközi partnerek
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {INTERNATIONAL.map((partner) => (
                <PartnerCard key={partner.name} partner={partner} />
              ))}
            </div>
          </div>
        </section>

        {/* Hungarian / regional partners */}
        <section className="py-16 md:py-20 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="mb-10">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                Helyi platformok
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Magyar &amp; közép-európai partnerek
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {LOCAL.map((partner) => (
                <PartnerCard key={partner.name} partner={partner} />
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 md:py-20 bg-muted/20 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">
                Folyamat
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Hogyan működik az összehasonlítás?
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Egyszerű, átlátható, ingyenes — minden lépésben te döntesz.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: '01',
                  title: 'Válaszd ki az eseményt',
                  body: 'Böngészd a rendelkezésre álló sportrendezvényeket, és kattints arra, ami érdekel.',
                },
                {
                  step: '02',
                  title: 'Hasonlítsd össze az árakat',
                  body: 'Egy oldalon látod az összes partner ajánlatát a legolcsóbbtól a legdrágábbig rendezve.',
                },
                {
                  step: '03',
                  title: 'Vásárolj a partnernél',
                  body: 'Kattints a kiválasztott ajánlatra — közvetlenül a partner biztonságos oldalára irányítunk.',
                },
              ].map(({ step, title, body }) => (
                <div key={step} className="bg-card border border-border rounded-2xl px-6 py-7">
                  <p className="text-5xl font-extrabold text-border mb-5 leading-none">{step}</p>
                  <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="bg-card border-2 border-border rounded-2xl px-8 md:px-14 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-balance">
                  Készen állsz az összehasonlításra?
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed max-w-xl">
                  Nézd meg aktuális sporteseményeinket, és találd meg a legjobb
                  árat a partnereink között — teljesen ingyenesen.
                </p>
              </div>
              <Link
                href="/esemenyek"
                className="shrink-0 inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-xl hover:opacity-85 transition-opacity whitespace-nowrap"
              >
                Események megtekintése
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

function PartnerCard({ partner }: { partner: (typeof PARTNERS)[number] }) {
  return (
    <div className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-md hover:border-accent/30 transition-all">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 pt-6 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
            <Globe size={18} className="text-muted-foreground" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground leading-none">{partner.name}</h3>
            <p className="text-xs text-muted-foreground mt-0.5">{partner.domain}</p>
          </div>
        </div>
        <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${partner.regionColor}`}>
          {partner.region}
        </span>
      </div>

      <div className="px-6 pb-6">
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          {partner.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {partner.features.map((f) => (
            <span
              key={f}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground bg-muted px-3 py-1.5 rounded-full"
            >
              <CheckCircle2 size={11} className="text-accent" />
              {f}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={partner.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline underline-offset-4 transition-colors"
        >
          <ExternalLink size={14} />
          {partner.domain} megnyitása
        </a>
      </div>
    </div>
  )
}
