export default function HomePage() {
  return (
    <div>
      <h2>Bem-vindo ao Portal de Turismo da Kate!</h2>
      <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
        Descubra destinos incríveis ao redor do mundo.
      </p>
      <a 
        href="/destinos" 
        style={{ 
          display: 'inline-block',
          padding: '0.75rem 1.5rem',
          background: 'var(--primary)',
          color: '#fff',
          borderRadius: 'var(--radius)',
          fontWeight: '500',
          transition: 'all 0.2s ease'
        }}
      >
        → Ver Destinos
      </a>
    </div>
  )
}