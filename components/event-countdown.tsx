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

export function EventCountdown({ targetDate }: Props) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calcTimeLeft(targetDate))

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcTimeLeft(targetDate)), 1000)
    return () => clearInterval(id)
  }, [targetDate])

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div className="flex items-end gap-2">
      <div className="text-center">
        <p className="text-2xl md:text-3xl font-bold text-foreground leading-none">
          {timeLeft.days}
        </p>
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5">nap</p>
      </div>
      <span className="text-muted-foreground font-bold text-lg mb-3">:</span>
      <div className="text-center">
        <p className="text-2xl md:text-3xl font-bold text-foreground leading-none">
          {pad(timeLeft.hours)}
        </p>
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5">óra</p>
      </div>
      <span className="text-muted-foreground font-bold text-lg mb-3">:</span>
      <div className="text-center">
        <p className="text-2xl md:text-3xl font-bold text-foreground leading-none">
          {pad(timeLeft.minutes)}
        </p>
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5">perc</p>
      </div>
      <span className="text-muted-foreground font-bold text-lg mb-3">:</span>
      <div className="text-center">
        <p className="text-2xl md:text-3xl font-bold text-accent leading-none">
          {pad(timeLeft.seconds)}
        </p>
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5">mp</p>
      </div>
    </div>
  )
}
