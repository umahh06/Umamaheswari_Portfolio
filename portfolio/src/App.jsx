import { useEffect, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { ArrowUpRight, Award, BadgeCheck, BrainCircuit, Code2, Download, FileCheck2, Github, Linkedin, Mail, MapPin, Menu, Moon, Send, Sparkles, Sun, TestTube2, X } from 'lucide-react'
import { achievements, about, certs, experience, profile, projects, stack, stats } from './data.js'

const nav = ['About', 'Stack', 'Experience', 'Projects', 'Contact']

function Reveal({ children, className = '', delay = 0 }) {
  const reducedMotion = useReducedMotion()
  return <motion.div className={className} initial={reducedMotion ? false : { opacity: 0, y: 20 }} whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.14 }} transition={{ duration: 0.48, delay }}>{children}</motion.div>
}

function Section({ id, eyebrow, title, children, className = '' }) {
  return <section id={id} className={`section ${className}`}><Reveal className="shell">{eyebrow && <p className="eyebrow">{eyebrow}</p>}{title && <h2>{title}</h2>}{children}</Reveal></section>
}

function CustomCursor() {
  const reducedMotion = useReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const [interactive, setInteractive] = useState(false)
  const [pressed, setPressed] = useState(false)
  const pointerX = useMotionValue(-40)
  const pointerY = useMotionValue(-40)
  const ringX = useSpring(pointerX, { stiffness: 360, damping: 28, mass: 0.35 })
  const ringY = useSpring(pointerY, { stiffness: 360, damping: 28, mass: 0.35 })

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)')
    const update = () => setEnabled(finePointer.matches && !reducedMotion)
    update()
    finePointer.addEventListener('change', update)
    return () => finePointer.removeEventListener('change', update)
  }, [reducedMotion])

  useEffect(() => {
    if (!enabled) return undefined
    const move = event => {
      pointerX.set(event.clientX)
      pointerY.set(event.clientY)
      setInteractive(Boolean(event.target.closest('a, button, input, textarea, select, label')))
    }
    const down = () => setPressed(true)
    const up = () => setPressed(false)
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerdown', down)
    window.addEventListener('pointerup', up)
    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerdown', down)
      window.removeEventListener('pointerup', up)
    }
  }, [enabled, pointerX, pointerY])

  if (!enabled) return null
  return <><motion.div className={`cursor-ring ${interactive ? 'is-interactive' : ''} ${pressed ? 'is-pressed' : ''}`} style={{ x: ringX, y: ringY }} /><motion.div className={`cursor-core ${pressed ? 'is-pressed' : ''}`} style={{ x: pointerX, y: pointerY }} /></>
}

