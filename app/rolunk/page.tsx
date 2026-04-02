import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroDisclaimer } from '@/components/hero-disclaimer'
import { ShieldCheck, Users, Globe, Building2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rólunk – HungaryMatchTickets',
  description:
    'Ismerje meg a HungaryMatchTickets csapatát és küldetésünket: átlátható sportjegy-árösszehasonlítás Magyarországon és Európában.',
}

const values = [
  {
    icon: ShieldCheck,
    title: 'Átláthatóság',
    body: 'Nem értékesítünk jegyeket és nem rejtünk el díjakat. Minden megjelenített ár a partnerek valós ajánlata.',
  },
  {
    icon: Users,
    title: 'Szurkolóknak szurkolókért',
    body: 'Platformunkat azért hoztuk létre, hogy a sportrajongók ne fizessenek feleslegesen sokat egy meccsért vagy versenyre szóló belépőért.',
  },
  {
    icon: Globe,
    title: 'Európai lefedettség',
    body: 'Magyar és európai rendezvények egyaránt szerepelnek a kínálatunkban, így a határ menti eseményeket is könnyen megtalálhatja.',
  },
  {
    icon: Building2,
    title: 'Megbízható partnerek',
    body: 'Csak ellenőrzött és licencelt jegyértékesítő platformokkal dolgozunk együtt. A vásárlás biztonságát minden esetben a partner garantálja.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <HeroDisclaimer />

      <main className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
        {/* Header */}
        <div className="mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Rólunk
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance mb-6">
            Ki áll a HungaryMatchTickets mögött?
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A HungaryMatchTickets egy árösszehasonlító platform, amelyet a
            sportrajongók életének megkönnyítésére hoztunk létre. Nem adunk el
            jegyeket – csupán összegyűjtjük és összehasonlítjuk a megbízható
            partnereinknél elérhető árakat, hogy Ön a legjobb döntést tudja
            meghozni.
          </p>
        </div>

        {/* Mission */}
        <section className="bg-card border border-border rounded-2xl p-8 md:p-10 mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Küldetésünk
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A sportjegyek piaca átláthatatlan: ugyanarra az eseményre tíz
            különböző platformon tíz különböző árat találhat. Mi ezt az
            átláthatatlanságot szüntettük meg. Egy helyen, egy pillanat alatt
            látja, hol érhető el a legkedvezőbb ár.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Fontos hangsúlyozni: a HungaryMatchTickets{' '}
            <strong className="text-foreground">nem jegyértékesítő platform</strong>.
            Nem gyűjtünk fizetési adatokat, nem tárolunk személyes adatokat, és
            nem közvetítünk tranzakciókat. Minden vásárlás a partnereink
            weboldalán, az ő feltételeik szerint zajlik.
          </p>
        </section>

        {/* Values */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Értékeink
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-card border border-border rounded-xl p-6 flex gap-4"
              >
                <div className="shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <v.icon size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {v.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {v.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Company info */}
        <section className="bg-muted/40 border border-border rounded-2xl p-8 md:p-10">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Céginformáció
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-muted-foreground mb-1 font-medium uppercase tracking-wide text-xs">
                Cégnév
              </p>
              <p className="text-foreground font-semibold">
                FISCUS NOSTRUM FUND SERVICES LIMITED
              </p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1 font-medium uppercase tracking-wide text-xs">
                Kapcsolattartó
              </p>
              <p className="text-foreground">Myrianthous Anna</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1 font-medium uppercase tracking-wide text-xs">
                Cím
              </p>
              <p className="text-foreground">
                Panagioti Kaspi 5Α., Nicosia 1095, Cyprus
              </p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1 font-medium uppercase tracking-wide text-xs">
                E-mail
              </p>
              <a
                href="mailto:info@hungarymatchtickets.com"
                className="text-accent hover:underline"
              >
                info@hungarymatchtickets.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
