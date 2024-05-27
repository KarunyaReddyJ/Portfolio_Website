import { Outlet } from "react-router-dom";
import NavBar from './NavBar';
function Layout() {
  return (<div className='bg-[url("./assets/home-bg.jpg")] min-h-screen h-auto'>
  <NavBar/>
  <Outlet/>
  </div>
  )
}

export default Layout
