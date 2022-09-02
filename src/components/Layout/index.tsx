import Box from '@mui/material/Box'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box height="100%" width="100%" display="flex" flexDirection="column">
      <Header />
      <Box display="flex" flexGrow={1} flex={1}>
        <Sidebar />
        <Box display="flex" flexDirection="column" flexGrow={1} flex={1} p={3}>
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default Layout
