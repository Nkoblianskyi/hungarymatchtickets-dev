'use client'

import { useState } from 'react'
import { AlertTriangle } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroDisclaimer } from '@/components/hero-disclaimer'
import { EventCard } from '@/components/event-card'
import { EVENTS } from '@/lib/events'

const CATEGORIES = [
  'Összes',
  ...Array.from(new Set(EVENTS.map((e) => e.category))).sort(),
]

export default function EsemenyekPage() {
  const [activeCategory, setActiveCategory] = useState('Összes')

  const filtered =
    activeCategory === 'Összes'
      ? EVENTS
      : EVENTS.filter((e) => e.category === activeCategory)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero with disclaimer */}
      <section>
        <HeroDisclaimer />
        <div className="bg-background py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Összes esemény
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Böngéssz Magyarország és Európa közelgő sportrendezvényei között.
              Hasonlítsd össze a jegyárakat és vásárolj közvetlenül a
              partnereinknél.
            </p>
          </div>
        </div>
      </section>

      {/* Category filter */}
      <div className="border-b border-border bg-background sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-muted'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Events grid */}
      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Disclaimer */}
          <div className="bg-disclaimer-bg border-2 border-disclaimer-border rounded-xl px-5 py-5 mb-10 flex items-start gap-4">
            <AlertTriangle size={24} className="text-disclaimer-text shrink-0 mt-0.5" />
            <p className="text-disclaimer-text font-semibold text-base leading-relaxed">
              <strong className="font-extrabold uppercase">
                Ez az oldal egy másodlagos piaci árösszehasonlító platform — NEM értékesít jegyeket.
              </strong>{' '}
              Az alábbi árak viszonteladói ajánlatokon alapulnak, és{' '}
              <strong>magasabbak lehetnek a névértéknél.</strong>{' '}
              Vásárlás előtt ellenőrizze a tényleges árat a partner weboldalán.
              Nem gyűjtünk fizetési adatokat és nem tárolunk személyes adatokat.
            </p>
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            {filtered.length} esemény található
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
