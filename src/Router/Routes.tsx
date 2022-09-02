import HomePage from 'pages/HomePage'
import List from 'pages/Origins/List'
import { Route, Routes as RoutesWrapper } from 'react-router-dom'

export default function Routes() {
  return (
    <RoutesWrapper>
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="*" element={<div>404 Not found</div>} />
        <Route path="origins">
          <Route index element={<List />} />
          <Route path="create" element={<div>Create</div>} />
        </Route>
      </Route>
    </RoutesWrapper>
  )
}
