import { motion } from 'framer-motion'
import { SITE, WORLDS, HISYNC, PROJECTS, MUSIC, TIMELINE, SERVICES } from './data'
import { Reveal, Section, Placeholder, ExtLink, Tag, T } from './components/ui'
import Waveform from './components/Waveform'

const rise = (delay: number) => ({ initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay, ease: 'easeOut' as const } })

export function Hero() {
  return (
    <header id="top" className="relative overflow-hidden pt-32 pb-16 md:pt-44 md:pb-24">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <motion.p {...rise(0.05)} className="text-mute">{SITE.name}, from Vietnam</motion.p>
        <motion.h1 {...rise(0.15)} className="mt-4 max-w-4xl font-display text-5xl leading-[1.02] tracking-tight md:text-8xl">
          I play keys.<br />I build software.
        </motion.h1>
        <motion.p {...rise(0.3)} className="mt-6 max-w-xl text-lg text-mute">
          I'm a musician and software developer. I work across live performance, band arrangement, and Android and backend development.
        </motion.p>
        <motion.div {...rise(0.4)} className="mt-8 flex flex-wrap gap-3">
          <a href="#work" className="btn-primary">Explore my work</a>
          <a href="#contact" className="btn-ghost">Contact me</a>
        </motion.div>
        <motion.div {...rise(0.5)} className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <ExtLink href={SITE.links.github} name="GitHub" />
          <ExtLink href={SITE.links.linkedin} name="LinkedIn" />
          <ExtLink href={SITE.links.youtube} name="YouTube" />
        </motion.div>
        <motion.div {...rise(0.6)} className="mt-14">
          <Waveform />
          <div className="mt-3 flex justify-between text-sm"><span className="text-brass">Music</span><span className="text-teal">Code</span></div>
        </motion.div>
        <motion.dl {...rise(0.7)} className="mt-10 grid gap-6 border-t border-line pt-6 sm:grid-cols-2">
          <div><dt className="text-sm text-brass">Performed</dt><dd className="mt-1"><a href="#music" className="hover:underline">At the Hanoi Opera House</a></dd></div>
          <div><dt className="text-sm text-teal">Built</dt><dd className="mt-1"><a href="#hisync" className="hover:underline">HiSync, an Android and Spring Boot app for bands</a></dd></div>
        </motion.dl>
      </div>
    </header>
  )
}

export function About() {
  return (
    <Section id="about" title="I enjoy turning ideas into something people can actually use, hear, or experience.">
      <Reveal className="max-w-xl space-y-5 text-mute">
        <p>I play keyboard and piano, arrange songs for bands, and help musicians get ready to perform.</p>
        <p>I also write software, mostly Java, Spring Boot and Android. HiSync is where the two meet: a tool for bands, built by someone who has coordinated band rehearsals.</p>
      </Reveal>
    </Section>
  )
}

export function TwoWorlds() {
  return (
    <Section id="work" title="Two ways of working, one way of thinking." intro="Both start with understanding the people who will use the result.">
      <Reveal className="grid gap-6 md:grid-cols-[1fr_auto_1fr] md:gap-0">
        <div className="rounded-2xl border border-brass/30 bg-panel p-7 md:rounded-r-none">
          <h3 className="font-display text-2xl text-brass">Music</h3>
          <ul className="mt-5 space-y-2">{WORLDS.music.map((m) => <li key={m}>{m}</li>)}</ul>
        </div>
        <div className="hidden w-16 items-center md:flex" aria-hidden="true"><div className="h-px w-full bg-gradient-to-r from-brass to-teal" /></div>
        <div className="rounded-2xl border border-teal/30 bg-panel p-7 md:rounded-l-none">
          <h3 className="font-display text-2xl text-teal">Technology</h3>
          <ul className="mt-5 space-y-2">{WORLDS.tech.map((m) => <li key={m}>{m}</li>)}</ul>
        </div>
      </Reveal>
      <p className="mt-6 text-sm text-mute">Where they meet: <a className="underline underline-offset-4 hover:text-ivory" href="#hisync">HiSync</a>.</p>
    </Section>
  )
}

