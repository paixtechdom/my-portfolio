import { Button } from "../../assets/Components/Button"
import { Intro } from "./Intro"
import { useContext, useEffect, useState } from "react"
import { About } from "../About"
import { Skills } from "../Skills"
import { Projects } from "../Projects"
import { Contact } from "../Contact"
import { AppContext } from "../../App"
import { Navbar } from "../../assets/Components/Navbar"




export const Home = () => {
    const { currentNav, setCurrentNav } = useContext(AppContext)

    const [ display, setDisplay ] = useState(false)
    const [ scrolledDown, setScrolledDown ] = useState(false)
    const [ hideFadeIn, setHideFadeIn ] = useState(false)

    useEffect(() => {
        document.addEventListener('scroll', handleScroll)
        setTimeout(() => {
            setDisplay(true)
            setTimeout(() => {
                setHideFadeIn(true)
            }, 3000);
        }, 500);

    }, [])

    const handleScroll = () => {
        document.querySelectorAll('.parent').forEach((parent, i) =>{
            const pos = parent.getBoundingClientRect()
            if(pos.top < 200) {
                setCurrentNav(i)
            } 
        }) 
    }

    document.addEventListener('scroll', () => {
        if(document.documentElement.scrollTop > 500){
            setScrolledDown(true)
        }else{
            setScrolledDown(false)
        }
    })
 

        return(
            <>
            <div className={`parent w-full h-screen fixed bg-black transition-all duration-[3s] ${display ? 'bg-opacity-0' : 'bg-opacity-1'} ${hideFadeIn ? 'hidden' : 'block'}`} ></div>

            <div id="Home" className="center flex-col w-full h-screen text-white">
    
                <div className="flex justify-start flex-col w-11/12 md:w-10/12 lg:w-9/12 bg-blue-20 0">
                    <div className="flex flex-col w-11/12 gap-2">
                        <div className="flex cente r gap-1 text-gray-300">
                            <p>Hi There!</p> 👋👋
                             Indeed global, CV, word keep
                        </div>
                        <p className="text-blue-400 text-xl md:text-4xl font-bold">I am Oluwaferanmi John</p>
                        <Intro display={display}/>

                        <Navbar scrolledDown={scrolledDown}/>
                        
                    </div>
                </div>
    
            </div>

             {/* <About />
            <Skills />
            <Projects />  */}
            <Contact />
            
            </>
        )

}


