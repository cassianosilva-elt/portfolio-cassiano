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
    { name: 'React', level: 'Avançado', icon: Atom },
    { name: 'JavaScript', level: 'Avançado', icon: Braces },
    { name: 'Python', level: 'Avançado', icon: Terminal },
    { name: 'HTML/CSS', level: 'Avançado', icon: FileCode2 },
    { name: 'Vite', level: 'Intermediário', icon: Zap },
    { name: 'Supabase', level: 'Intermediário', icon: Database },
    { name: 'Git', level: 'Intermediário', icon: GitBranch },
    { name: 'Automação', level: 'Avançado', icon: Cpu },
    { name: 'Selenium', level: 'Intermediário', icon: Monitor },
    { name: 'Tailwind', level: 'Intermediário', icon: Palette },
    { name: 'Node.js', level: 'Básico', icon: Server },
    { name: 'APIs REST', level: 'Intermediário', icon: Globe },
]

export default function Skills() {
    return (
        <section className="section" id="skills">
            <div className="container">
                <div className="reveal">
                    <span className="section-label">Skills</span>
                    <h2 className="section-title">Tecnologias que eu uso</h2>
                </div>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className={`skill-item reveal reveal-delay-${(index % 5) + 1}`}
                        >
                            <span className="skill-icon">
                                <skill.icon size={18} />
                            </span>
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-level">{skill.level}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
