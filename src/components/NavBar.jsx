import { NavLink } from "react-router-dom";
import home from "../assets/nav-icons/home.svg";
import about from "../assets/nav-icons/about.svg";
import project from "../assets/nav-icons/project.svg";
function NavBar() {
  return (
    <header className="relative z-10">
      <nav className="w-screen ml-auto">
        <ul className=" flex flex-row py-5 text-2xl text-pretty right-0">
          <li className="mx-6">
            <NavLink to="/" exact  className="text-white hover:text-yellow-500 px-4 py-2 rounded-md" activeClassName="bg-yellow-700 underline" >
              {" "}
              <img src={home} alt="" className="inline" /> {"  "} Home
            </NavLink>
          </li>
          <li className="mx-6">
            <NavLink to="/about"  className="text-white hover:text-yellow-500 px-4 py-2 rounded-md" activeClassName="bg-yellow-700 underline">
              <img src={about} alt="" className="inline" /> {"  "} About
            </NavLink>
          </li>
          <li className="mx-6">
            <NavLink to="/projects"  className="text-white hover:text-yellow-500 px-4 py-2 rounded-md" activeClassName="bg-yellow-700 underline">
              {" "}
              <img src={project} alt="" className="inline" /> {"  "} Projects
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
