import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroDisclaimer } from '@/components/hero-disclaimer'

export const metadata: Metadata = {
  title: 'Adatvédelmi nyilatkozat – HungaryMatchTickets',
  description:
    'A HungaryMatchTickets adatvédelmi nyilatkozata a GDPR és az EU adatvédelmi jogszabályok szerint.',
}

const sections = [
  {
    title: '1. Az adatkezelő',
    body: `FISCUS NOSTRUM FUND SERVICES LIMITED
Képviselő: Myrianthous Anna
Székhely: Panagioti Kaspi 5Α., Nicosia 1095, Cyprus
E-mail: info@hungarymatchtickets.com

A HungaryMatchTickets (hungarymatchtickets.com) egy árösszehasonlító platform, amely NEM értékesít jegyeket és NEM gyűjt fizetési adatokat.`,
  },
  {
    title: '2. Milyen adatokat kezelünk?',
    body: `A HungaryMatchTickets minimális adatkezeléssel működik:

• Látogatási adatok (naplófájlok): Az Ön IP-címe, böngészője típusa, a megtekintett oldalak és az időbélyeg. Ezeket kizárólag biztonsági és hibaelhárítási célból tároljuk, legfeljebb 30 napig.

• Analitikai adatok: Névtelen, összesített statisztikák a weboldal használatáról (pl. Google Analytics). Ezek az adatok nem azonosítják Önt személyesen.

• Kapcsolatfelvételi adatok: Ha e-mailen lép kapcsolatba velünk, az Ön neve és e-mail-címe szükséges a válaszadáshoz. Ezeket az adatokat nem adjuk tovább harmadik félnek.

Fontos: Nem gyűjtünk hitelkártya-adatokat, számlázási adatokat vagy egyéb fizetési információt.`,
  },
  {
    title: '3. Az adatkezelés jogalapja',
    body: `Az adatkezelés jogalapjai az EU 2016/679 általános adatvédelmi rendelet (GDPR) alapján:

• Jogos érdek (GDPR 6. cikk (1) f) pont): A naplófájlok és biztonsági adatok kezelése az oldal biztonságos üzemeltetéséhez szükséges.

• Hozzájárulás (GDPR 6. cikk (1) a) pont): Analitikai sütik használatához az Ön hozzájárulása szükséges.

• Szerződéses kötelezettség (GDPR 6. cikk (1) b) pont): Kapcsolatfelvételkor az Ön adatai a kérdésének megválaszolásához szükségesek.`,
  },
  {
    title: '4. Adattovábbítás harmadik feleknek',
    body: `A HungaryMatchTickets személyes adatokat nem értékesít és nem ad át harmadik félnek, kivéve:

• Analitikai szolgáltatók (pl. Google Analytics): Névtelen statisztikai adatok az oldal fejlesztésére. A Google adatvédelmi tájékoztatója: policies.google.com/privacy

• Partnereink: Ha az oldalunkon lévő linkekre kattint és átkerül egy partner (pl. Ticketmaster, Viagogo) weboldalára, a továbbiakban az ő adatvédelmi szabályaik vonatkoznak Önre. Kérjük, vásárlás előtt olvassa el azokat.

• Hatóságok: Jogszabályi kötelezettség esetén hatóságok megkeresésére adatokat adunk ki.`,
  },
  {
    title: '5. Adatmegőrzési idők',
    body: `• Naplófájlok: legfeljebb 30 nap
• Analitikai adatok (névtelen): legfeljebb 26 hónap
• E-mailes levelezés: az ügy lezárásától számított 1 év

A megőrzési idő lejártával az adatokat biztonságosan töröljük.`,
  },
  {
    title: '6. Az Ön jogai (GDPR)',
    body: `A GDPR alapján Önnek joga van:

• Hozzáférési jog: Tájékoztatást kérhet arról, milyen adatait kezeljük.
• Helyesbítési jog: Hibás adatai kijavítását kérheti.
• Törlési jog („az elfeledtetéshez való jog"): Kérheti adatai törlését, amennyiben azok kezelésére nincs jogalap.
• Adathordozhatóság: Kérheti adatai géppel olvasható formátumban való kiadását.
• Tiltakozási jog: Tiltakozhat adatai kezelése ellen.
• Panasztételi jog: Panaszt tehet az illetékes adatvédelmi hatóságnál.

Jogai érvényesítéséhez írjon az info@hungarymatchtickets.com e-mail-címre. A kérelemre 30 napon belül válaszolunk.`,
  },
  {
    title: '7. Adatbiztonság',
    body: `A HungaryMatchTickets megfelelő technikai és szervezési intézkedéseket alkalmaz az adatok védelme érdekében, beleértve a HTTPS titkosítást és a hozzáférési jogosultságok korlátozását. Mindazonáltal az internetes adattovábbítás soha nem 100%-osan biztonságos, teljes biztonságot nem tudunk garantálni.`,
  },
  {
    title: '8. A nyilatkozat módosítása',
    body: `Fenntartjuk a jogot jelen adatvédelmi nyilatkozat módosítására. A változásokat ezen az oldalon tesszük közzé. Lényeges változás esetén e-mailben is értesítjük az érintetteket, amennyiben rendelkezünk e-mail-elérhetőségükkel.`,
  },
]

export default function PrivacyPolicyPage() {
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
            Adatvédelmi nyilatkozat
          </h1>
          <p className="text-sm text-muted-foreground">
            Utolsó módosítás: 2026. &nbsp;·&nbsp; GDPR-kompatibilis
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

        <div className="mt-14 bg-muted/40 border border-border rounded-xl p-6 text-sm text-muted-foreground">
          <p className="font-semibold text-foreground mb-1">
            Kérdése van az adatkezeléssel kapcsolatban?
          </p>
          <p>
            Írjon nekünk:{' '}
            <a
              href="mailto:info@hungarymatchtickets.com"
              className="text-accent hover:underline"
            >
              info@hungarymatchtickets.com
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </>
  )
}
