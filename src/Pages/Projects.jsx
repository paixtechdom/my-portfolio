import { Link } from "react-router-dom"
import { IconButton } from "../assets/Components/Button"
import { Header } from "../assets/Components/Header"
import { MyProjects } from "../assets/Constants"
import { Parallax } from "../assets/Components/Parallax"
import { LazyLoadImage } from "react-lazy-load-image-component"
import  "react-lazy-load-image-component/src/effects/blur.css"
import  "react-lazy-load-image-component/src/effects/opacity.css"


export const Projects = () => {
    return(
    <div id="Projects" className="parent w-full center flex-col">
        <Header text={'Projects'} icon={'journal-code'}/>
        <div className="center w-11/12 md:w-10/12 lg:w-9/12">

            <div className={`w-full center flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-x-9 gap-9`}>
                {
                    MyProjects.map((project, i) => (
                        <Parallax key={i} id={project?.img?.replaceAll('/', '').replaceAll('.','')} className={''}>
                            <a href={project.link} key={i} className={`flex flex-col relative p-2 py-3 center ${
                                (i + 1) % 2 == 0 ? 'lg:mt-9' :
                                (i +1) % 3 == 0 ? 'xl:mt-[15ch]' :
                                (i - 1) % 3 == 0 ? 'lg:pb-0 xl:mt-[5ch]' :
                                ''}`}>
                                <div className="absolute z-0 h-full w-full rounded-xl bg-gradient-to-l from-black to-black purple-900  via-purple-900 shadow-md shadow-purple-800">
                                    
                                </div>
                                <div className="flex justify-center items-start projectImage md:max-h-64 w-fit overflow-hidden rounded-t-xl z-2">
                                <LazyLoadImage 
                                    src={project.img} 
                                    placeholderSrc={project.title} 
                                    effect='blur'
                                    className="w-fit h-fit border border-gray-400 border-b-0 rounded-t-2xl"
                                
                                />
                                    
                                    {/* <img src={project.img} alt={project.title}  className=""/> */}
                                </div>
                                <div className="z-10 flex p-5 text-sm text-center bg-black bg-opacity-60 rounded-b-xl border  border-gray-400 border-t-0 text-gray-200 items-center w-full">
                                    <i className="bi bi-link-45deg text-xl"></i>
                                    <p className="w-full font-bold tracking-wide leading-relaxed">
                                        {project.title}
                                    </p>
                                </div>
                            </a>

                        </Parallax>
                    ))
                }
            </div>
        </div>
    </div>
    )
}