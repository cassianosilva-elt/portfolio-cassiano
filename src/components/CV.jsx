import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, Download, ArrowLeft } from 'lucide-react';

export default function CV({ onClose }) {
    const data = {
        name: "Cassiano Moura Silva",
        title: "Developer & Automatizador",
        age: 17,
        location: "São Paulo - SP",
        email: "mouracassiano410@gmail.com",
        phone: "(11) 96023-5151",
        summary: "Profissional focado em transformar complexidade em eficiência técnica. Especialista em automação de processos em Python e desenvolvimento de interfaces modernas com React. Atualmente contribuindo para a escala de operações através de código performático.",
        experience: [
            {
                company: "Eletromidia S/A",
                role: "Aprendiz de Planejamento",
                period: "2025 — Presente",
                description: "Desenvolvimento de arquitetura de automação para relatórios geográficos e processamento de dados em larga escala, reduzindo drasticamente o tempo operacional."
            },
            {
                company: "Link Soluções",
                role: "Estagiário Administrativo - Control Desk",
                period: "2025",
                description: "Monitoramento diário de operações e indicadores. Apoio na elaboração e organização de relatórios administrativos críticos para tomada de decisão."
            },
            {
                company: "OnaisSports",
                role: "Vendedor",
                period: "2024 — 2025",
                description: "Atendimento multicanal e suporte pós-compra. Gestão de estoque e otimização de fluxo de vendas."
            },
            {
                company: "Jadhe Calçados",
                role: "Vendedor",
                period: "2023 — 2024",
                description: "Suporte direto ao cliente, operação de caixa e organização logística de produtos."
            }
        ],
        projects: [
            {
                name: "Mendonça Dreams",
                tags: "React, Supabase",
                desc: "E-commerce de moda feminina com design editorial."
            },
            {
                name: "Biel do Corte",
                tags: "Next.js, PWA",
                desc: "Sistema de gestão e agendamento para barbearias."
            },
            {
                name: "Python Automation",
                tags: "Python, Selenium",
                desc: "Scripts de automação para o setor de planejamento."
            }
        ],
        skills: [
            "React", "JavaScript (ES6+)", "Python", "Automação (Selenium)", "SQL & Bancos de Dados", "UI/UX Design", "Git & Github", "APIs REST"
        ],
        education: {
            school: "Escola Barro Branco",
            degree: "Ensino Médio",
            period: "Conclusão prevista: 12/2026"
        },
        languages: [
            { name: "Português", level: "Nativo" }
        ]
    };

    return (
        <div className="cv-overlay">
            <div className="cv-container">
                {/* Controls - Hidden on Print */}
                <div className="cv-controls no-print">
                    <button onClick={onClose} className="btn-back">
                        <ArrowLeft size={16} /> Voltar ao Portfólio
                    </button>
                    <button onClick={() => window.print()} className="btn-primary">
                        <Download size={16} /> Imprimir / Salvar PDF
                    </button>
                </div>

                {/* CV Content */}
                <div className="cv-paper">
                    <header className="cv-header">
                        <div>
                            <h1 className="cv-name">{data.name}</h1>
                            <p className="cv-title-sub">{data.title} • {data.age} anos</p>
                        </div>
                        <div className="cv-contact-info">
                            <div className="cv-contact-item">
                                <Mail size={14} /> {data.email}
                            </div>
                            <div className="cv-contact-item">
                                <Phone size={14} /> {data.phone}
                            </div>
                            <div className="cv-contact-item">
                                <MapPin size={14} /> {data.location}
                            </div>
                        </div>
                    </header>

                    <section className="cv-section">
                        <h2 className="cv-section-title">Resumo Profissional</h2>
                        <p className="cv-text">{data.summary}</p>
                    </section>

                    <div className="cv-main-grid">
                        <div className="cv-left-col">
                            <section className="cv-section">
                                <h2 className="cv-section-title">Experiência Profissional</h2>
                                <div className="cv-timeline">
                                    {data.experience.map((exp, idx) => (
                                        <div key={idx} className="cv-exp-item">
                                            <div className="cv-exp-header">
                                                <h3 className="cv-exp-company">{exp.company}</h3>
                                                <span className="cv-exp-date">{exp.period}</span>
                                            </div>
                                            <p className="cv-exp-role">{exp.role}</p>
                                            <p className="cv-exp-desc">{exp.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="cv-section">
                                <h2 className="cv-section-title">Projetos em Destaque</h2>
                                <div className="cv-projects-grid">
                                    {data.projects.map((proj, idx) => (
                                        <div key={idx} className="cv-proj-item">
                                            <h3 className="cv-proj-name">{proj.name} <span className="cv-proj-tags">[{proj.tags}]</span></h3>
                                            <p className="cv-proj-desc">{proj.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        <aside className="cv-right-col">
                            <section className="cv-section">
                                <h2 className="cv-section-title">Competências</h2>
                                <ul className="cv-skills-list">
                                    {data.skills.map(skill => <li key={skill}>{skill}</li>)}
                                </ul>
                            </section>

                            <section className="cv-section">
                                <h2 className="cv-section-title">Formação</h2>
                                <div className="cv-edu-item">
                                    <h3 className="cv-edu-school">{data.education.school}</h3>
                                    <p className="cv-edu-degree">{data.education.degree}</p>
                                    <p className="cv-edu-date">{data.education.period}</p>
                                </div>
                            </section>

                            <section className="cv-section">
                                <h2 className="cv-section-title">Idiomas</h2>
                                {data.languages.map(lang => (
                                    <p key={lang.name} className="cv-text">{lang.name} — {lang.level}</p>
                                ))}
                            </section>
                        </aside>
                    </div>

                    <footer className="cv-footer">
                        <p>Este currículo foi gerado dinamicamente em cassiano-portfolio.vercel.app</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}
