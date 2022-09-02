import HomeIcon from '@mui/icons-material/Home'
import RouteIcon from '@mui/icons-material/Route'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Paper from '@mui/material/Paper'
import { useNavigate } from 'react-router-dom'

const ROUTES = [
  { label: 'Cadastrar', path: '/', icon: <HomeIcon /> },
  { label: 'Entregas', path: '/origins', icon: <RouteIcon /> },
]

const Sidebar: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Paper
      variant="elevation"
      sx={{
        width: { xs: 300, md: 300 },
        borderRadius: 0,
      }}
    >
      <List disablePadding>
        {ROUTES.map(route => (
          <ListItem key={route.label} disablePadding>
            <ListItemButton onClick={() => navigate(route.path)}>
              <ListItemIcon>{route.icon}</ListItemIcon>
              <ListItemText primary={route.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}

export default Sidebar
