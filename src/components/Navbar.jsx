import { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'

export default function Navbar({ theme, toggleTheme }) {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)

            // Track active section
            const sections = ['sobre', 'skills', 'projetos', 'experiencia', 'depoimentos', 'contato']
            let current = ''
            for (const id of sections) {
                const el = document.getElementById(id)
                if (el) {
                    const rect = el.getBoundingClientRect()
                    if (rect.top <= 150) current = id
                }
            }
            setActiveSection(current)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleLinkClick = () => {
        setMobileMenuOpen(false)
    }

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [mobileMenuOpen])

    const navItems = [
        { href: '#sobre', label: 'Sobre', id: 'sobre' },
        { href: '#skills', label: 'Skills', id: 'skills' },
        { href: '#projetos', label: 'Projetos', id: 'projetos' },
        { href: '#experiencia', label: 'Carreira', id: 'experiencia' },
        { href: '#contato', label: 'Contato', id: 'contato' },
    ]

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                <div className="container">
                    <a href="#" className="nav-logo" aria-label="Ir para o topo da página">Cassiano M. Silva</a>

                    <div className={`nav-right ${mobileMenuOpen ? 'active' : ''}`}>
                        <ul className="nav-links">
                            {navItems.map(item => (
                                <li key={item.id}>
                                    <a
                                        href={item.href}
                                        onClick={handleLinkClick}
                                        className={activeSection === item.id ? 'active' : ''}
                                        aria-label={`Ver seção ${item.label}`}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <button onClick={toggleTheme} className="theme-toggle" aria-label="Alternar tema">
                            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                        </button>
                    </div>

                    <button
                        className="mobile-menu-btn"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>
            <div
                className={`mobile-overlay ${mobileMenuOpen ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
            />
        </>
    )
}
