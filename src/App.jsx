import { useState, useEffect } from 'react'
import CraftMap from './components/CraftMap'

function App() {
  const [crafts, setCrafts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/data/crafts.json')
      .then(response => response.json())
      .then(data => {
        setCrafts(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('データの読み込みに失敗しました:', error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">読み込み中...</div>
      </div>
    )
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>ヨーロッパの工芸品マップ</h1>
        <p>各地の伝統的な工芸品を探索してください</p>
      </header>
      <CraftMap crafts={crafts} />
    </div>
  )
}

export default App
