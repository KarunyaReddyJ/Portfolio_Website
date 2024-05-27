import developer from "../assets/home-dev2.png";
import LeetCodeProfile from "./LeetCodeProfile";
import GitHubProfile from "./Profile";
function About() {
  return (
    <div className="text-white h-auto flex flex-row justify-between ">
      <header className="grid grid-cols-3  ls:grid-cols-2 gap-x-16">
      <img src={developer} alt="" className="h-6/12 translate-y-12" />
       <GitHubProfile/>
       <LeetCodeProfile/>
      </header>
    </div>
  );
}

export default About;
