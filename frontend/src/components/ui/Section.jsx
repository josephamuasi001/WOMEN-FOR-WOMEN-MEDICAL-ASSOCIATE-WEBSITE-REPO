function Section({ title, children }) {
  return (
    <section style={{ marginBottom: '2rem' }}>
      {title && <h2 style={{ marginBottom: '1rem' }}>{title}</h2>}
      {children}
    </section>
  )
}

export default Section
