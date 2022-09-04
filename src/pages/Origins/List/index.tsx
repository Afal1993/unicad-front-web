import React, { useState, useEffect } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useNavigate } from 'react-router-dom'
import { api } from 'services/api'

const List: React.FC = () => {
  const [locales, setLocales] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getAllDeliveries()
  }, [])

  const getAllDeliveries = () => {
    return api
      .get('http://localhost:3001/v1/locales')
      .then((res: any) => {
        console.log(res.data)
        setLocales(res.data)
      })
      .catch((e: any) => {
        console.log(e.error)
      })
  }

  const deleteDelivery = (id: number, refresh: any) => {
    return api
      .delete(`http://localhost:3001/v1/locales/${id}`)
      .then((res: any) => {})
      .catch((e: any) => {
        console.log(e.error)
      })
  }

  const editDelivery = (id: number) => {
    navigate(`/deliveries/${id}`, { replace: true })
  }

  return (
    <Box flexGrow={1} display="flex" flexDirection="column">
      <Box display="flex" justifyContent="space-between">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Nome do cliente</TableCell>
                <TableCell align="right">Data da entrega</TableCell>
                <TableCell align="right">Ponto de partida</TableCell>
                <TableCell align="right">Ponto de destino</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {locales.map((row: any) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.deliveryDate}</TableCell>
                  <TableCell align="right">{row.startPoint}</TableCell>
                  <TableCell align="right">{row.destinationPoint}</TableCell>
                  <TableCell align="right">
                    <Button
                      onClick={() => deleteDelivery(row.id, location.reload())}
                    >
                      DELETAR
                    </Button>
                  </TableCell>
                  <TableCell align="right">
                    <Button onClick={() => editDelivery(row.id)}>EDITAR</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}

export default List
