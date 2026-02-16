import { useState, useEffect, useRef } from 'react'

export default function CustomCursor() {
    const dotRef = useRef(null)
    const ringRef = useRef(null)
    const [hovering, setHovering] = useState(false)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        // Disable on touch devices
        if ('ontouchstart' in window) return

        const moveCursor = (e) => {
            if (dotRef.current && ringRef.current) {
                dotRef.current.style.left = `${e.clientX}px`
                dotRef.current.style.top = `${e.clientY}px`
                ringRef.current.style.left = `${e.clientX}px`
                ringRef.current.style.top = `${e.clientY}px`
            }
        }

        const showCursor = () => setVisible(true)
        const hideCursor = () => setVisible(false)

        const addHover = () => setHovering(true)
        const removeHover = () => setHovering(false)

        document.addEventListener('mousemove', moveCursor)
        document.addEventListener('mouseenter', showCursor)
        document.addEventListener('mouseleave', hideCursor)

        const hoverTargets = document.querySelectorAll('a, button, .project-card, .skill-card, .testimonial-card')
        hoverTargets.forEach(el => {
            el.addEventListener('mouseenter', addHover)
            el.addEventListener('mouseleave', removeHover)
        })

        return () => {
            document.removeEventListener('mousemove', moveCursor)
            document.removeEventListener('mouseenter', showCursor)
            document.removeEventListener('mouseleave', hideCursor)
            hoverTargets.forEach(el => {
                el.removeEventListener('mouseenter', addHover)
                el.removeEventListener('mouseleave', removeHover)
            })
        }
    }, [])

    // Disable on touch devices
    if (typeof window !== 'undefined' && 'ontouchstart' in window) return null

    return (
        <>
            <div
                ref={dotRef}
                className={`cursor-dot ${hovering ? 'hover' : ''} ${visible ? 'visible' : ''}`}
            />
            <div
                ref={ringRef}
                className={`cursor-ring ${hovering ? 'hover' : ''} ${visible ? 'visible' : ''}`}
            />
        </>
    )
}
