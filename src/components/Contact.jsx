import { useState } from 'react'
import { Send, MapPin, Mail } from 'lucide-react'

export default function Contact() {
    const [status, setStatus] = useState('')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('Enviando...')

        try {
            const response = await fetch('https://formspree.io/f/mouracassiano410@gmail.com', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                setStatus('Mensagem enviada com sucesso!')
                setFormData({ name: '', email: '', message: '' })
            } else {
                setStatus('Erro ao enviar. Tente novamente.')
            }
        } catch (error) {
            setStatus('Erro de conexão. Verifique sua internet.')
        }

        setTimeout(() => setStatus(''), 5000)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    return (
        <section className="contact-section" id="contato">
            <div className="container reveal">
                <div className="contact-grid">
                    <div className="contact-info">
                        <span className="section-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Vamos Conversar?</span>
                        <h2 className="contact-title">Inicie uma <br /> conversa.</h2>
                        <p style={{ marginBottom: '3rem', opacity: 0.7, maxWidth: '300px' }}>
                            Estou sempre aberto a novos projetos e colaborações criativas.
                        </p>

                        <a href="mailto:mouracassiano410@gmail.com" className="contact-email">
                            mouracassiano410@gmail.com
                        </a>

                        <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', opacity: 0.6 }}>
                                <MapPin size={16} />
                                <span style={{ fontSize: '0.8rem', letterSpacing: '0.1em' }}>SÃO PAULO, SP, BRASIL</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', opacity: 0.6 }}>
                                <Mail size={16} />
                                <span style={{ fontSize: '0.8rem', letterSpacing: '0.1em' }}>DISPONÍVEL PARA FREELANCE</span>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label">Nome</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="form-input"
                                    placeholder="Seu nome"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">E-mail</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-input"
                                    placeholder="seu@email.com"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Mensagem</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="form-textarea"
                                    placeholder="Como posso ajudar?"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn-primary submit-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
                                Enviar Mensagem <Send size={14} />
                            </button>

                            {status && <div className="form-status">{status}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
