export default function Experience() {
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
        { name: 'JavaScript / React', level: '100' },
        { name: 'Python Automation', level: '100' },
        { name: 'SQL & Database', level: '80' },
        { name: 'UI / UX Design', level: '90' }
    ]

    return (
        <section className="section" id="experiencia">
            <div className="container">
                <div className="skills-experience-grid">
                    <div className="reveal">
                        <span className="section-label">Histórico</span>
                        <h2 className="section-title">Carreira</h2>
                        <div className="timeline">
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

                    <div className="reveal">
                        <span className="section-label">Capacidades</span>
                        <h2 className="section-title">Habilidades</h2>
                        <div className="skill-list">
                            {skills.map(s => (
                                <div key={s.name} className="skill-item">
                                    <span>{s.name}</span>
                                    <span style={{ opacity: 0.3 }}>{s.level}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
