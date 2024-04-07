import { useContext, useState } from "react"
import { AppContext } from "../../App"
import { Button } from "./Button"


const scrollInto = (id) => {
    document.querySelector(`#${id}`).scrollIntoView({
        behavior: 'smooth'
    })
}


export const Navbar = ({scrolledDown}) => {
    const { showNav, setShowNav } = useContext(AppContext) 
    return(
        <nav className={`py-9 lg:pt-8 transition-all w-full duration-1000 text-gray-300 ${scrolledDown ? 'center flex-col lg:flex-row bg-black lg:bg-transparent fixed gap-5' : ''} top-0 ${showNav ? ' right-[0%] ' : '-right-[100%] lg:right-0'}`}>
            <div className={`lg:hidden ${scrolledDown ? 'pt-9' : 'pt-0'}`}>

                <i className={`bi bi-${showNav ? 'x-lg' : 'list'} fixed top-5  lg:hidden bg-black cursor-pointer text-xl p-1 transition-all duration-1000 center ${scrolledDown ? 'right-5 lg:-right[50%]' : ' -right-[50%]'} px-4 border border-gray-400 h-10 w-10 rounded rounded-tr-[15px] `} onClick={() => setShowNav(!showNav)}></i>
            </div>

            <Nav title='Home' i={0} className={`${scrolledDown ? 'block' : 'hidden'}`} icon={'house-fill'} scrolledDown={scrolledDown}/>

            <span className={`${scrolledDown ? 'hidden' : ''}`}>This is a medium to know </span>   

            <Nav title='About' i={1} icon={'person-fill'} scrolledDown={scrolledDown} />


            <span className={`${scrolledDown ? 'hidden' : ''}`}> me, my</span>                           
            
            <Nav title='Skills' i={2} icon={'code'} scrolledDown={scrolledDown}/>

            <span className={`${scrolledDown ? 'hidden' : ''}`}>, </span>

            <Nav title='Projects' i={3} icon={'journal-code'} scrolledDown={scrolledDown}/>

            <span className={`${scrolledDown ? 'hidden' : ''}`}> I built, and also to</span>

            <Nav title='Contact' i={4} icon={'envelope-fill'} scrolledDown={scrolledDown}/>

            <span className={`${scrolledDown ? 'hidden' : ''}`}> me</span>

            
        </nav>
    )
}


const Nav = ({scrolledDown, icon, title, className, i}) => {
    const { currentNav, setCurrentNav, setShowNav } = useContext(AppContext)


    if(!scrolledDown){
        return(
            <span className={`${className} ml-1 gap-3 cursor-pointer text-blue-400 ${scrolledDown ? '' : 'underline hover:uppercase'}`}
           onClick={() => scrollInto(title)}>
                
                {title.toLowerCase()}<span><i className={`bi bi-${icon} text-lg ${scrolledDown ? 'block w-8 h-8 center text-gray-100 rounded-full' : 'hidden'}`}></i></span></span> 
        )

    }else{
        return(
            <Button showIcon={currentNav == i ? true : false} className={'bg-black w-10/12 lg:w-fit justify-start border-gray-700'} text={title} icon={icon} func={scrollInto} setShowNav={setShowNav}/>
        )
    }
}