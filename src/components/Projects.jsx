import { ExternalLink } from 'lucide-react'
import mendoncaImg from '../assets/mendonca.jpg'
import bielImg from '../assets/biel.jpg'

const projects = [
    {
        title: 'Mendonça Dreams',
        description: 'Plataforma de e-commerce exclusiva focada em moda feminina, unindo design editorial e performance.',
        tags: ['React', 'Supabase', 'Tailwind'],
        link: 'https://mendonca-dreams1.vercel.app/',
        image: mendoncaImg,
        initials: 'MD'
    },
    {
        title: 'Biel do Corte',
        description: 'Sistema de gestão financeira e agendamento para barbearias. Otimização de fluxo de trabalho.',
        tags: ['Next.js', 'PostgreSQL', 'PWA'],
        link: 'https://biel-do-corte.vercel.app/',
        image: bielImg,
        initials: 'BC'
    },
    {
        title: 'Python Automation',
        description: 'Arquitetura de automação em Python para o setor de planejamento. Redução drástica de tempo operacional.',
        tags: ['Python', 'Selenium', 'GSV API'],
        initials: 'PA'
    }
]

export default function Projects() {
    return (
        <section className="section" id="projetos">
            <div className="container">
                <span className="section-label">Case Studies</span>
                <h2 className="section-title">Trabalhos em Destaque</h2>

                <div className="projects-grid">
                    {projects.map((item, idx) => (
                        <div key={idx} className="project-card reveal">
                            <div className="project-preview">
                                {item.image ? (
                                    <img src={item.image} alt={item.title} className="project-img" />
                                ) : (
                                    <span className="project-preview-placeholder">{item.initials}</span>
                                )}
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">{item.title}</h3>
                                <p className="project-description">{item.description}</p>
                                <div className="project-tags">
                                    {item.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
                                </div>
                                {item.link && (
                                    <a href={item.link} target="_blank" rel="noreferrer" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                        Acessar Site <ExternalLink size={14} />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
