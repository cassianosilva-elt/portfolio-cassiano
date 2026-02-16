import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CV from './components/CV'
import Preloader from './components/Preloader'
import ScrollToTop from './components/ScrollToTop'
import CustomCursor from './components/CustomCursor'

function App() {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
    const [showCV, setShowCV] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light')

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1 }
        )

        const elements = document.querySelectorAll('.reveal')
        elements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [loading])

    if (loading) {
        return <Preloader onFinish={() => setLoading(false)} />
    }

    return (
        <div className="app-wrapper">
            <CustomCursor />
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main>
                <Hero onOpenCV={() => setShowCV(true)} />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
            <ScrollToTop />
            {showCV && <CV onClose={() => setShowCV(false)} />}
        </div>
    )
}

export default App
