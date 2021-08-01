import { useSelector } from 'react-redux'
import useSearch from './useSearch'

function App() {
  const suggestions = useSelector((state) => state.suggestions.suggestions)
  const [search, setSearch] = useSearch('')

  return (
    <div className="App">
      <div id="search">
        <label>
          Enter keywords:
          <input
            name="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            onBlur={(event) => setSearch(event.target.value)}
          />
        </label>
      </div>
      {suggestions && suggestions.length ? (
        <div id="suggestions">
          {suggestions.map((e, i) => (
            <p key={i}>{e}</p>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default App
