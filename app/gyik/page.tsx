import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroDisclaimer } from '@/components/hero-disclaimer'
import { AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Gyakori kérdések – HungaryMatchTickets',
  description:
    'Válaszok a leggyakoribb kérdésekre a HungaryMatchTickets árösszehasonlító platformról.',
}

const faqs = [
  {
    q: 'Lehet ezen az oldalon jegyet venni?',
    a: 'Nem. A HungaryMatchTickets kizárólag árösszehasonlító platform. Jegyeket közvetlenül a partnereink weboldalain lehet vásárolni – minden partnerlinknél egyértelműen jelezzük, hova irányítjuk Önt.',
  },
  {
    q: 'Miért különböznek az árak a partner oldalán az itt látottaktól?',
    a: 'Az árak valós idejű változásnak vannak kitéve, és a kezelési díjak, valutaváltás vagy ülőhely-kategória különbségei eltérést okozhatnak. Mindig a partner oldalán megjelenő végső ár az irányadó. Mi nem vállalunk felelősséget az esetleges eltérésért.',
  },
  {
    q: 'Gyűjtenek-e személyes adatokat?',
    a: 'Nem gyűjtünk fizetési adatokat és nem tárolunk személyes adatokat. A sütikre vonatkozó részletes tájékoztatót a Cookie szabályzatunkban találja.',
  },
  {
    q: 'Hogyan választják ki a partnereket?',
    a: 'Csak licencelt, ellenőrzött jegyértékesítő platformokkal dolgozunk együtt, amelyek megbízható fogyasztóvédelmi garanciákat nyújtanak. Azonban a vásárlás minden esetben a partner saját feltételei szerint zajlik – kérjük, olvassa el azokat vásárlás előtt.',
  },
  {
    q: 'Biztonságos átmenni a partner weboldalára?',
    a: 'Igen, az általunk feltüntetett partnerek ismert és széles körben használt értékesítő platformok. Mindazonáltal felhívjuk figyelmét, hogy a partner oldalán megkezdett vásárlásért és az ott megadott adatokért mi nem vállalunk felelősséget.',
  },
  {
    q: 'Miért lehet ugyanarra az eseményre nagyon eltérő ár?',
    a: 'A jegyárak ülőhely-kategóriánként, vásárlási időpontonként és platformonként jelentősen különbözhetnek. A HungaryMatchTickets megmutatja a legalacsonyabbtól a legmagasabb elérhető árig a teljes sávot, hogy átfogó képet kapjon.',
  },
  {
    q: 'Mit tegyek, ha hibás adatot találok az oldalon?',
    a: 'Kérjük, jelezze nekünk az info@hungarymatchtickets.com e-mail-címen. Igyekszünk az adatokat folyamatosan naprakészen tartani, de a tartalom pontosságát nem tudjuk minden pillanatban garantálni.',
  },
  {
    q: 'Ingyenes a szolgáltatás?',
    a: 'Igen, a HungaryMatchTickets teljesen ingyenes. Bevételünket a partnerprogramokon keresztül generáljuk – ha Ön a mi linkünkön keresztül vásárol, kis jutalékot kaphatunk, ez azonban nem befolyásolja a megjelenített árakat.',
  },
]

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <HeroDisclaimer />

      <main className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-24">
        {/* Header */}
        <div className="mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            GYIK
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance mb-4">
            Gyakori kérdések
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Minden, amit a HungaryMatchTickets működéséről tudnia kell.
          </p>
        </div>

        {/* Important disclaimer box */}
        <div className="bg-disclaimer-bg border-2 border-disclaimer-border rounded-xl p-6 mb-12 flex items-start gap-4">
          <AlertTriangle size={26} className="text-disclaimer-text shrink-0 mt-0.5" />
          <div>
            <p className="text-disclaimer-text font-extrabold text-lg uppercase tracking-wide mb-1">
              Ez az oldal NEM értékesít jegyeket!
            </p>
            <p className="text-disclaimer-text font-medium text-sm leading-relaxed">
              Minden kérdés és válasz kizárólag az árösszehasonlító
              szolgáltatásunkra vonatkozik. Jegyvásárláshoz kérjük, látogasson
              el a partnereink weboldalára.
            </p>
          </div>
        </div>

        {/* FAQ items */}
        <div className="flex flex-col divide-y divide-border border border-border rounded-2xl overflow-hidden">
          {faqs.map((item, i) => (
            <div key={i} className="bg-card px-6 md:px-8 py-6">
              <h2 className="font-semibold text-foreground text-base mb-2">
                {item.q}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm mb-2">
            Nem találta meg a választ?
          </p>
          <a
            href="mailto:info@hungarymatchtickets.com"
            className="text-accent font-semibold hover:underline text-sm"
          >
            info@hungarymatchtickets.com
          </a>
        </div>
      </main>

      <Footer />
    </>
  )
}
