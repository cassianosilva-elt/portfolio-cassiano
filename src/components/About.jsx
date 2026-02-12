export default function About() {
    return (
        <section className="section" id="sobre">
            <div className="container">
                <div className="about-grid">
                    <div className="reveal">
                        <span className="section-label">Sobre</span>
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

                    <div className="about-visual reveal">
                        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#888' }}>
                            "O código deve ser invisível; <br /> o resultado deve ser <br /> inesquecível."
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
