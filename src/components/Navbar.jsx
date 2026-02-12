import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function Navbar({ theme, toggleTheme }) {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <a href="#" className="nav-logo">Cassiano M. Silva</a>

                <div className="nav-right">
                    <ul className="nav-links">
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#projetos">Projetos</a></li>
                        <li><a href="#experiencia">Carreira</a></li>
                    </ul>

                    <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
                        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                    </button>
                </div>
            </div>
        </nav>
    )
}
