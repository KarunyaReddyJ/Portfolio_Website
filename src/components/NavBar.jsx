import { Link } from "react-router-dom";
import home from "../assets/nav-icons/home.svg";
import about from "../assets/nav-icons/about.svg";
import project from "../assets/nav-icons/project.svg";
function NavBar() {
  return (
    <header className="relative z-10">
      <nav className="w-screen ml-auto">
        <ul className="text-white flex flex-row py-5 text-2xl text-pretty right-0">
          <li className="mx-6">
            <Link to="/">
              {" "}
              <img src={home} alt="" className="inline" /> {"  "} Home
            </Link>
          </li>
          <li className="mx-6">
            <Link to="/about">
              <img src={about} alt="" className="inline" /> {"  "} About
            </Link>
          </li>
          <li className="mx-6">
            <Link to="/projects">
              {" "}
              <img src={project} alt="" className="inline" /> {"  "} Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
