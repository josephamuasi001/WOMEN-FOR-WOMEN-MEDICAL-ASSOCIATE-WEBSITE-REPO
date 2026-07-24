function Card({ children, title }) {
  return (
    <section style={{
      backgroundColor: 'var(--color-white)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-md)',
      padding: '1.5rem',
    }}>
      {title && <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>{title}</h3>}
      {children}
    </section>
  )
}

export default Card
