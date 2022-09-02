import Layout from 'components/Layout'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  )
}

export default Router
