import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.45, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}

export function Section({ id, title, intro, children }: { id: string; title: string; intro?: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <h2 className="max-w-3xl font-display text-3xl leading-tight md:text-5xl">{title}</h2>
          {intro && <p className="mt-5 max-w-xl text-mute">{intro}</p>}
        </Reveal>
        <div className="mt-10 md:mt-14">{children}</div>
      </div>
    </section>
  )
}

/** Renders text normally, or with a visible placeholder style when it starts with "[". */
export function T({ children }: { children: string }) {
  return children.startsWith('[') ? <span className="placeholder">{children}</span> : <>{children}</>
}

export function Placeholder({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div role="img" aria-label={`Placeholder: ${label}`}
      className={`flex items-center justify-center rounded-xl border border-dashed border-brass/50 bg-panel p-3 text-center text-sm text-brass ${className}`}>
      {label}
    </div>
  )
}

/** A real link when href is set; otherwise a visible [ADD ...] marker. */
export function ExtLink({ href, name, className = '' }: { href: string; name: string; className?: string }) {
  if (!href) return <span className="placeholder text-sm">[ADD {name.toUpperCase()} LINK]</span>
  const external = href.startsWith('http')
  return (
    <a href={href} className={`underline decoration-line underline-offset-4 hover:decoration-brass ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {name}
    </a>
  )
}

export function Tag({ children, tone = 'brass' }: { children: string; tone?: 'brass' | 'teal' }) {
  const color = children.startsWith('[') ? 'border-dashed border-brass/60 text-brass' : tone === 'teal' ? 'border-teal/40 text-teal' : 'border-brass/40 text-brass'
  return <span className={`rounded-full border px-3 py-1 text-xs font-medium ${color}`}>{children}</span>
}
