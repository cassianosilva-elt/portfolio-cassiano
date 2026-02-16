import { ArrowUp, Github, Linkedin } from 'lucide-react'

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <span className="footer-copy">
                        © {new Date().getFullYear()} CASSIANO SILVA
                    </span>

                    <div className="footer-links">
                        <a
                            href="https://github.com/cassianosilva-elt"
                            target="_blank"
                            rel="noreferrer"
                            className="footer-social-link"
                            aria-label="GitHub de Cassiano Silva"
                        >
                            GITHUB
                        </a>
                        <a
                            href="https://linkedin.com/in/mouracassiano"
                            target="_blank"
                            rel="noreferrer"
                            className="footer-social-link"
                            aria-label="LinkedIn de Cassiano Silva"
                        >
                            LINKEDIN
                        </a>
                        <button
                            className="footer-back-top"
                            onClick={scrollToTop}
                            aria-label="Voltar ao topo"
                        >
                            <ArrowUp size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
