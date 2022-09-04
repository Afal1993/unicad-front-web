import Edit from '@mui/icons-material/Edit'
import CreateDelivery from 'pages/HomePage'
import List from 'pages/Origins/List'
import UpdateDelivery from 'pages/Origins/Update'
import { Route, Routes as RoutesWrapper } from 'react-router-dom'

export default function Routes() {
  return (
    <RoutesWrapper>
      <Route path="/">
        <Route index element={<CreateDelivery />} />
        <Route path="*" element={<div>404 Not found</div>} />
        <Route path="deliveries">
          <Route path=":id" element={<UpdateDelivery />} />
          <Route index element={<List />} />
        </Route>
      </Route>
    </RoutesWrapper>
  )
}
