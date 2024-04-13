import { useState } from "react"
import { useEffect } from "react"

export const Parallax = ({id, children, className}) => {
    const [ isPosMatch, setIsPosMatch ] = useState(false)
    const posNo  = 800
    useEffect(() =>{
        
        const pos = document.querySelector(`#${id}`).getBoundingClientRect()
        if(pos.top < posNo){
            setIsPosMatch(true)
        }      
        
    }, [])
    const handleScroll = () => {
        const element = document.querySelector(`#${id}`)
        if(element){
            let pos = element.getBoundingClientRect()
            if(pos.top < posNo){
                setIsPosMatch(true)
            }  

        }
      
    }

    useEffect(() =>{
        document.addEventListener('scroll', handleScroll)
        
    }, [])

    return(
        <div id={id} className={`parallaxParent relative ${className}`}>
            <div className={`relative  transition-all duration-500 ${isPosMatch ? 'animateParallax ' : 'opacity-0'} `}>
                {children}
            </div>
        </div>
    )
}