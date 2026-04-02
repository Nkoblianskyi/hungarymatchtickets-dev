import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroDisclaimer } from '@/components/hero-disclaimer'

export const metadata: Metadata = {
  title: 'Cookie szabályzat – HungaryMatchTickets',
  description:
    'Tájékoztató a HungaryMatchTickets weboldalán alkalmazott sütikről (cookie-kről).',
}

const sections = [
  {
    title: 'Mi az a cookie?',
    body: `A cookie (süti) egy kis adatfájl, amelyet a weboldal az Ön böngészőjében tárol, amikor meglátogatja az oldalt. A sütik segítségével a weboldal megjegyezhet bizonyos beállításokat, és jobb felhasználói élményt nyújthat.`,
  },
  {
    title: 'Milyen sütiket használunk?',
    body: `Weboldalunk az alábbi sütiket alkalmazhatja:

• Feltétlenül szükséges sütik: Az oldal működéséhez elengedhetetlen sütik. Ezek nélkül az oldal nem működne megfelelően. Személyes adatot nem tartalmaznak.

• Analitikai sütik: Névtelen statisztikai adatokat gyűjtünk arról, hogyan használják látogatóink az oldalt (pl. Google Analytics). Ezek az adatok nem azonosítják Önt személyesen.

• Funkcionális sütik: Az Ön által megadott beállításokat tárolják (pl. nyelv, szűrési preferenciák), hogy következő látogatásakor ne kelljen azokat újra megadni.

• Partnerek sütijei: Ha az oldalunkon lévő linkekre kattint, a partnereink (pl. Ticketmaster, Viagogo, StubHub) saját sütiket helyezhetnek el az Ön böngészőjében. Ezekre az ő adatkezelési tájékoztatóik vonatkoznak.`,
  },
  {
    title: 'Hogyan kezeljük az Ön adatait?',
    body: `A HungaryMatchTickets nem gyűjt fizetési adatokat és nem tárol személyes azonosításra alkalmas adatokat. Az analitikai sütikből nyert adatokat kizárólag az oldal fejlesztésére és látogatottsági statisztikák készítésére használjuk fel. Az adatokat harmadik félnek nem adjuk el.`,
  },
  {
    title: 'Hogyan kezelheti a sütiket?',
    body: `Böngészőjének beállításaiban bármikor lehetősége van a sütik elfogadásának megtagadására vagy törlésére. Kérjük, vegye figyelembe, hogy bizonyos funkciók a sütik letiltása esetén nem működnek megfelelően.

A főbb böngészőkben az alábbi helyeken találja a sütikkel kapcsolatos beállításokat:
• Chrome: Beállítások → Adatvédelem és biztonság → Sütik
• Firefox: Beállítások → Adatvédelem és biztonság
• Safari: Beállítások → Adatvédelem
• Edge: Beállítások → Adatvédelem, keresés és szolgáltatások`,
  },
  {
    title: 'Cookie szabályzat módosítása',
    body: `Fenntartjuk a jogot jelen cookie szabályzat módosítására. A változásokat ezen az oldalon tesszük közzé, és az oldal alján feltüntetjük a legutóbbi módosítás dátumát. Folyamatos használatával Ön elfogadja a módosításokat.`,
  },
  {
    title: 'Kapcsolat',
    body: `Cookie-kkal kapcsolatos kérdéseivel forduljon hozzánk:

FISCUS NOSTRUM FUND SERVICES LIMITED
Panagioti Kaspi 5Α., Nicosia 1095, Cyprus
E-mail: info@hungarymatchtickets.com`,
  },
]

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar />
      <HeroDisclaimer />

      <main className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Jogi információk
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance mb-4">
            Cookie szabályzat
          </h1>
          <p className="text-sm text-muted-foreground">
            Utolsó módosítás: 2026.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-xl font-bold text-foreground mb-3">
                {s.title}
              </h2>
              <div className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                {s.body}
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </>
  )
}
