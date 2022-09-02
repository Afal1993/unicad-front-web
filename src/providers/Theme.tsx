import {
  CssBaseline,
  ThemeProvider as MaterialThemeProvider,
} from '@mui/material'
import { theme } from 'styles'

import 'styles/reset.css'

interface ProviderProps {
  children: React.ReactNode
}

const ThemeProvider: React.FC<ProviderProps> = ({ children }) => {
  return (
    <MaterialThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MaterialThemeProvider>
  )
}

export default ThemeProvider
