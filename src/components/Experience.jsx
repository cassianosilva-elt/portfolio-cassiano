import { useEffect, useRef } from 'react'

export default function Experience() {
    const timelineRef = useRef(null)
    const skillsRef = useRef(null)

    const experiences = [
        {
            date: '2025 — Presente',
            title: 'Aprendiz de Planejamento',
            company: 'Eletromidia S/A',
            desc: 'Desenvolvimento de scripts para automação de relatórios geográficos e processamento de dados em escala.'
        },
        {
            date: '2024 — 2025',
            title: 'Web Design Freelancer',
            company: 'Independente',
            desc: 'Desenvolvimento focado em marcas que buscam uma presença digital limpa e funcional.'
        }
    ]

    const skills = [
        { name: 'JavaScript / React', level: 95 },
        { name: 'Python Automation', level: 95 },
        { name: 'SQL & Database', level: 80 },
        { name: 'UI / UX Design', level: 90 }
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Animate skill bars
                        const bars = entry.target.querySelectorAll('.exp-skill-bar-fill')
                        bars.forEach(bar => {
                            bar.style.width = bar.dataset.level + '%'
                        })
                    }
                })
            },
            { threshold: 0.3 }
        )

        if (skillsRef.current) observer.observe(skillsRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section className="section" id="experiencia">
            <div className="container">
                <div className="experience-layout">
                    <div className="reveal">
                        <span className="section-label">Histórico</span>
                        <h2 className="section-title">Carreira</h2>
                        <div className="timeline" ref={timelineRef}>
                            {experiences.map(e => (
                                <div key={e.title} className="timeline-item">
                                    <span className="timeline-date">{e.date}</span>
                                    <h3 className="timeline-title">{e.title}</h3>
                                    <p className="timeline-company">{e.company}</p>
                                    <p className="timeline-description">{e.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="reveal exp-skills-section" ref={skillsRef}>
                        <span className="section-label">Capacidades</span>
                        <h2 className="section-title">Habilidades</h2>
                        <div className="skill-bar-list">
                            {skills.map(s => (
                                <div key={s.name} className="skill-bar-item">
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span>{s.name}</span>
                                        <span>{s.level}%</span>
                                    </div>
                                    <div className="exp-skill-bar-container">
                                        <div
                                            className="exp-skill-bar-fill"
                                            data-level={s.level}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
