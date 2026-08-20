import { useState } from 'react'

const DEFAULT_SVG = `<svg viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 3L3 10V21H9V14H15V21H21V10L12 3Z"/>
</svg>`

export default function App() {
  const [svg, setSvg] = useState(DEFAULT_SVG)

  return (
    <div className="app">
      <header className="topbar">
        <strong>gsgsViewer</strong>
        <span>простой SVG preview</span>
      </header>

      <main className="layout">
        <section className="panel">
          <h2>Код</h2>
          <textarea
            value={svg}
            onChange={(event) => setSvg(event.target.value)}
            spellCheck={false}
            placeholder="Вставь SVG сюда"
          />
        </section>

        <section className="panel">
          <h2>Превью</h2>
          <div className="canvas" dangerouslySetInnerHTML={{ __html: svg }} />
        </section>
      </main>
    </div>
  )
}
