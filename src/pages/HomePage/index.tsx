import React from 'react'
import { Button, Modal, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { api } from 'services/api'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '70vh',
  width: '70vw',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const CreateDelivery: any = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [deliveryDate, setDeliveryDate] = useState('')
  const [startPoint, setStartPoint] = useState('')
  const [destinationPoint, setDestinationPoint] = useState('')
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [openDestinyModal, setOpenDestinyModal] = useState(false)
  const handleOpenDestinyModal = () => setOpenDestinyModal(true)
  const handleCloseDestinyModal = () => setOpenDestinyModal(false)

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyAxYNef9EJ19kDazaUS5QOX0L91hGo4qA0',
  })

  const submitDelivery = (event: any) => {
    event.preventDefault()
    const delivery = {
      name,
      deliveryDate,
      startPoint,
      destinationPoint,
    }
    const res = api
      .post('v1/locales', delivery)
      .then(res => {
        if (res.status == 201) {
          navigate('/deliveries', { replace: true })
          toast.success('Entrega cadastrada com sucesso!')
        }
      })
      .catch(e => {
        console.log(e)
      })
  }
  if (!isLoaded) {
    return ''
  }

  const center: google.maps.LatLngLiteral = { lat: -7.255119, lng: -34.905382 }

  let map: google.maps.Map
  function initMap(): void {
    map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      center,
      zoom: 8,
    })
  }

  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box></Box>
        <Box display="flex">
          <Typography variant="h4">Cadastro de Entregas</Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '80%' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={e => setName(e.target.value)}
          id="outlined-basic"
          label="Nome do cliente"
          variant="outlined"
        />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '80%' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={e => setDeliveryDate(e.target.value)}
          id="outlined-basic"
          label="Data de entrega"
          variant="outlined"
        />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '80%' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onClick={handleOpen}
          onChange={e => setStartPoint(e.target.value)}
          id="outlined-basic"
          label="Ponto de partida"
          variant="outlined"
        />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '80%' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={e => setDestinationPoint(e.target.value)}
          onClick={handleOpenDestinyModal}
          name="destination"
          id="outlined-basic"
          label="Ponto de destino"
          variant="outlined"
        />
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button
          style={{ width: '450px', marginTop: '20px' }}
          variant="contained"
          onClick={event => submitDelivery(event)}
        >
          Cadastrar
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Box
              position="absolute"
              left={0}
              top={0}
              height="100%"
              width="100%"
            >
              <GoogleMap
                center={center}
                zoom={15}
                mapContainerStyle={{ width: '100%', height: '100%' }}
              ></GoogleMap>
            </Box>
          </Typography>
        </Box>
      </Modal>
      <Modal
        open={openDestinyModal}
        onClose={handleCloseDestinyModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Box
              position="absolute"
              left={0}
              top={0}
              height="100%"
              width="100%"
            >
              <GoogleMap
                center={center}
                zoom={15}
                mapContainerStyle={{ width: '100%', height: '100%' }}
              ></GoogleMap>
            </Box>
          </Typography>
        </Box>
      </Modal>
    </>
  )
}
export default CreateDelivery
