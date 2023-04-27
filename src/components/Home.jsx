import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import "../styles.css";

const Home = () => {
  return (
    <div name="home" className="w-full sm:h-screen sm:text-center bg-[#002e34]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="mt-40 text-white py-4 font-Roboto">Hi, call me Juan!</p>
        <h1 className="animate-charcter text-4xl sm:text-7xl font-bold text-[#fff]">
          Juan Felipe Obregón
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#fff]">
          Full Stack Developer
        </h2>
        <p className="sm:text-center text-white py-6 text-3xl">
        Professional development, product design and a great work philosophy.  
        </p>
        <div>
          <button className="mb-20 text-white sm:mx-auto group border-2 px-6 py-3 my-2 flex items-center hover:bg-white-600 hover:border-white-600 hover:text-[#00c16c]">
            <Link className="tracking-[.10em]" to="projects">
              View Projects
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
