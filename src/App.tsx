import Router from 'Router'
import ThemeProvider from 'providers/Theme'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <ThemeProvider>
      <ToastContainer />
      <div className="App">
        <Router />
      </div>
    </ThemeProvider>
  )
}

export default App
