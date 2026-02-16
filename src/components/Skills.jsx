import { useEffect, useRef } from 'react'
import {
    Atom,
    Braces,
    Terminal,
    FileCode2,
    Zap,
    Database,
    GitBranch,
    Cpu,
    Monitor,
    Palette,
    Server,
    Globe
} from 'lucide-react'

const skills = [
    { name: 'React', level: 95, icon: Atom },
    { name: 'JavaScript', level: 90, icon: Braces },
    { name: 'Python', level: 95, icon: Terminal },
    { name: 'HTML/CSS', level: 95, icon: FileCode2 },
    { name: 'Vite', level: 80, icon: Zap },
    { name: 'Supabase', level: 85, icon: Database },
    { name: 'Git', level: 90, icon: GitBranch },
    { name: 'Automação', level: 95, icon: Cpu },
    { name: 'Selenium', level: 90, icon: Monitor },
    { name: 'Tailwind', level: 85, icon: Palette },
    { name: 'Node.js', level: 70, icon: Server },
    { name: 'APIs REST', level: 90, icon: Globe },
]


export default function Skills() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const bars = entry.target.querySelectorAll('.skill-bar-fill')
                        bars.forEach(bar => {
                            bar.style.width = bar.dataset.level + '%'
                        })
                        entry.target.querySelectorAll('.skill-card').forEach(card => {
                            card.classList.add('visible')
                        })
                    }
                })
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section className="section" id="skills" ref={sectionRef}>
            <div className="container">
                <div className="reveal">
                    <span className="section-label">Skills</span>
                    <h2 className="section-title">Tecnologias que eu uso</h2>
                </div>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className={`skill-card glass-card reveal reveal-delay-${(index % 5) + 1}`}
                        >
                            <div className="skill-icon-wrapper">
                                <skill.icon size={20} />
                            </div>
                            <span className="skill-name">{skill.name}</span>
                            <div className="skill-bar-container">
                                <div
                                    className="skill-bar-fill"
                                    data-level={skill.level}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