function Header({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return <header className="site-header">
    <div className="shell nav-wrap">
      <a className="wordmark" href="#top">UA<span>.</span></a>
      <nav className="desktop-nav" aria-label="Main navigation">{nav.map(item => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</nav>
      <div className="nav-actions">
        <button className="icon-button" onClick={() => setDark(!dark)} aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`} title={`Switch to ${dark ? 'light' : 'dark'} mode`}>{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
        <button className="icon-button mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
      </div>
    </div>
    {menuOpen && <nav className="mobile-nav shell" aria-label="Mobile navigation">{nav.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}</nav>}
  </header>
}

function Hero() {
  const reducedMotion = useReducedMotion()
  const rise = delay => reducedMotion ? {} : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.55, delay } }
  return <section id="top" className="hero">
    <div className="shell hero-grid">
      <div className="hero-copy">
        <motion.h1 {...rise(0)}>Umamaheswari<br />A<span>.</span></motion.h1>
        <motion.p {...rise(0.08)} className="hero-role">AI builder, full-stack developer, and curious systems thinker.</motion.p>
        <motion.p {...rise(0.16)} className="hero-intro">I turn useful ideas into thoughtful software, from intelligent farm alerts to test automation and data-driven web experiences.</motion.p>
        <motion.div {...rise(0.24)} className="hero-actions"><a className="button button-primary" href="#projects">Explore projects <ArrowUpRight size={17} /></a><a className="button button-quiet" href={profile.resume} download><Download size={16} /> Resume</a></motion.div>
      </div>
      <motion.figure {...rise(0.15)} className="portrait-frame">
        <div className="portrait-grid" aria-hidden="true" />
        <div className="portrait-accent" aria-hidden="true" />
        <div className="portrait-mark portrait-mark-top" aria-hidden="true">AI</div>
        <img src="/umamaheswariA.jpeg" alt="Umamaheswari A" />
        <div className="portrait-mark portrait-mark-bottom" aria-hidden="true">BUILD<br />WITH<br />PURPOSE</div>
        <figcaption><Sparkles size={15} /> Building for people, data, and possibility.</figcaption>
      </motion.figure>
    </div>
    <div className="hero-strip" aria-label="Key areas of work"><span>AI engineering</span><span>Full-stack systems</span><span>Quality automation</span><span>Data stories</span></div>
  </section>
}

function ProjectVisual({ name }) {
  if (name === 'SnapSpend AI') return <div className="project-visual visual-finance" aria-label="Visual summary of SnapSpend AI"><div className="visual-topline"><BrainCircuit size={20} /><span>NLP money assistant</span></div><div className="visual-balance"><span>THIS MONTH</span><strong>Rs. 12,480</strong></div><div className="visual-bars" aria-hidden="true"><i /><i /><i /><i /><i /></div><div className="visual-status">Expense categorized <b>Food</b></div></div>
  if (name === 'Facial Lie Detection') return <div className="project-visual visual-farm" aria-label="Visual summary of facial lie detection"><div className="visual-topline"><BrainCircuit size={20} /><span>Computer vision signal</span></div><div className="farm-flow"><b>CAMERA</b><i /><b>MODEL</b><i /><b>SIGNAL</b></div><div className="farm-alert"><span>Live facial analysis</span><strong>AI</strong></div><div className="farm-field" aria-hidden="true"><i /><i /><i /><i /></div></div>
  if (name === 'Intelligent Student Performance Prediction') return <div className="project-visual visual-student" aria-label="Visual summary of student performance prediction"><div className="visual-topline"><BrainCircuit size={20} /><span>Early insight model</span></div><div className="student-grid"><span>ATTENDANCE</span><span>ASSESSMENT</span><span>ENGAGEMENT</span></div><div className="student-result"><i aria-hidden="true" /><div><span>MODEL SIGNAL</span><strong>Support early</strong></div></div></div>
  return <div className="project-visual visual-testing" aria-label="Visual summary of test automation framework"><div className="visual-topline"><TestTube2 size={20} /><span>Regression suite</span></div><div className="test-code"><span>suite</span><b>OrangeHRM</b><span>cases</span><b>14 passed</b></div><div className="test-runs"><i /><i /><i /><i /><i /><i /></div><div className="visual-status">Surefire report <b>Ready</b></div></div>
}

function Project({ project, index }) {
  const reducedMotion = useReducedMotion()
  return <motion.a className={`project-row project-row-${index % 2}`} href={project.github} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} on GitHub`} initial={reducedMotion ? false : { opacity: 0, y: 18 }} whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: 0.42, delay: index * 0.06 }}>
    <div className="project-copy">
      <div className="project-heading"><span className="project-number">0{index + 1}</span><p>{project.tag}</p></div>
      <h3>{project.name}</h3><p className="project-summary">{project.solution}</p>
      <dl className="project-notes"><div><dt>Challenge</dt><dd>{project.challenges}</dd></div><div><dt>Starting point</dt><dd>{project.problem}</dd></div></dl>
      <div className="tech-list">{project.tech.map(item => <span key={item}>{item}</span>)}</div>
      <span className="text-link">Open repository <ArrowUpRight size={16} /></span>
    </div>
    <ProjectVisual name={project.name} />
  </motion.a>
}

