import { useState, useEffect } from 'react'

export default function Preloader({ onFinish }) {
    const [fadeOut, setFadeOut] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setFadeOut(true), 1800)
        const remove = setTimeout(() => onFinish(), 2400)
        return () => {
            clearTimeout(timer)
            clearTimeout(remove)
        }
    }, [onFinish])

    return (
        <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
            <div className="preloader-content">
                <div className="preloader-logo">CS</div>
                <div className="preloader-bar">
                    <div className="preloader-bar-fill"></div>
                </div>
            </div>
        </div>
    )
}
