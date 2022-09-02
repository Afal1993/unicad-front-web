import Router from 'Router'
import ThemeProvider from 'providers/Theme'

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Router />
      </div>
    </ThemeProvider>
  )
}

export default App
