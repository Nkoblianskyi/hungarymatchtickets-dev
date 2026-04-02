export interface Partner {
  name: string
  url: string
  price: number
  currency: string
}

export interface Event {
  id: string
  slug: string
  title: string
  category: string
  date: string
  venue: string
  city: string
  image: string
  priceFrom: number
  priceTo: number
  currency: string
  partners: Partner[]
  description: string
}

export const EVENTS: Event[] = [
  {
    id: '1',
    slug: 'ferencvaros-puskas-akademia-2026',
    title: 'Ferencváros – Puskás Akadémia',
    category: 'Labdarúgás',
    date: '2026-05-09',
    venue: 'Groupama Aréna',
    city: 'Budapest',
    image: '/images/events/fradi-ferencvaros-football.jpg',
    priceFrom: 3500,
    priceTo: 18000,
    currency: 'HUF',
    description:
      'Az OTP Bank Liga bajnokság egyik legjelentősebb meccse – a Ferencváros fogadja a Puskás Akadémiát a Groupama Arénában. Hatalmas találkozó egy zsúfolt stadionban.',
    partners: [
      { name: 'Ticketmaster', url: 'https://ticketmaster.com', price: 3500, currency: 'HUF' },
      { name: 'Jegy.hu', url: 'https://jegy.hu', price: 4200, currency: 'HUF' },
      { name: 'Viagogo', url: 'https://viagogo.com', price: 5800, currency: 'HUF' },
      { name: 'StubHub', url: 'https://stubhub.com', price: 6100, currency: 'HUF' },
    ],
  },
  {
    id: '2',
    slug: 'formula1-magyar-nagydij-2026',
    title: 'Formula 1 – Magyar Nagydíj 2026',
    category: 'Motorsport',
    date: '2026-07-26',
    venue: 'Hungaroring',
    city: 'Mogyoród',
    image: '/images/events/formula1-budapest-hungaroring.jpg',
    priceFrom: 85000,
    priceTo: 420000,
    currency: 'HUF',
    description:
      'A Forma-1 világ elitje ismét Magyarországra érkezik. A Hungaroring különleges pályáján a legjobb pilóták csapnak össze a Magyar Nagydíjért. Felejthetetlen élmény garantálva.',
    partners: [
      { name: 'Ticketmaster', url: 'https://ticketmaster.com', price: 85000, currency: 'HUF' },
      { name: 'Viagogo', url: 'https://viagogo.com', price: 98000, currency: 'HUF' },
      { name: 'StubHub', url: 'https://stubhub.com', price: 110000, currency: 'HUF' },
      { name: 'AXS', url: 'https://axs.com', price: 92000, currency: 'HUF' },
    ],
  },
  {
    id: '3',
    slug: 'budapest-open-tenisz-2026',
    title: 'Budapest Open – Tenisz ATP',
    category: 'Tenisz',
    date: '2026-06-02',
    venue: 'Vasas Akadémia',
    city: 'Budapest',
    image: '/images/events/tennis-budapest-open.jpg',
    priceFrom: 4500,
    priceTo: 28000,
    currency: 'HUF',
    description:
      'A Budapest Open ismét hazahozza a világ legjobb teniszezőit. Az agyagpályás torna izgalmas meccseket ígér a legjobb európai versenyzőkkel.',
    partners: [
      { name: 'Ticketmaster', url: 'https://ticketmaster.com', price: 4500, currency: 'HUF' },
      { name: 'Jegy.hu', url: 'https://jegy.hu', price: 5000, currency: 'HUF' },
      { name: 'Eventim', url: 'https://eventim.com', price: 5400, currency: 'HUF' },
      { name: 'Interticket', url: 'https://interticket.com', price: 5800, currency: 'HUF' },
    ],
  },
  {
    id: '4',
    slug: 'atletika-eb-2026',
    title: 'Atlétika Európa-bajnokság – Budapest',
    category: 'Atlétika',
    date: '2026-08-12',
    venue: 'Nemzeti Atlétikai Centrum',
    city: 'Budapest',
    image: '/images/events/athletics-world-championships.jpg',
    priceFrom: 12000,
    priceTo: 95000,
    currency: 'HUF',
    description:
      'Európa legjobb atlétikaversenyzői gyűlnek össze Budapesten. A Nemzeti Atlétikai Centrum ad otthont a döntőknek és elődöntőknek az összes számban.',
    partners: [
      { name: 'Ticketmaster', url: 'https://ticketmaster.com', price: 12000, currency: 'HUF' },
      { name: 'Eventim', url: 'https://eventim.com', price: 13500, currency: 'HUF' },
      { name: 'Viagogo', url: 'https://viagogo.com', price: 14500, currency: 'HUF' },
      { name: 'StubHub', url: 'https://stubhub.com', price: 17200, currency: 'HUF' },
    ],
  },
  {
    id: '5',
    slug: 'kezilabda-vilagbajnoksag-selejtezo-2026',
    title: 'Kézilabda VB-selejtező – Magyarország',
    category: 'Kézilabda',
    date: '2026-10-10',
    venue: 'MVM Dome',
    city: 'Budapest',
    image: '/images/events/handball-hungary.jpg',
    priceFrom: 2500,
    priceTo: 14000,
    currency: 'HUF',
    description:
      'A magyar kézilabda-válogatott hazai pályán lép fel a Világbajnokság selejtezőjén. Óriási a tét, a szurkolók energiája pedig páratlan.',
    partners: [
      { name: 'Jegy.hu', url: 'https://jegy.hu', price: 2500, currency: 'HUF' },
      { name: 'Interticket', url: 'https://interticket.com', price: 2800, currency: 'HUF' },
      { name: 'Eventim', url: 'https://eventim.com', price: 3200, currency: 'HUF' },
    ],
  },
  {
    id: '6',
    slug: 'kosarlabda-superliga-2026',
    title: 'Falco KC – Alba Fehérvár – Kosárlabda Superliga',
    category: 'Kosárlabda',
    date: '2026-11-21',
    venue: 'Savaria Aréna',
    city: 'Szombathely',
    image: '/images/events/basketball-falco.jpg',
    priceFrom: 1800,
    priceTo: 9500,
    currency: 'HUF',
    description:
      'A Superliga egyik legrangosabb meccse – a Falco KC hazai pályán fogadja az Alba Fehérvárt. Rendkívül szoros meccs várható a két rivális között.',
    partners: [
      { name: 'Jegy.hu', url: 'https://jegy.hu', price: 1800, currency: 'HUF' },
      { name: 'Interticket', url: 'https://interticket.com', price: 2000, currency: 'HUF' },
      { name: 'Jegymester', url: 'https://jegymester.hu', price: 2200, currency: 'HUF' },
    ],
  },
  {
    id: '7',
    slug: 'vizilabda-vilagliga-2026',
    title: 'Vízilabda Világliga – Budapest',
    category: 'Vízilabda',
    date: '2026-09-18',
    venue: 'Duna Aréna',
    city: 'Budapest',
    image: '/images/events/water-polo-europa.jpg',
    priceFrom: 3000,
    priceTo: 22000,
    currency: 'HUF',
    description:
      'Magyarország házigazdaként rendezi a Vízilabda Világliga döntőjét. A Duna Arénában Európa és a világ legjobb csapatai mérkőznek meg az aranyéremért.',
    partners: [
      { name: 'Jegy.hu', url: 'https://jegy.hu', price: 3000, currency: 'HUF' },
      { name: 'Ticketmaster', url: 'https://ticketmaster.com', price: 3500, currency: 'HUF' },
      { name: 'Interticket', url: 'https://interticket.com', price: 3800, currency: 'HUF' },
      { name: 'Viagogo', url: 'https://viagogo.com', price: 4400, currency: 'HUF' },
    ],
  },
  {
    id: '8',
    slug: 'tour-de-hongrie-2026',
    title: 'Tour de Hongrie – Kerékpáros körverseny',
    category: 'Kerékpározás',
    date: '2026-05-27',
    venue: 'Hősök tere – Start',
    city: 'Budapest',
    image: '/images/events/cycling-tour-de-hongrie.jpg',
    priceFrom: 0,
    priceTo: 12000,
    currency: 'HUF',
    description:
      'A Tour de Hongrie az egyik legnépszerűbb kerékpáros körverseny Közép-Európában. A rajtot a Hősök terén adják le, a cél Budapest utcáin át húzódik.',
    partners: [
      { name: 'Jegy.hu', url: 'https://jegy.hu', price: 0, currency: 'HUF' },
      { name: 'Jegymester', url: 'https://jegymester.hu', price: 1800, currency: 'HUF' },
      { name: 'Interticket', url: 'https://interticket.com', price: 2500, currency: 'HUF' },
    ],
  },
  {
    id: '9',
    slug: 'jegkorong-vilagbajnoksag-2026',
    title: 'Jégkorong Divízió I. Világbajnokság',
    category: 'Jégkorong',
    date: '2026-04-20',
    venue: 'BOK Csarnok',
    city: 'Budapest',
    image: '/images/events/ice-hockey-budapest.jpg',
    priceFrom: 3500,
    priceTo: 18500,
    currency: 'HUF',
    description:
      'Magyarország házigazdaként rendezi a Jégkorong Divízió I. Világbajnokságot. A BOK Csarnokban Európa legjobb csapatai csapnak össze.',
    partners: [
      { name: 'Jegy.hu', url: 'https://jegy.hu', price: 3500, currency: 'HUF' },
      { name: 'Interticket', url: 'https://interticket.com', price: 3800, currency: 'HUF' },
      { name: 'Ticketmaster', url: 'https://ticketmaster.com', price: 4600, currency: 'HUF' },
      { name: 'Jegymester', url: 'https://jegymester.hu', price: 5100, currency: 'HUF' },
    ],
  },
  {
    id: '10',
    slug: 'uszas-vilagkupa-budapest-2026',
    title: 'Úszás Világkupa – Budapest 2026',
    category: 'Úszás',
    date: '2026-10-16',
    venue: 'Duna Aréna',
    city: 'Budapest',
    image: '/images/events/swimming-world-cup.jpg',
    priceFrom: 4000,
    priceTo: 20000,
    currency: 'HUF',
    description:
      'A világ legjobb úszói versengenek egymással a FINA Világkupa budapesti állomásán. A Duna Aréna fergeteges hangulatot ígér a rekordkísérletekre.',
    partners: [
      { name: 'Jegy.hu', url: 'https://jegy.hu', price: 4000, currency: 'HUF' },
      { name: 'Interticket', url: 'https://interticket.com', price: 4500, currency: 'HUF' },
      { name: 'Ticketmaster', url: 'https://ticketmaster.com', price: 4800, currency: 'HUF' },
      { name: 'StubHub', url: 'https://stubhub.com', price: 5500, currency: 'HUF' },
    ],
  },
  {
    id: '11',
    slug: 'rugby-europa-bajnoksag-2026',
    title: 'Rugby Európa-bajnokság – B Divízió',
    category: 'Rögbi',
    date: '2026-06-20',
    venue: 'BVSC Stadion',
    city: 'Budapest',
    image: '/images/events/rugby-europe-championship.jpg',
    priceFrom: 1500,
    priceTo: 8000,
    currency: 'HUF',
    description:
      'A Magyar Rögbi Szövetség hazai pályán rendezi az Európa-bajnokság B Divíziós fordulóját. Csípős rögbimeccsek, szenvedélyes küzdelmek.',
    partners: [
      { name: 'Jegy.hu', url: 'https://jegy.hu', price: 1500, currency: 'HUF' },
      { name: 'Jegymester', url: 'https://jegymester.hu', price: 1700, currency: 'HUF' },
      { name: 'Interticket', url: 'https://interticket.com', price: 2000, currency: 'HUF' },
    ],
  },
  {
    id: '12',
    slug: 'bokszgala-budapest-2026',
    title: 'Bokszgála Budapest 2026',
    category: 'Boksz',
    date: '2026-11-07',
    venue: 'Papp László Budapest Sportaréna',
    city: 'Budapest',
    image: '/images/events/boxing-gala-budapest.jpg',
    priceFrom: 5500,
    priceTo: 55000,
    currency: 'HUF',
    description:
      'Prémium boksz gála Budapest szívében – hazai és külföldi profibokszolók a ringben. Különleges este sportszerelők számára minden korosztályból.',
    partners: [
      { name: 'Ticketmaster', url: 'https://ticketmaster.com', price: 5500, currency: 'HUF' },
      { name: 'Jegy.hu', url: 'https://jegy.hu', price: 6200, currency: 'HUF' },
      { name: 'Eventim', url: 'https://eventim.com', price: 7100, currency: 'HUF' },
      { name: 'Viagogo', url: 'https://viagogo.com', price: 7800, currency: 'HUF' },
      { name: 'StubHub', url: 'https://stubhub.com', price: 9000, currency: 'HUF' },
    ],
  },
  {
    id: '13',
    slug: 'roplabda-superliga-2026',
    title: 'Röplabda Superliga – Budapest vs. Kaposvár',
    category: 'Röplabda',
    date: '2026-12-05',
    venue: 'Budapest Röplabda Centrum',
    city: 'Budapest',
    image: '/images/events/volleyball-superliga.jpg',
    priceFrom: 1200,
    priceTo: 6500,
    currency: 'HUF',
    description:
      'A hazai röplabda Superliga kiemelkedő meccse – Budapest otthon fogadja a Kaposvári csapatot. Szoros küzdelem várható a tabella élén.',
    partners: [
      { name: 'Jegy.hu', url: 'https://jegy.hu', price: 1200, currency: 'HUF' },
      { name: 'Jegymester', url: 'https://jegymester.hu', price: 1400, currency: 'HUF' },
      { name: 'Interticket', url: 'https://interticket.com', price: 1600, currency: 'HUF' },
    ],
  },
  {
    id: '14',
    slug: 'moto-gp-osztriak-nagydij-2026',
    title: 'MotoGP – Osztrák Nagydíj 2026',
    category: 'Motorsport',
    date: '2026-08-09',
    venue: 'Red Bull Ring',
    city: 'Spielberg, Ausztria',
    image: '/images/events/moto-gp-europe.jpg',
    priceFrom: 45000,
    priceTo: 280000,
    currency: 'HUF',
    description:
      'Az Osztrák MotoGP Nagydíj közel Budapest – élő MotoGP-verseny a Red Bull Ringen. A legjobb motorosok küzdenek az aranyéremért az egyik leglátványosabb pályán.',
    partners: [
      { name: 'Ticketmaster', url: 'https://ticketmaster.com', price: 45000, currency: 'HUF' },
      { name: 'AXS', url: 'https://axs.com', price: 49000, currency: 'HUF' },
      { name: 'StubHub', url: 'https://stubhub.com', price: 52000, currency: 'HUF' },
      { name: 'Viagogo', url: 'https://viagogo.com', price: 68000, currency: 'HUF' },
    ],
  },
  {
    id: '15',
    slug: 'sakk-olimpia-2026',
    title: 'Sakkolimpia 2026',
    category: 'Sakk',
    date: '2026-09-05',
    venue: 'Papp László Budapest Sportaréna',
    city: 'Budapest',
    image: '/images/events/chess-olympiad.jpg',
    priceFrom: 2000,
    priceTo: 15000,
    currency: 'HUF',
    description:
      'Budapest ismét a sakk világfővárosává válik a Sakkolimpia alatt. Száz ország legjobb sakkmesterei mérkőznek meg a csapatok olimpiai bajnokságáért.',
    partners: [
      { name: 'Jegy.hu', url: 'https://jegy.hu', price: 2000, currency: 'HUF' },
      { name: 'Jegymester', url: 'https://jegymester.hu', price: 2200, currency: 'HUF' },
      { name: 'Eventim', url: 'https://eventim.com', price: 2800, currency: 'HUF' },
      { name: 'Interticket', url: 'https://interticket.com', price: 3100, currency: 'HUF' },
    ],
  },
  {
    id: '16',
    slug: 'vivo-vilagkupa-budapest-2026',
    title: 'Vívó Világkupa – Budapest 2026',
    category: 'Vívás',
    date: '2026-07-10',
    venue: 'Budapest Sportcsarnok',
    city: 'Budapest',
    image: '/images/events/fencing-world-cup.jpg',
    priceFrom: 2500,
    priceTo: 12000,
    currency: 'HUF',
    description:
      'A FIE Vívó Világkupa budapesti állomásán Európa és a világ legjobb vívói mérköznek meg. Magyar vívók is kiemelt esélyesek az aranyéremre.',
    partners: [
      { name: 'Jegy.hu', url: 'https://jegy.hu', price: 2500, currency: 'HUF' },
      { name: 'Interticket', url: 'https://interticket.com', price: 2700, currency: 'HUF' },
      { name: 'Eventim', url: 'https://eventim.com', price: 3300, currency: 'HUF' },
      { name: 'Jegymester', url: 'https://jegymester.hu', price: 3600, currency: 'HUF' },
    ],
  },
]

export function getEventBySlug(slug: string): Event | undefined {
  return EVENTS.find((e) => e.slug === slug)
}

export function formatPrice(price: number, currency: string): string {
  if (price === 0) return 'Ingyenes'
  return new Intl.NumberFormat('hu-HU', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(price)
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return new Intl.DateTimeFormat('hu-HU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}
