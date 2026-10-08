import { useState } from 'react'
import { NAV, SITE } from '../data'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <nav aria-label="Main" className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="font-display text-lg" onClick={close}>{SITE.name}</a>
        <ul className="hidden items-center gap-8 text-sm text-mute md:flex">
          {NAV.map((n) => <li key={n.id}><a className="hover:text-ivory" href={`#${n.id}`}>{n.label}</a></li>)}
          <li><a className="btn-primary !py-2" href="#contact">Contact me</a></li>
        </ul>
        <button className="md:hidden rounded-md border border-line px-3 py-1.5 text-sm" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      {open && (
        <ul id="mobile-menu" className="border-t border-line bg-ink px-5 pb-5 md:hidden">
          {[...NAV, { id: 'contact', label: 'Contact me' }].map((n) => (
            <li key={n.id}><a className="block py-3 text-lg" href={`#${n.id}`} onClick={close}>{n.label}</a></li>
          ))}
        </ul>
      )}
    </nav>
  )
}
