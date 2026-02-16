import { useState, useEffect } from 'react'
import { Quote } from 'lucide-react'

const testimonials = [
    {
        name: 'Gabriel (Biel do Corte)',
        role: 'Empresário — Barbearia',
        text: 'O Cassiano transformou completamente a presença digital da minha barbearia. O sistema de agendamento ficou impecável e meus clientes adoraram.',
    },
    {
        name: 'Mendonça Dreams',
        role: 'E-commerce — Moda Feminina',
        text: 'Profissionalismo e atenção aos detalhes impressionantes. A plataforma de e-commerce que ele construiu superou todas as expectativas.',
    },
    {
        name: 'Equipe Eletromidia',
        role: 'Planejamento — Corporativo',
        text: 'As automações desenvolvidas pelo Cassiano reduziram drasticamente nosso tempo de processamento de relatórios. Excepcional.',
    }
]

export default function Testimonials() {
    const [active, setActive] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActive(prev => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="section testimonials-section" id="depoimentos">
            <div className="container">
                <div className="reveal">
                    <span className="section-label">Depoimentos</span>
                    <h2 className="section-title">O que dizem sobre<br className="hide-mobile" /> meu trabalho</h2>
                </div>

                <div className="testimonials-wrapper reveal">
                    <div className="testimonials-track" style={{ transform: `translateX(-${active * 100}%)` }}>
                        {testimonials.map((t, idx) => (
                            <div key={idx} className="testimonial-card">
                                <Quote className="testimonial-quote-icon" size={40} />
                                <p className="testimonial-text">{t.text}</p>
                                <div className="testimonial-author">
                                    <div className="testimonial-avatar">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <span className="testimonial-name">{t.name}</span>
                                        <span className="testimonial-role">{t.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="testimonials-dots">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                className={`testimonial-dot ${idx === active ? 'active' : ''}`}
                                onClick={() => setActive(idx)}
                                aria-label={`Ver depoimento ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
