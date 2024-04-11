import { useContext, useState } from "react"
import { AppContext } from "../../App"
import { Button, IconButton } from "./Button"


const scrollInto = (id) => {
    document.querySelector(`#${id}`).scrollIntoView({
        behavior: 'smooth'
    })
}


export const Navbar = ({scrolledDown}) => {
    const { showNav, setShowNav } = useContext(AppContext) 
    const ToggleShowNav = () => {
        setShowNav(!showNav)
    }
    return(
        <nav className={`py-9 md:pt-8 transition-all w-full duration-1000 text-gray-300 ${scrolledDown ? 'center flex-col md:flex-row bg-black md:bg-transparent fixed gap-5' : ''} top-0 ${showNav ? ' right-[0%] ' : '-right-[100%] md:right-0'}  z-50`}>

            <div className={`block fixed top-5 md:hidden ${scrolledDown ? 'pt-9 right-5 md:-right[50%]' : 'pt-0 -right-[50%]'}`}>
                <IconButton icon={showNav ? 'x-lg' : 'list'} 
                func={() => ToggleShowNav()}
                />
            </div>

            <Nav title='Home' i={0} className={`${scrolledDown ? 'block' : 'hidden'}`} icon={'house-fill'} scrolledDown={scrolledDown}/>

            <span className={`${scrolledDown ? 'hidden' : ''}`}>This is a medium to know </span>   

            <Nav title='About' i={1} icon={'person-fill'} scrolledDown={scrolledDown} />


            <span className={`${scrolledDown ? 'hidden' : ''}`}> me, my</span>                           
            
            <Nav title='Skills' i={2} icon={'code'} scrolledDown={scrolledDown}/>

            <span className={`${scrolledDown ? 'hidden' : ''}`}>, my </span>

            <Nav title='Experience' i={3} icon={'clock'} scrolledDown={scrolledDown}/>
            
            <span className={`${scrolledDown ? 'hidden' : ''}`}>, </span>

            <Nav title='Projects' i={4} icon={'journal-code'} scrolledDown={scrolledDown}/>


            <span className={`${scrolledDown ? 'hidden' : ''}`}> I built, and also to</span>

            <Nav title='Contact' i={5} icon={'envelope-fill'} scrolledDown={scrolledDown}/>

            <span className={`${scrolledDown ? 'hidden' : ''}`}> me</span>

            
        </nav>
    )
}


const Nav = ({scrolledDown, icon, title, className, i}) => {
    const { currentNav, setCurrentNav, setShowNav } = useContext(AppContext)


    if(!scrolledDown){
        return(
            <span className={`${className} ml-1 gap-3 cursor-pointer text-blue-400 ${scrolledDown ? '' : 'underline '}`}
           onClick={() => scrollInto(title)}>
                
                {title.toLowerCase()}<span><i className={`bi bi-${icon} text-lg ${scrolledDown ? 'block w-8 h-8 center text-gray-100 rounded-full' : 'hidden'}`}></i></span></span> 
        )

    }else{
        return(
            <Button showIcon={currentNav == i ? true : false} className={`bg-black p-3 lg:p-2 w-10/12 md:w-fit justify-start ${currentNav == i ? 'border-gray-200' : 'border-gray-700'}`} text={title} icon={icon} func={scrollInto} setShowNav={setShowNav}/>
        )
    }
}