function Experience() {
  const reducedMotion = useReducedMotion()
  return <ol className="timeline">{experience.map((item, index) => <motion.li key={item.org} initial={reducedMotion ? false : { opacity: 0, x: -16 }} whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: index * 0.08 }}><div className="timeline-marker">0{index + 1}</div><div><p className="timeline-date">{item.when}</p><h3>{item.role}</h3><p className="timeline-org">{item.org}</p>{item.certificateUrl ? <a className="internship-certificate" href={item.certificateUrl} target="_blank" rel="noreferrer"><FileCheck2 size={15} /> View internship certificate <ArrowUpRight size={14} /></a> : <span className="internship-certificate internship-certificate-pending"><FileCheck2 size={15} /> Certificate link ready to add</span>}</div><ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul></motion.li>)}</ol>
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const update = key => event => setForm({ ...form, [key]: event.target.value })
  const send = event => { event.preventDefault(); const body = `${form.message}\n\nFrom: ${form.name} (${form.email})`; window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio enquiry from ${form.name}`)}&body=${encodeURIComponent(body)}` }
  return <div className="contact-grid">
    <div className="contact-copy"><p className="eyebrow">Open to opportunities</p><h2>Lets make something useful.</h2><p>For an AI, full-stack, data, or software quality conversation, my inbox is the best place to start.</p><div className="contact-links"><a href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email}</a><p><MapPin size={18} /> {profile.location}</p><a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub profile</a></div></div>
    <form className="contact-form" onSubmit={send}><label>Name<input required value={form.name} onChange={update('name')} /></label><label>Email<input required type="email" value={form.email} onChange={update('email')} /></label><label>Message<textarea required rows="5" value={form.message} onChange={update('message')} /></label><button className="button button-primary" type="submit">Send message <Send size={16} /></button></form>
  </div>
}

export default function App() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  useEffect(() => { document.documentElement.classList.toggle('dark', dark); try { localStorage.theme = dark ? 'dark' : 'light' } catch {} }, [dark])
  return <div className="page-shell">
    <CustomCursor />
    <Header dark={dark} setDark={setDark} />
    <main>
      <Hero />
      <section className="stat-band"><div className="shell stat-grid">{stats.map(([number, label]) => <div key={label}><strong>{number}</strong><span>{label}</span></div>)}</div></section>
      <Section id="about" eyebrow="A little context" title="Grounded in practical problem-solving."><div className="about-grid"><div className="about-copy">{about.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div><aside className="about-note"><Code2 size={24} /><p>My favorite work lives where a messy real-world problem meets a clear, usable interface.</p></aside></div></Section>
      <Section id="stack" eyebrow="Working toolkit" title="Tools I reach for."><div className="stack-grid">{Object.entries(stack).map(([group, items]) => <div key={group} className="stack-group"><h3>{group}</h3><div>{items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div></Section>
      <Section id="experience" eyebrow="In practice" title="Experience that shipped."><Experience /></Section>
      <Section id="projects" eyebrow="Selected work" title="Four projects, four kinds of thinking." className="projects-section"><div className="projects-list">{projects.map((project, index) => <Project key={project.name} project={project} index={index} />)}</div></Section>
      <Section id="highlights" eyebrow="Small wins, big curiosity" title="Recognition and credentials."><div className="recognition-layout"><div className="achievement-wall"><div className="recognition-label"><Award size={18} /><span>Achievement highlights</span></div>{achievements.map(([title, description], index) => <article className="achievement-tile" key={title}><span className="achievement-index">0{index + 1}</span><div><strong>{title}</strong><p>{description}</p></div><BadgeCheck size={21} /></article>)}</div><div className="credential-zone"><p className="recognition-label"><BadgeCheck size={18} /><span>Verified learning</span></p>{certs.map(cert => <article className="credential-pass" key={cert.title}><div className="credential-seal"><span>LIVE</span><b>JAVA</b></div><div className="credential-copy"><span>Certificate of completion</span><h3>{cert.title}</h3><p>{cert.issuer}</p>{cert.url ? <a className="certificate-link" href={cert.url} target="_blank" rel="noreferrer">View certificate <ArrowUpRight size={16} /></a> : <span className="certificate-pending">Verification link pending</span>}</div></article>)}</div></div></Section>
      <section id="connect" className="connect-band"><div className="shell connect-inner"><div><p className="eyebrow">Find me online</p><h2>Lets stay connected.</h2><p>Explore my work, connect professionally, or send me a note.</p></div><div className="social-links"><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={22} /><span>LinkedIn</span><ArrowUpRight size={18} /></a><a href={profile.github} target="_blank" rel="noreferrer"><Github size={22} /><span>GitHub</span><ArrowUpRight size={18} /></a><a href={`mailto:${profile.email}`}><Mail size={22} /><span>Email</span><ArrowUpRight size={18} /></a></div></div></section>
      <Section id="contact"><Contact /></Section>
    </main>
    <footer><div className="shell"><span>Umamaheswari A</span><span>AI and full-stack portfolio</span><span>Copyright {new Date().getFullYear()}</span></div></footer>
  </div>
}
