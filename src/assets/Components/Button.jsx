import { Link } from "react-router-dom"
import { useEffect, useState } from "react"


const Button = ({text, className, type, icon, func, showIcon, setShowNav}) => {
            const [ hovered, setHovered ] = useState(false)
            useEffect(() => {
                setHovered(showIcon)
            }, [showIcon])

           return(
            <div className={`cursor-pointer text-sm p-1 center transition-all duration-500 px-4 border border-gray-400 h-fit rounded-xl rounded-tr-[20px] ${className} flex gap-3 overflow-hidden`} 
            onClick={() => {
                func(text)
                setShowNav(false)
            }}
            onMouseOver={() => {
                setHovered(true)
            }} 

            onMouseOut={() => {
                setHovered(showIcon ? true : false)
            }} 
            >
                {text.toUpperCase()}

                <p className={`rounded-full bg-purple-900 bg-opacity-[0.6] text-sm transition-all duration-500 h-7 center ${hovered ? "translate-y-0 w-7" : "w-0 translate-y-10"}`}>
                    <i className={`bi bi-${icon}`}></i>
                </p>
            </div>
        )
}


const IconButton = ({icon, func, className}) => {
    return(
        <i className={`bi bi-${icon} ${className} bg-gray-900 cursor-pointer text-xl transition-all duration-1000 center p-6 border border-purple-600 h-10 w-10 rounded rounded-tl-[15px] text-purple-200`} 
        onClick={() => func()}
        ></i>
    )
}

export { Button, IconButton}