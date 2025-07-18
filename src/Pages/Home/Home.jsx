import { Button, IconButton } from "../../assets/Components/Button"
import { Intro } from "./Intro"
import { useContext, useEffect, useState } from "react"
import { About } from "../About"
import { NewProject } from "../NewProject"
import { Skills } from "../Skills"
import { Projects } from "../Projects"
import { Contact } from "../Contact"
import { AppContext } from "../../App"
import { Navbar } from "../../assets/Components/Navbar"
import { Experience } from "../Experience"




const Home = () => {
    const { currentNav, setCurrentNav, scrolledDown, setScrolledDown } = useContext(AppContext)

    const [ display, setDisplay ] = useState(false)
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

    
 

        return(
            <>
            <div className={`parent w-full h-screen fixed bg-black transition-all duration-[3s] ${display ? 'bg-opacity-0' : 'bg-opacity-1'} ${hideFadeIn ? 'hidden' : 'block'}`} ></div>

            <div id="Home" className="flex items-center lg:justify-center pt-9 flex-col w-full h-screen text-white">
    
                <div className="flex justify-start flex-col w-11/12 md:w-10/12 lg:w-9/12 pt-[20vh] lg:pt-0">
                    <div className="flex flex-col items-center lg:items-start w-full gap-2 text-cente h-scren">
                        <div className="flex gap-1 text-gray-300 text-right">
                            <p>Hi There!</p> 👋👋
                        </div>
                        <p className="text-purple-600 text-2xl md:text-4xl font-bold text-center lg:text-left">I am Oluwaferanmi John,</p>
                        <Intro display={display}/>

                        <Navbar scrolledDown={scrolledDown}/>
                        
                    </div>
                </div>
    
            </div>

             <About />
            <Skills />
            {/* 20.21 seconds */}
            <NewProject />
            <Projects /> 

            {/* add cloud transio */}
            <Experience />

            <Contact />

            <div className="center bg-black h-[10vh] border-t border-purple-900 text-gray-100 py-[8ch] mt-[10ch]">
                <div className="w-11/12 md:w-10/12 center flex-col text-lg gap-4">
                    <p className="text-purple-500 font-bold text-2xl">
                        Oluwaferanmi John
                    </p> 
                    <span>Copyright &copy; {new Date().getFullYear()}</span>
                </div>
            </div>

            <IconButton icon={'arrow-up'} className={`fixed bottom-5 z-50  transition-all duration-1000 ${scrolledDown ? 'right-5' : '-right-[50%]'}`} func={() => {
                document.querySelector('#Home').scrollIntoView({
                    behavior: 'smooth'
                })
            }}/>
            
            </>
        )

}


export default Home
