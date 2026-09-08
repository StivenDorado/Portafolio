import { useEffect, useState } from 'react'
import {
  ArrowUpRight, ChevronDown, Code2, Database, ExternalLink,
  Mail, Menu, Server, Sparkles, Terminal, X,
} from 'lucide-react'

const sections = [
  ['inicio', 'Inicio'], ['sobre-mi', 'Sobre mí'], ['perfil', 'Habilidades'],
  ['proyectos', 'Proyectos'], ['contacto', 'Contacto'],
]

const skills = [
  { title: 'Frontend', icon: Code2, items: ['React', 'Next.js', 'Flutter', 'Tailwind CSS', 'Bootstrap', 'HTML', 'CSS', 'JavaScript', 'TypeScript'] },
  { title: 'Backend', icon: Server, items: ['Node.js', 'Express.js', 'Python', 'C++'] },
  { title: 'Bases de datos', icon: Database, items: ['SQL', 'MySQL', 'MongoDB (NoSQL)'] },
  { title: 'Infraestructura', icon: Terminal, items: ['Vercel', 'Linux'] },
]

const projects = [
  { n: '01', title: 'ETL en Sucrual S.A.', tag: 'Automatización', text: 'Automatización de procesos en SAP mediante un ETL desarrollado con Python, SQL y MySQL.', color: 'lime', metric: '5 min', note: 'tiempo de ejecución', story: 'Durante mis prácticas profesionales participé en el desarrollo de un proceso ETL para automatizar un flujo repetitivo de información en SAP. La solución usó Python, SQL y MySQL, con un activador cada ocho horas. El proceso pasó de ejecutarse manualmente cuatro veces al día y tardar entre 10 y 15 minutos, a ejecutarse en aproximadamente 5 minutos sin depender de una persona.', stack: 'Python · SQL · MySQL · SAP' },
  { n: '02', title: 'Wasi · Formación SENA', tag: 'Producto digital', text: 'Proyecto desarrollado durante la formación en el SENA, pendiente de documentar como caso de estudio completo.', color: 'blue', metric: 'SENA', note: 'formación aplicada', story: 'Wasi fue un proyecto desarrollado durante mi formación en el SENA. En él puse en práctica el análisis de un problema, la construcción de una solución tecnológica y el trabajo de desarrollo necesario para convertir una idea en un producto funcional. Próximamente ampliaré esta historia con el problema, mi rol, la arquitectura y los resultados.', stack: 'Proyecto académico · Desarrollo de software' },
  { n: '03', title: 'Carta digital para restaurantes', tag: '3D · Realidad aumentada', text: 'Sistema para crear y gestionar una carta digital con visualización de platos mediante 3D y realidad aumentada.', color: 'coral', metric: 'Vercel', note: 'despliegue activo', story: 'Este sistema está orientado a restaurantes que necesitan crear y gestionar una carta digital, actualizando productos y precios con facilidad. También incorpora una experiencia de visualización de platos mediante tecnología 3D y realidad aumentada a través de la cámara. El proyecto fue desplegado en Vercel.', stack: 'Vercel · 3D · Realidad aumentada · Carta digital' },
]

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>
}

