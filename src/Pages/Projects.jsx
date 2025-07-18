import { Header } from "../assets/Components/Header"
import { MyProjects } from "../assets/Constants"
import { LazyLoadImage } from "react-lazy-load-image-component"
import  "react-lazy-load-image-component/src/effects/blur.css"
import  "react-lazy-load-image-component/src/effects/opacity.css"


export const Projects = () => {
    return(
    <div id="" className=" w-full center flex-col">
        <Header text={'Other projects'}/>
        <div className="center w-11/12 md:w-10/12 lg:w-9/12">

            <div className={`w-full flex items-start justify-center flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-x-9 gap-9`}>
                {
                    MyProjects.map((project, i) => (
                            <a target="_blank" href={project.link} key={i} className={`flex flex-col relative p-3 center w-full`}>
                                <div className="absolute z-0 h-full w-full rounded-xl bg-gradient-to-l from-black to-black via-[rgb(70,1,70)] border border-purple-900">
                                    
                                </div>
                                <div className="flex justify-center items-start projectImage lg:max-h-[35vh] w-full lg:w-fit overflow-hidden rounded-t-lg z-2 border border-purple-900 border-b-0 min-h-[30vh]">
                                    <LazyLoadImage 
                                        src={project.img} 
                                        placeholderSrc={project.title} 
                                        effect='blur'
                                        className="w-full min-w-full lg:w-fit h-fit "
                                    />
                                </div>
                                <div className="z-10 flex p-5 text-sm text-left bg-black bg-opacity-60 rounded-b-lg border  border-purple-900 border-t-0 text-gray-200 items-center w-full">
                                    <p className="w-full font-bold tracking-[1.5px] leading-relaxed">
                                        {project.title}
                                    </p>
                                    <i className="bi bi-link-45deg text-xl"></i>
                                </div>
                            </a>
                    ))
                }
            </div>
        </div>
    </div>
    )
}