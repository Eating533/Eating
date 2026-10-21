import { useState } from 'react'

function App() {
  const [busqueda, setBusqueda] = useState('')
  const [resultado, setResultado] = useState('')

  function buscar(e) {
    e.preventDefault()
    setResultado(busqueda.trim())
  }

  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#242424',
      color: '#ffffff',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '80px 20px',
      boxSizing: 'border-box'
    }}>
      <h1 style={{ color: '#ff5722', fontSize: 48 }}>
        🍔 EATING
      </h1>

      <h2>¿Qué quieres comer hoy?</h2>
      <p>Encuentra tu comida favorita.</p>

      <form onSubmit={buscar}>
        <input
          type="text"
          placeholder="Quiero una hamburguesa..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{
            backgroundColor: '#e5e5e5',
            color: '#333333',
            padding: '16px',
            width: '65%',
            maxWidth: '450px',
            border: '1px solid #aaaaaa',
            borderRadius: '12px',
            fontSize: '16px'
          }}
        />

        <button type="submit" style={{
          backgroundColor: '#ff5722',
          color: '#ffffff',
          padding: '16px',
          margin: '10px',
          border: 'none',
          borderRadius: '12px',
          cursor: 'pointer'
        }}>
          Buscar comida
        </button>
      </form>

      {resultado && (
        <p>Buscaste: {resultado}</p>
      )}
    </main>
  )
}

export default App