import { useState } from 'react'

const DEFAULT_SVG = `<svg viewBox="0 0 24 24" fill="white">
  <path d="M12 3L3 10V21H9V14H15V21H21V10L12 3Z"/>
</svg>`

export default function App() {
  const [svg, setSvg] = useState(DEFAULT_SVG)

  return (
    <>
      <h1>SVG Preview</h1>
      <textarea
        value={svg}
        onChange={(event) => setSvg(event.target.value)}
        spellCheck={false}
      />
      <div className="preview" dangerouslySetInnerHTML={{ __html: svg }} />
    </>
  )
}
