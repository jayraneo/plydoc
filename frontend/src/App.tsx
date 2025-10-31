import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [apiMessage, setApiMessage] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const fetchFromBackend = async () => {
    setLoading(true)
    try {
      const response = await fetch('http://localhost:8000/api/hello')
      const data = await response.json()
      setApiMessage(data.message)
    } catch (error) {
      setApiMessage('Error connecting to backend. Is it running?')
      console.error('Error fetching from backend:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Plysdoc</h1>
      <h2>React TypeScript + FastAPI</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        <button onClick={fetchFromBackend} disabled={loading}>
          {loading ? 'Loading...' : 'Test Backend Connection'}
        </button>
        {apiMessage && (
          <p style={{ marginTop: '1rem' }}>
            <strong>Backend says:</strong> {apiMessage}
          </p>
        )}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
