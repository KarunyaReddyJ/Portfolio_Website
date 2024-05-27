import { Outlet } from "react-router-dom";
import NavBar from './NavBar';

function Layout() {
  return (
    <div className="bg-cover bg-no-repeat bg-center min-h-screen">
      <div className="bg-[url('./assets/homeBg.jpg')] bg-cover bg-no-repeat bg-center w-auto min-w-screen min-h-screen h-auto">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
