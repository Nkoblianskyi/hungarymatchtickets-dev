import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Disclaimer in footer */}
        <div className="bg-disclaimer-bg border border-disclaimer-border rounded-lg p-6 mb-10">
          <p className="text-sm text-disclaimer-text font-medium leading-relaxed">
            <strong>Figyelmeztetés:</strong> Ez az oldal nem értékesít jegyeket
            sportrendezvényekre. Szolgáltatásunk kizárólag árösszehasonlítást
            nyújt különböző partnereink között. Minden jegyértékesítés közvetlenül
            a partnereknél történik, és mi nem gyűjtünk fizetési adatokat vagy
            személyes adatokat. Az árak eltérhetnek a megjelenített értékektől –
            kérjük, ellenőrizze azokat a partnereink oldalain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
          {/* Company info */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-foreground">
              HungaryMatchTickets
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Sportjegy árak összehasonlítása Magyarországon és Európában.
            </p>
            <div className="text-sm text-muted-foreground space-y-1">
              <p className="font-medium text-foreground">
                FISCUS NOSTRUM FUND SERVICES LIMITED
              </p>
              <p>Myrianthous Anna</p>
              <p>Panagioti Kaspi 5Α.</p>
              <p>Nicosia 1095</p>
              <p>Cyprus</p>
              <p className="mt-2">
                <a
                  href="mailto:info@hungarymatchtickets.com"
                  className="text-accent hover:underline"
                >
                  info@hungarymatchtickets.com
                </a>
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-foreground">
              Hasznos linkek
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/esemenyek"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Események
                </Link>
              </li>
              <li>
                <Link
                  href="/partnereink"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Partnereink
                </Link>
              </li>
              <li>
                <Link
                  href="/rolunk"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Rólunk
                </Link>
              </li>
              <li>
                <Link
                  href="/gyik"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Gyakori kérdések
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-szabalyzat"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Cookie szabályzat
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-foreground">
              Jogi információk
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/cookie-szabalyzat"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Cookie szabályzat
                </Link>
              </li>
              <li>
                <Link
                  href="/adatvedelem"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Adatvédelmi nyilatkozat
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} HungaryMatchTickets. Minden jog
            fenntartva.
          </p>
        </div>
      </div>
    </footer>
  )
}
