import React from "react";
import { projects } from "../data/data";

const Projects = () => {
  return (
    <>
    <div name="projects" className="w-full bg-[#002e34] text-white">
    {/* Container */}
    <div className="max-w-[1000px] mx-auto p-8 sm:p-4 md:p-8 flex flex-col justify-center sm:text-center w-full">
        <div>
            <p className="tracking-[.10em] text-4xl font-bold inline border-b-4 border-white text-[#fff]">Projects</p>
            <p className="py-4">These are my projects</p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center py-8">
        {projects.map(({ id, title, description, tags, code, visit }) => (
            <div key={id} className="bg-[#90ff17] rounded-md py-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                <h2 className="text-[#004443] text-2xl my-4">{title}</h2>
                <p className="py-2 ml-2 mr-2 text-[#002e34]">{description}</p>
                <div>
                    <div className="text-[#004443] py-2">Stack</div>
                    {tags.map((tag, i) => (
                    <div className="text-[#004443]">
                      <div key={id}>{tag}</div>
                    </div> 
                    ))}  
                </div>  
                <div className="py-4 space-x-[20px]">
                 <a href={code}><button className="text-white sm:mx-auto px-6 py-3 my-2 bg-[#002e34] rounded-2xl hover:scale-110 duration-500">Code</button></a> 
                 <a href={visit}><button className="text-white sm:mx-auto px-6 py-3 my-2 bg-[#002e34] rounded-2xl hover:scale-110 duration-500">Visit</button></a>
                </div>    
            </div>     
          ))}
        </div>
    </div>
   </div>
   </>
  );
};

export default Projects;
