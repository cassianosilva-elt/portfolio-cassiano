export default function Footer() {
    return (
        <footer style={{ padding: '4rem 0', borderTop: '1px solid #eee' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.7rem', color: '#999', letterSpacing: '0.1em' }}>
                    © {new Date().getFullYear()} CASSIANO SILVA
                </span>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <a href="https://github.com/cassianosilva-elt" target="_blank" rel="noreferrer" style={{ fontSize: '0.7rem', fontWeight: 700 }}>GITHUB</a>
                    <a href="https://linkedin.com/in/mouracassiano" target="_blank" rel="noreferrer" style={{ fontSize: '0.7rem', fontWeight: 700 }}>LINKEDIN</a>
                </div>
            </div>
        </footer>
    )
}
