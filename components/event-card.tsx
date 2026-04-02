import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MapPin, AlertTriangle } from 'lucide-react'
import { type Event, formatPrice, formatDate } from '@/lib/events'

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Link href={`/esemenyek/${event.slug}`} className="group block">
      <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-200 flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
            {event.category}
          </span>
        </div>

        {/* Disclaimer stripe */}
        <div className="bg-disclaimer-bg border-y border-disclaimer-border px-4 py-3 flex items-start gap-2.5">
          <AlertTriangle size={18} className="text-disclaimer-text shrink-0 mt-0.5" />
          <div>
            <p className="text-disclaimer-text text-sm font-extrabold uppercase tracking-wide leading-snug">
              Másodlagos piaci árösszehasonlítás
            </p>
            <p className="text-disclaimer-text text-xs font-medium leading-snug mt-0.5">
              Az árak magasabbak lehetnek a névértéknél. Nem jegyértékesítés.
            </p>
          </div>
        </div>

        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-semibold text-foreground text-base leading-snug mb-3 line-clamp-2">
            {event.title}
          </h3>
          <div className="flex flex-col gap-1.5 mb-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Calendar size={14} />
              <span>{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin size={14} />
              <span>
                {event.venue}, {event.city}
              </span>
            </div>
          </div>

          <div className="border-t border-border pt-4 mt-auto">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1 font-medium">
              Árak összehasonlítása
            </p>
            <p className="text-2xl font-bold text-foreground">
              {formatPrice(event.priceFrom, event.currency)}
              <span className="font-bold text-foreground">
                {' – '}
                {formatPrice(event.priceTo, event.currency)}
              </span>
            </p>
            <p className="text-xs text-disclaimer-text font-semibold mt-2 bg-disclaimer-bg rounded px-2 py-1 inline-block">
              Az ár tájékoztató – a tényleges ár eltérhet
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
