import { FaReact, FaSketch } from "react-icons/fa"
import { RiLayoutMasonryFill } from "react-icons/ri"
import { GrGraphQl } from "react-icons/gr"
import { ImDatabase } from "react-icons/im"
import { CgWebsite } from "react-icons/cg"
import { AiFillGithub } from "react-icons/ai"
import { SiNextdotjs } from "react-icons/si"

const Technologies = () => {
  return (
    <div name="technologies" className="w-full bg-[#002e34] text-white">
     {/* Container */}
     <div className="max-w-[1000px] mx-auto p-8 sm:p-4 md:p-8 flex flex-col sm:text-center justify-center w-full">
         <div className="">
             <p className=" tracking-[.10em] text-4xl font-bold inline border-b-4 border-white text-[#fff]">Technologies</p>
             <p className="py-4">These are the technologies I've worked with</p>
         </div>
         <div className="w-full grid grid-cols-1 sm:grid-cols-4 md:grid-cols-3 gap-4 text-center py-8 text-[#002e34]" >
             <div className="bg-[#90ff17] rounded-md py-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:scale-110 duration-500">
                 <CgWebsite size={60} color="#00755c" className="w-20 mx-auto" />
                 <h2 className="text-2xl my-4">Front-End</h2>
                 <p className="py-2">HTML5</p>
                 <p className="py-2">CSS3</p>
                 <p className="py-2">JavaScript + ES6</p>
                 <p className="py-2">TypeScript</p>
             </div>
             <div className="bg-[#90ff17] rounded-md py-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:scale-110 duration-500">
                 <FaReact size={60} color="#00755c" className="w-20 mx-auto" />
                 <h2 className="text-2xl my-4">Libraries</h2>
                 <p className="py-2">React.js</p>
                 <p className="py-2">Redux Toolkit</p>
                 <p className="py-2">Express.js</p>
             </div>
             <div className="bg-[#90ff17] rounded-md py-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:scale-110 duration-500">
                 <SiNextdotjs size={60} color="#00755c" className="w-20 mx-auto" />
                 <h2 className="text-2xl my-4">Frameworks</h2>
                 <p className="py-2">Next.js</p>
                 <p className="py-2">Angular</p>
             </div>
             <div className="bg-[#90ff17] rounded-md py-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:scale-110 duration-500">
                 <GrGraphQl size={60} color="#004443" className="w-20 mx-auto" />
                 <h2 className="text-2xl my-4">API Architecture</h2>
                 <p className="py-2">Restful API</p>
                 <p className="py-2">GraphQL</p>
                 <p className="py-2">Redux</p>
             </div>
             <div className="bg-[#90ff17] rounded-md py-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:scale-110 duration-500">
                 <ImDatabase size={60} color="#00755c" className="w-20 mx-auto" />
                 <h2 className="text-2xl my-4">Back-End</h2>
                 <p className="py-2">Node.js</p>
                 <p className="py-2">Firebase</p>
                 <p className="py-2">SQL</p>
             </div>
             <div className="bg-[#90ff17] rounded-md py-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:scale-110 duration-500">
                 <RiLayoutMasonryFill size={60} color="#004443" className="w-20 mx-auto" />
                 <h2 className="text-2xl my-4">UI Frameworks</h2>
                 <p className="py-2">Bootstrap</p>
                 <p className="py-2">MaterialUI</p>
                 <p className="py-2">TailwindCSS</p>
             </div>
             <div className="bg-[#90ff17] rounded-md py-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:scale-110 duration-500">
                 <FaSketch size={60} color="#00755c" className="w-20 mx-auto" />
                 <h2 className="text-2xl my-4">UX/UI</h2>
                 <p className="py-2">Sketch</p>
                 <p className="py-2">Figma</p>
                 <p className="py-2">Adobe Illustrator</p>
             </div>
             <div className="bg-[#90ff17] rounded-md py-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:scale-110 duration-500">
                 <AiFillGithub size={60} color="#00755c" className="w-20 mx-auto" />
                 <h2 className="text-2xl my-4">More</h2>
                 <p className="py-2">Git</p>
                 <p className="py-2">Github</p>
                 <p className="py-2">npm</p>
             </div>
         </div>
     </div>
    </div>
  )
}

export default Technologies