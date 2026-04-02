import { AlertTriangle } from 'lucide-react'

export function HeroDisclaimer() {
  return (
    <div className="w-full bg-disclaimer-bg border-b-2 border-disclaimer-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 md:py-6 flex items-start gap-4 md:gap-5">
        <AlertTriangle className="shrink-0 text-disclaimer-text mt-0.5" size={28} />
        <p className="text-disclaimer-text font-semibold text-base md:text-lg leading-relaxed">
          <strong className="font-extrabold uppercase">
            Ez az oldal egy másodlagos piaci árösszehasonlító platform — NEM értékesít jegyeket.
          </strong>{' '}
          Az itt feltüntetett jegyárak viszonteladói ajánlatokon alapulnak, és{' '}
          <strong>magasabbak lehetnek a névértéknél.</strong> Nem gyűjtünk fizetési
          adatokat és nem tárolunk személyes adatokat. Minden vásárlás közvetlenül
          a partner weboldalán történik.
        </p>
      </div>
    </div>
  )
}
