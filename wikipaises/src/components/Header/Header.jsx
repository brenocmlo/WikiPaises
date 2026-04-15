// src/components/Header/Header.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isDark, setIsDark] = useState(false);

  // Efeito que troca o tema no HTML
  useEffect(() => {
    if (isDark) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
    }
  }, [isDark]);

  return (
    <header style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      padding: '1.5rem 2rem', 
      backgroundColor: 'var(--element-bg)', /* Usa variável */
      boxShadow: '0 2px 4px var(--shadow-color)',
      transition: 'background-color 0.3s ease'
    }}>
      
      {/* O Link faz o título voltar para a Home ao ser clicado */}
      <Link to="/" style={{ textDecoration: 'none', color: 'var(--text-color)' }}>
        <h2 style={{ margin: 0 }}>WikiPaíses</h2>
      </Link>
      
      <button 
        onClick={() => setIsDark(!isDark)}
        style={{
          padding: '0.6rem 1.2rem',
          cursor: 'pointer',
          border: `1px solid var(--border-color)`,
          borderRadius: '8px',
          backgroundColor: 'var(--input-bg)', /* Usa variável */
          color: 'var(--text-color)',         /* Usa variável */
          fontWeight: 'bold',
          transition: 'all 0.3s ease'
        }}
      >
        {isDark ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
      </button>
    </header>
  );
};