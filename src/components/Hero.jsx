import profilePic from '../assets/cassiano.png';

export default function Hero({ onOpenCV }) {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-grid">
                    <div className="hero-text-side">
                        <span className="hero-greeting reveal">Developer & Automatizador</span>
                        <h1 className="hero-name reveal delay-1">
                            Ajudando empresas <br />
                            a escalar com <br />
                            código eficiente.
                        </h1>
                        <p className="hero-tagline reveal delay-2">
                            Cassiano Silva. 17 anos. Transformando complexidade em elegância editorial e performance técnica.
                        </p>
                        <div className="hero-cta reveal delay-3">
                            <a href="#projetos" className="btn-primary">Portfólio</a>
                            <button onClick={onOpenCV} className="btn-outline">Ver CV</button>
                        </div>
                    </div>

                    <div className="hero-visual-side reveal delay-2">
                        <div className="hero-image-container">
                            <img src={profilePic} alt="Cassiano Silva" className="hero-profile-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