function App() {
  const [active, setActive] = useState('inicio')
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActive(visible.target.id)
    }, { rootMargin: '-30% 0px -60% 0px', threshold: [0.08, 0.2, 0.5] })
    sections.forEach(([id]) => { const el = document.getElementById(id); if (el) observer.observe(el) })
    const reveal = new IntersectionObserver((entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('is-visible')), { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach(el => reveal.observe(el))
    return () => { observer.disconnect(); reveal.disconnect() }
  }, [])

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && setSelectedProject(null)
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false) }

  return <div className="app-shell">
    <div className="grain" />
    <header className="topbar">
      <button className="brand" onClick={() => go('inicio')}><span className="brand-mark">JS</span><span>Jhojan Salas</span></button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>{sections.map(([id, label]) => <button key={id} className={active === id ? 'active' : ''} onClick={() => go(id)}>{label}</button>)}</nav>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">{menuOpen ? <X /> : <Menu />}</button>
    </header>

    <main>
      <section id="inicio" className="hero section-pad">
        <div className="hero-copy">
          <Reveal><p className="eyebrow"><span className="status-dot" /> Portafolio profesional · 2025</p></Reveal>
          <Reveal><h1>Construyo software<br /><em>con propósito.</em></h1></Reveal>
          <Reveal><p className="hero-lead">Desarrollador de software orientado a crear soluciones tecnológicas que resuelven problemas reales.</p></Reveal>
          <Reveal className="hero-actions"><button className="primary-button" onClick={() => go('proyectos')}>Explorar proyectos <ArrowUpRight size={17} /></button><button className="text-button" onClick={() => go('sobre-mi')}>Conóceme <ChevronDown size={16} /></button></Reveal>
        </div>
        <Reveal className="hero-art"><div className="art-ring ring-one" /><div className="art-ring ring-two" /><div className="art-label label-top">FULL STACK<br /><span>DEVELOPER</span></div><img src="./assets/sin-fondo.png" alt="Ilustración de Jhojan trabajando en su portátil" /><div className="art-label label-bottom">01 — INTRO</div></Reveal>
        <div className="scroll-cue"><span>Scroll para explorar</span><div className="scroll-line" /></div>
      </section>

      <section id="sobre-mi" className="section-pad about-section section-dark">
        <div className="section-kicker"><span>02</span><span>Sobre mí</span></div>
        <div className="about-grid"><Reveal className="about-photo"><div className="photo-frame"><img src="./assets/perfil.jpg" alt="Retrato en blanco y negro de Jhojan Estiven Salas Dorado" /><span className="photo-caption">JHOJAN ESTIVEN<br />SALAS DORADO</span></div></Reveal><Reveal className="about-copy"><h2>La tecnología tiene sentido cuando <em>mejora algo.</em></h2><p>Soy un desarrollador de software apasionado por crear soluciones tecnológicas que respondan a necesidades reales. Más allá de desarrollar funcionalidades, me interesa comprender el problema que existe detrás de cada proyecto y utilizar la tecnología para simplificar procesos, optimizar recursos y hacer más fácil la vida de las personas.</p><p>Lo que me atrajo de la programación fue precisamente esa posibilidad: transformar un problema de la vida real en una solución funcional mediante la tecnología.</p><p>He tenido la oportunidad de liderar proyectos que actualmente se encuentran en funcionamiento. Eso me ha enseñado que un buen software no depende únicamente de que el código funcione: también importan su calidad, limpieza, mantenibilidad y capacidad de evolucionar.</p></Reveal></div>
      </section>

      <section id="perfil" className="section-pad section-dark"><div className="section-kicker"><span>03</span><span>Habilidades</span></div><Reveal className="section-intro"><h2>Herramientas para <em>hacerlo posible.</em></h2><p>Un stack en construcción constante, organizado por áreas y conectado con una visión de producto.</p></Reveal><div className="skills-grid">{skills.map(({ title, icon: Icon, items }) => <Reveal key={title} className="skill-card"><Icon className="skill-icon" size={24} /><h3>{title}</h3><div className="skill-tags">{items.map(item => <span key={item}>{item}</span>)}</div></Reveal>)}</div><Reveal className="growth-row"><Sparkles size={17} /><span>Áreas de crecimiento</span><p>Docker · Arquitectura de software · DevOps · CI/CD · Inteligencia artificial · Liderazgo técnico</p></Reveal></section>

      <section id="proyectos" className="section-pad section-dark"><div className="section-kicker"><span>04</span><span>Proyectos destacados</span></div><Reveal className="section-intro projects-intro"><h2>Ideas convertidas en <em>producto.</em></h2><p>Cada proyecto nace de una pregunta: ¿cómo puede la tecnología hacer que algo funcione mejor?</p></Reveal><div className="projects-grid">{projects.map(project => <Reveal key={project.n} className={`project-card ${project.color}`}><button className="project-hit-area" onClick={() => setSelectedProject(project)} aria-label={`Ver experiencia de ${project.title}`}><div className="project-top"><span>{project.n}</span><ArrowUpRight size={19} /></div><p className="project-tag">{project.tag}</p><h3>{project.title}</h3><p>{project.text}</p><div className="project-footer"><strong>{project.metric}</strong><span>{project.note}</span></div><span className="project-cta">Clic para conocer la experiencia</span></button></Reveal>)}</div></section>

      <section id="contacto" className="section-pad contact-section"><Reveal><p className="eyebrow">05 — SIGAMOS LA CONVERSACIÓN</p><h2>¿Tienes un problema<br /><em>que resolver?</em></h2><p className="contact-lead">Estoy construyendo mi próxima etapa. Si tienes una idea, un reto o simplemente quieres conversar sobre tecnología, escríbeme.</p><a className="primary-button mail-button" href="https://mail.google.com/mail/?view=cm&fs=1&to=golds90-13@gmail.com" target="_blank" rel="noreferrer">Escríbeme <Mail size={17} /></a><div className="socials"><a href="https://github.com/StivenDorado" target="_blank" rel="noreferrer">GH GitHub <ExternalLink size={13} /></a><a href="https://www.linkedin.com/in/jhojan-stiven-salas-dorado-3a9b0b351" target="_blank" rel="noreferrer">in LinkedIn <ExternalLink size={13} /></a></div></Reveal></section>
    </main>
    {selectedProject && <div className="modal-backdrop" role="presentation" onClick={() => setSelectedProject(null)}><article className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onClick={event => event.stopPropagation()}><button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Cerrar detalle"><X size={20} /></button><p className="project-tag">{selectedProject.n} · {selectedProject.tag}</p><h2 id="project-modal-title">{selectedProject.title}</h2><p className="modal-story">{selectedProject.story}</p><div className="modal-stack"><span>Stack / contexto</span><strong>{selectedProject.stack}</strong></div><div className="modal-metric"><strong>{selectedProject.metric}</strong><span>{selectedProject.note}</span></div></article></div>}
    <footer><span>© 2025 Jhojan Estiven Salas Dorado</span><span>Diseñado y desarrollado con intención.</span></footer>
  </div>
}

export default App
