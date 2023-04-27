import { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Navbar = () => {

const [nav, setNav] = useState(false)
const handleClick = () => setNav(!nav)

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#90ff17]  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-lg text-[#004443]">
       <p className=" tracking-[.15em]">Juan Obregón</p>
        {/* menu */}
        <div className="hidden md:flex">
            <ul className="hidden md:flex">
                <li className="hover:text-[#00c16c] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                  <Link to="home" smooth={true} duration={500}>
                    Home
                  </Link>
                </li>
                <li className="hover:text-[#00c16c] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                <Link to="about" smooth={true} duration={500}>
                    About
                </Link>
                </li>
                <li className="hover:text-[#00c16c] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                <Link to="projects" smooth={true} duration={500}>
                    Projects
                </Link>
                </li>
                <li className="hover:text-[#00c16c] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                <Link to="technologies" smooth={true} duration={500}>
                    Technologies
                </Link>
                </li>
                <li className="hover:text-[#00c16c] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                <Link to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
                </li>
            </ul>
        </div>
        {/* hamburger menu */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars size={20} color="#002e34"/> : <FaTimes size={20} color="#002e34" />}
        </div>
        {/* mobile menu */}
        <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#90ff17] flex flex-col justify-center items-center"}>
            <li className="py-6 text-2xl hover:text-[#00c16c]">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                    Home
            </Link>
            </li>
            <li className="py-6 text-2xl hover:text-[#00c16c]">
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                    About
            </Link>
            </li>
            <li className="py-6 text-2xl hover:text-[#00c16c]">
            <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
                    Projects
            </Link>
            </li>
            <li className="py-6 text-2xl hover:text-[#00c16c]">
            <Link onClick={handleClick} to="technologies" smooth={true} duration={500}>
                    Technologies
            </Link>
            </li>
            <li className="py-6 text-2xl hover:text-[#00c16c]">
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                    Contact
            </Link>
            </li>
        </ul>

        {/* social icons */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
              <a 
               className="flex justify-between items-center w-full text-gray-300" 
               href="https://www.linkedin.com/in/juan-obregon-82a63a208/">
               LinkedIn <FaLinkedin size={30} />
              </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#232526]">
              <a 
               className="flex justify-between items-center w-full text-gray-300" 
               href="https://github.com/JuanFelipeObregonRodriguez">
               Github <FaGithub size={30} />
              </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#dd1818]">
              <a 
               className="flex justify-between items-center w-full text-gray-300" 
               href="mailto:juanfelipeobregonrodriguez@gmail.com">
               Gmail <SiGmail size={30} />
              </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#00c16c]">
              <a 
               className="flex justify-between items-center w-full text-gray-300" 
               href="https://drive.google.com/file/d/1UW1ARNbnXx9nZoKJ3-X93WdL47iou9bE/view?usp=share_link">
               Resume <BsFillPersonLinesFill size={30} />
              </a>
          </li>
        </div>
    </div>
  )
}

export default Navbar