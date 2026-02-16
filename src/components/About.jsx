import { MapPin, Briefcase } from 'lucide-react'

export default function About() {
    return (
        <section className="section" id="sobre">
            <div className="container">
                <div className="reveal">
                    <span className="section-label">Sobre</span>
                </div>

                <div className="about-bento">
                    <div className="about-main-card glass-card reveal delay-1">
                        <div className="about-text">
                            <p>
                                Aos 17 anos, vejo o desenvolvimento como uma ferramenta de resolução de problemas.
                                Minha abordagem é calma e analítica, priorizando sempre a eficiência e a clareza técnica.
                            </p>
                            <p>
                                Atualmente na Eletromidia, impacto processos reais através da automação. Fora de lá,
                                trabalho com marcas para construir identidades digitais que realmente funcionam.
                            </p>
                        </div>

                        <div className="about-stats">
                            <div>
                                <span className="stat-number">2k+</span>
                                <span className="stat-label">Relatórios Gerados</span>
                            </div>
                            <div>
                                <span className="stat-number">30m</span>
                                <span className="stat-label">Tempo de Processamento</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-side-card glass-card reveal delay-2">
                        <p className="about-quote">
                            "O código deve ser invisível; o resultado deve ser inesquecível."
                        </p>
                    </div>

                    <div className="about-side-card glass-card reveal delay-3">
                        <div className="about-availability">
                            <span className="availability-dot"></span>
                            Disponível para projetos
                        </div>
                        <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <div className="contact-detail-item" style={{ opacity: 0.7 }}>
                                <MapPin size={14} />
                                <span>São Paulo, SP</span>
                            </div>
                            <div className="contact-detail-item" style={{ opacity: 0.7 }}>
                                <Briefcase size={14} />
                                <span>Eletromidia S/A</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
