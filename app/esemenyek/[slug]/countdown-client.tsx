'use client'

import { useEffect, useState } from 'react'

interface Props {
  targetDate: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calcTimeLeft(targetDate: string): TimeLeft {
  const diff = new Date(targetDate).getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

const pad = (n: number) => String(n).padStart(2, '0')

export function CountdownClient({ targetDate }: Props) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calcTimeLeft(targetDate))

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcTimeLeft(targetDate)), 1000)
    return () => clearInterval(id)
  }, [targetDate])

  const units = [
    { label: 'nap', value: timeLeft.days, raw: true },
    { label: 'óra', value: timeLeft.hours, raw: false },
    { label: 'perc', value: timeLeft.minutes, raw: false },
    { label: 'mp', value: timeLeft.seconds, raw: false },
  ]

  return (
    <div className="flex items-end gap-1.5">
      {units.map(({ label, value, raw }, i) => (
        <div key={label} className="flex items-end gap-1.5">
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-bold text-foreground tabular-nums leading-none">
              {raw ? value : pad(value)}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5">
              {label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className="text-muted-foreground font-bold text-lg mb-4">:</span>
          )}
        </div>
      ))}
    </div>
  )
}