export function HiSync() {
  return (
    <section id="hisync" className="scroll-mt-16 py-6 md:py-10">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="rounded-3xl border border-line bg-panel p-6 md:p-12">
          <p className="text-sm text-mute">Featured project: music and software</p>
          <h2 className="mt-2 max-w-3xl font-display text-3xl md:text-5xl">{HISYNC.title}</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div><h3 className="text-sm text-brass">The problem</h3><p className="mt-2 text-mute">{HISYNC.problem}</p></div>
            <div><h3 className="text-sm text-teal">The solution</h3><p className="mt-2 text-mute">{HISYNC.solution}</p></div>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {HISYNC.screenshots.map((s) => <Placeholder key={s} label={s} className="aspect-[9/16] max-h-80 w-full" />)}
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="font-display text-xl">Key features</h3>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">{HISYNC.features.map((f) => <li key={f} className="border-l border-line pl-3">{f}</li>)}</ul>
            </div>
            <div>
              <h3 className="font-display text-xl">Tech stack</h3>
              <div className="mt-4 flex flex-wrap gap-2">{HISYNC.stack.map((s) => <Tag key={s} tone="teal">{s}</Tag>)}</div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm">
                <ExtLink href={HISYNC.github} name="GitHub" /><ExtLink href={HISYNC.demo} name="Demo" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function Projects() {
  return (
    <Section id="projects" title="Other technology projects">
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p) => (
          <Reveal key={p.title} className="flex flex-col rounded-2xl border border-line bg-panel p-6">
            <Placeholder label={p.image} className="aspect-video w-full" />
            <h3 className="mt-5 font-display text-2xl"><T>{p.title}</T></h3>
            <p className="mt-2 text-mute"><T>{p.description}</T></p>
            <div className="mt-4 flex flex-wrap gap-2">{p.stack.map((s) => <Tag key={s} tone="teal">{s}</Tag>)}</div>
            <div className="mt-6 flex gap-6 text-sm"><ExtLink href={p.github} name="GitHub" /><ExtLink href={p.demo} name="Demo" /></div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function Music() {
  return (
    <Section id="music" title="Music" intro="Keyboard and piano, on stage and in the rehearsal room.">
      <Reveal className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <div>
          <ul className="space-y-2">{MUSIC.skills.map((s) => <li key={s} className="border-l border-brass/50 pl-3">{s}</li>)}</ul>
          <p className="mt-8 text-lg">{MUSIC.highlight} <T>{MUSIC.highlightNote}</T></p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {MUSIC.media.map((m) => (
            <div key={m.label}>
              <Placeholder label={m.label} className="aspect-video w-full" />
              <p className="mt-2 text-sm text-mute">{m.kind}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}

export function Timeline() {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative max-w-3xl border-l border-line">
        {TIMELINE.map((t, i) => (
          <Reveal key={t.title} className="relative pb-10 pl-8 last:pb-0">
            <span aria-hidden="true" className={`absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full ${i === 2 ? 'bg-teal' : 'bg-brass'}`} />
            <p className="text-sm text-mute"><T>{t.when}</T></p>
            <h3 className="font-display text-2xl">{t.title}</h3>
            <p className="text-mute">{t.role}</p>
            <ul className="mt-3 space-y-1">{t.points.map((p) => <li key={p}><T>{p}</T></li>)}</ul>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <h2 className="font-display text-4xl md:text-7xl">Have a project in mind?</h2>
          <p className="mt-6 max-w-xl text-mute">You can contact me for:</p>
          <ul className="mt-4 grid max-w-xl gap-2 sm:grid-cols-2">{SERVICES.map((s) => <li key={s} className="border-l border-line pl-3">{s}</li>)}</ul>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
            {SITE.email ? <a className="btn-primary" href={`mailto:${SITE.email}`}>{SITE.email}</a> : <span className="placeholder">[ADD EMAIL]</span>}
            <ExtLink href={SITE.links.fiverr} name="Fiverr" />
            <ExtLink href={SITE.links.github} name="GitHub" />
            <ExtLink href={SITE.links.linkedin} name="LinkedIn" />
          </div>
        </Reveal>
      </div>
      <p className="mx-auto mt-20 max-w-6xl px-5 text-sm text-mute md:px-8">{SITE.name}</p>
    </section>
  )
}
