import { useState, useEffect, useRef } from 'react'
import profilePic from '../assets/cassiano.png'
import { Atom, Terminal, Braces } from 'lucide-react'

const typingWords = ['automação.', 'código eficiente.', 'soluções reais.', 'design moderno.']

export default function Hero({ onOpenCV }) {
    const [wordIndex, setWordIndex] = useState(0)
    const [text, setText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const timeoutRef = useRef(null)

    useEffect(() => {
        const currentWord = typingWords[wordIndex]

        if (!isDeleting && text === currentWord) {
            timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000)
        } else if (isDeleting && text === '') {
            setIsDeleting(false)
            setWordIndex(prev => (prev + 1) % typingWords.length)
        } else {
            const speed = isDeleting ? 40 : 80
            timeoutRef.current = setTimeout(() => {
                setText(prev =>
                    isDeleting
                        ? currentWord.substring(0, prev.length - 1)
                        : currentWord.substring(0, prev.length + 1)
                )
            }, speed)
        }

        return () => clearTimeout(timeoutRef.current)
    }, [text, isDeleting, wordIndex])

    return (
        <section className="hero">
            <div className="hero-grid-pattern" />
            <div className="container">
                <div className="hero-grid">
                    <div className="hero-text-side">
                        <span className="hero-greeting reveal">Developer & Automatizador</span>
                        <h1 className="hero-name reveal delay-1">
                            Ajudando empresas <br className="hide-mobile" />
                            a escalar com <br className="hide-mobile" />
                            <span className="accent-word">tecnologia.</span>
                        </h1>
                        <p className="hero-tagline reveal delay-2">
                            Cassiano Silva. 17 anos. Transformando complexidade em{' '}
                            <span className="typewriter-text">{text}</span>
                        </p>
                        <div className="hero-cta reveal delay-3">
                            <a href="#projetos" className="btn-primary" aria-label="Ver meus projetos no portfólio">Portfólio</a>
                            <button onClick={onOpenCV} className="btn-outline" aria-label="Abrir currículo completo">Ver CV</button>
                        </div>
                    </div>

                    <div className="hero-visual-side reveal delay-2">
                        <div className="hero-image-container">
                            <img src={profilePic} alt="Cassiano Silva" className="hero-profile-img" />
                            <div className="hero-badges">
                                <span className="hero-badge"><Atom size={12} /> React</span>
                                <span className="hero-badge"><Terminal size={12} /> Python</span>
                                <span className="hero-badge"><Braces size={12} /> JS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-scroll-indicator reveal delay-3">
                <span>Scroll</span>
                <div className="scroll-line" />
            </div>
        </section>
    )
}
