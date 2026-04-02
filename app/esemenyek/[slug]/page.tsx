'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  Calendar,
  MapPin,
  ArrowLeft,
  ExternalLink,
  AlertTriangle,
  Clock,
  Users,
  TrendingDown,
  ChevronRight,
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { getEventBySlug, formatPrice, formatDate } from '@/lib/events'
import { EventCountdown } from '@/components/event-countdown'

export default function EventPage({ params }: { params: { slug: string } }) {
  const event = getEventBySlug(params.slug)
  if (!event) return null

  const sortedPartners = [...event.partners].sort((a, b) => a.price - b.price)
  const cheapest = sortedPartners[0]
  const mostExpensive = sortedPartners[sortedPartners.length - 1]
  const savings = mostExpensive.price - cheapest.price

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />

      {/* HERO */}
      <section className="relative w-full h-[70vh] min-h-[480px] overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
          priority
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent" />

        <div className="absolute top-6 left-0 w-full px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/esemenyek"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors bg-foreground/30 backdrop-blur-sm px-4 py-2 rounded-full"
            >
              <ArrowLeft size={15} />
              Vissza
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 md:px-8 pb-10">
            <span className="inline-block bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
              {event.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white text-balance leading-none mb-6">
              {event.title}
            </h1>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
                <Calendar size={15} className="text-accent" />
                {formatDate(event.date)}
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
                <MapPin size={15} className="text-accent" />
                {event.venue}, {event.city}
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
                <Users size={15} className="text-accent" />
                {sortedPartners.length} partner összehasonlítva
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DISCLAIMER BAND */}
      <div className="bg-disclaimer-bg border-y-2 border-disclaimer-border w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 md:py-6 flex items-start gap-4 md:gap-5">
          <AlertTriangle size={28} className="text-disclaimer-text shrink-0 mt-0.5" />
          <p className="text-disclaimer-text font-semibold text-base md:text-lg leading-relaxed">
            <strong className="font-extrabold uppercase">
              Ez az oldal egy másodlagos piaci árösszehasonlító platform — NEM értékesít jegyeket.
            </strong>{' '}
            Az alább látható árak viszonteladói ajánlatokon alapulnak, és{' '}
            <strong>magasabbak lehetnek a névértéknél.</strong>{' '}
            A tényleges vásárlás kizárólag a partner weboldalán lehetséges. Nem gyűjtünk
            fizetési adatokat és nem tárolunk személyes adatokat.
          </p>
        </div>
      </div>

      <main className="flex-1">
        {/* STATS ROW */}
        <section className="border-b border-border bg-card">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
              <div className="py-6 px-6 md:px-8">
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">
                  Legjobb ár
                </p>
                <p className="text-2xl md:text-3xl font-bold text-foreground">
                  {formatPrice(cheapest.price, cheapest.currency)}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">{cheapest.name}</p>
              </div>
              <div className="py-6 px-6 md:px-8">
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">
                  Árak ettől
                </p>
                <p className="text-2xl md:text-3xl font-bold text-foreground">
                  {formatPrice(event.priceFrom, event.currency)}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  — {formatPrice(event.priceTo, event.currency)}
                </p>
              </div>
              <div className="py-6 px-6 md:px-8">
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1 flex items-center gap-1">
                  <TrendingDown size={12} />
                  Megtakarítás
                </p>
                <p className="text-2xl md:text-3xl font-bold text-accent">
                  {savings > 0 ? formatPrice(savings, event.currency) : '–'}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">legjobb vs. legdrágább</p>
              </div>
              <div className="py-6 px-6 md:px-8">
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1 flex items-center gap-1">
                  <Clock size={12} />
                  Visszaszámlálás
                </p>
                <EventCountdown targetDate={event.date} />
              </div>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* LEFT */}
            <div className="lg:col-span-3">
              <div className="mb-12">
                <h2 className="text-xs uppercase tracking-widest text-accent font-bold mb-3">
                  Az eseményről
                </h2>
                <p className="text-foreground text-lg leading-relaxed">{event.description}</p>
              </div>

              <div>
                <div className="flex items-end justify-between mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Árak összehasonlítása
                  </h2>
                  <span className="text-xs text-muted-foreground">{sortedPartners.length} forrás</span>
                </div>

                <div className="space-y-3">
                  {sortedPartners.map((partner, idx) => {
                    const range = mostExpensive.price - cheapest.price || 1
                    const pct = Math.round(((partner.price - cheapest.price) / range) * 100)
                    return (
                      <div
                        key={partner.name}
                        className={`rounded-xl overflow-hidden border transition-shadow hover:shadow-md ${
                          idx === 0 ? 'border-accent/40 bg-accent/5' : 'border-border bg-card'
                        }`}
                      >
                        <div
                          className={`h-1 ${idx === 0 ? 'bg-accent' : 'bg-muted'}`}
                          style={{ width: `${Math.max(10, 100 - pct)}%` }}
                        />
                        <div className="flex items-center justify-between gap-4 px-5 py-4">
                          <div className="flex items-center gap-3 min-w-0">
                            {idx === 0 && (
                              <span className="shrink-0 bg-accent text-accent-foreground text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                                Legjobb
                              </span>
                            )}
                            <div>
                              <p className="font-semibold text-foreground text-base leading-none">
                                {partner.name}
                              </p>
                              {idx === 0 && (
                                <p className="text-xs text-accent font-medium mt-0.5">
                                  Legalacsonyabb ár
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-3 shrink-0">
                            <p className="text-xl md:text-2xl font-bold text-foreground">
                              {formatPrice(partner.price, partner.currency)}
                            </p>
                            <a
                              href={partner.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-bold px-4 py-2 rounded-lg hover:opacity-80 transition-opacity whitespace-nowrap"
                            >
                              Megnézem
                              <ExternalLink size={12} />
                            </a>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-5 flex items-start gap-3 bg-disclaimer-bg border border-disclaimer-border rounded-xl px-5 py-4">
                  <AlertTriangle size={16} className="text-disclaimer-text shrink-0 mt-0.5" />
                  <p className="text-disclaimer-text text-sm font-semibold leading-relaxed">
                    Ez az oldal egy <strong>másodlagos piaci</strong> árösszehasonlító platform.
                    Az árak viszonteladói ajánlatokon alapulnak és{' '}
                    <strong>magasabbak lehetnek a névértéknél.</strong>{' '}
                    A HungaryMatchTickets nem értékesít jegyeket és nem vállal felelősséget az árak pontosságáért.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <aside className="lg:col-span-2">
              <div className="sticky top-24 space-y-4">
                <div className="bg-card border-2 border-accent/20 rounded-2xl overflow-hidden">
                  <div className="bg-accent px-6 py-3">
                    <p className="text-accent-foreground text-xs font-extrabold uppercase tracking-widest">
                      Legjobb ajánlat
                    </p>
                  </div>
                  <div className="px-6 py-5">
                    <p className="text-4xl font-extrabold text-foreground mb-1">
                      {formatPrice(cheapest.price, cheapest.currency)}
                    </p>
                    <p className="text-sm text-muted-foreground mb-5">
                      a <strong className="text-foreground">{cheapest.name}</strong> platformon
                    </p>
                    <a
                      href={cheapest.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full bg-primary text-primary-foreground font-bold text-sm px-5 py-3.5 rounded-xl hover:opacity-85 transition-opacity group"
                    >
                      Ajánlat megtekintése
                      <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                    </a>
                    <div className="mt-4 bg-disclaimer-bg border border-disclaimer-border rounded-lg px-4 py-3 flex items-start gap-2">
                      <AlertTriangle size={13} className="text-disclaimer-text shrink-0 mt-0.5" />
                      <p className="text-disclaimer-text text-xs font-semibold leading-snug">
                        Másodlagos piaci ár — magasabb lehet a névértéknél. Nem jegyértékesítés.
                      </p>
                    </div>
                    <p className="text-[11px] text-center text-muted-foreground mt-3 leading-relaxed">
                      Kattintáskor a partner oldalára irányítjuk. Nem tárolunk adatokat.
                    </p>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-2xl px-6 py-5 space-y-4">
                  <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-bold">
                    Esemény adatok
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <Calendar size={15} className="text-accent mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">{formatDate(event.date)}</p>
                        <p className="text-muted-foreground text-xs">Dátum</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin size={15} className="text-accent mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">{event.venue}</p>
                        <p className="text-muted-foreground text-xs">{event.city}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingDown size={15} className="text-accent mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">
                          {formatPrice(event.priceFrom, event.currency)} –{' '}
                          {formatPrice(event.priceTo, event.currency)}
                        </p>
                        <p className="text-muted-foreground text-xs">Ártartomány (tájékoztató)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
