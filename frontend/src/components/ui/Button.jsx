function Button({ children, variant = 'primary', ...props }) {
  const baseStyle = {
    border: 'none',
    borderRadius: '8px',
    padding: '0.75rem 1.25rem',
    cursor: 'pointer',
    fontWeight: 600,
    transition: 'all 0.2s ease',
  }

  const styles = {
    primary: {
      ...baseStyle,
      backgroundColor: 'var(--color-primary)',
      color: 'var(--color-white)',
    },
    secondary: {
      ...baseStyle,
      backgroundColor: 'var(--color-light-lavender)',
      color: 'var(--color-primary)',
    },
  }

  return (
    <button style={styles[variant] || styles.primary} {...props}>
      {children}
    </button>
  )
}

export default Button
