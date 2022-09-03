import { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Button, Modal, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useJsApiLoader, GoogleMap, Marker, Autocomplete } from '@react-google-maps/api'
import { number } from 'yup'

export default function CreateOrigin() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [deliveryDate, setDeliveryDate] = useState('')
  const [startPoint, setStartPoint] = useState('')
  const [destinationPoint, setDestinationPoint] = useState('')

  const { isLoaded } = useJsApiLoader ({
    googleMapsApiKey: import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places']
  })


  if(!isLoaded) {
    return '';
  }

  const center: google.maps.LatLngLiteral = {lat: -7.255119, lng: -34.905382};
  
  let map: google.maps.Map;
  function initMap(): void {
    map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center,
      zoom: 8,
    });
  }

  const createDelivery = (event: any) => {
    event.preventDefault()
    console.log(name)
    console.log(deliveryDate)
    console.log(startPoint)
    console.log(destinationPoint)
    const origin = {
      name,
      deliveryDate,
      startPoint,
      destinationPoint,
    }
    const res = axios
      .post('http://localhost:3001/v1/locales', origin)
      .then(res => {
        if (res.status == 201) {
          navigate('/origins', { replace: true })
        }
      })
      .catch(e => {
        console.log(e)
      })
    return
  }
  
  return (
    <>
      {/* <Box position='absolute' left={0} top={0} height='100vh' width='100vw' zIndex='-1' >
          <GoogleMap center={center} zoom={15} mapContainerStyle={{width: '100%', height: '100%'}}>

          </GoogleMap>
      </Box> */}
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box>
        </Box>
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
          onClick={(event) =>createDelivery(event)}
        >
          Cadastrar
        </Button>
      </Box>
    </>
  )
}
