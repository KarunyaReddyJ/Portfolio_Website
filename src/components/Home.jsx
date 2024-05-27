import developer from "../assets/home-dev.png";
import Type from "./Type";
function Home() {
  return (
    <div className="min-h-screen h-auto ">
    <div className='text-white px-5 w-screen -translate-y-20 flex flex-row justify-between poetsen-one-regular'>
      <div className="translate-y-40">
        <h1 className="text-4xl">Hi There!</h1>

        <div className="text-5xl translate-y-16">
          {" "}
          I'M
          <span className="text-purple-500">{"     "} Karunya Reddy</span>
          <span className="text-purple-500"> <Type /> </span>
          
        
        </div>
        
      </div>
      <img src={developer} alt="avatar" className="w-5/12 right translate-y-10" />
    </div>
    <h2 className="poetsen-one-regular text-gray-700 text-3xl">
      LET ME INTRODUCE MYSELF
    </h2>
    <ul className="poetsen-one-regular text-gray-700 text-2xl" >
      <li>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</li>
      <li>I know languages like <span className="text-purple-500">C++, Javascript and Python</span> .</li>
      <li>My field of Interest's are building new <span className="text-purple-500"> Web Technologies</span> and <span className="text-purple-500">Products</span>.</li>
      <li>Whenever possible, I also apply my passion for developing products with <span className="text-purple-500"> Node.js</span> and Modern Javascript Library like <span className="text-purple-500"> React.js</span> </li>
    </ul>
    </div>
  );
}

export default Home;
