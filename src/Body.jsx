
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'

const Body = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Body
