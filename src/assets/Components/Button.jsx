import { Link } from "react-router-dom"
import { useEffect, useState } from "react"


export const Button = ({text, className, type, icon, func, showIcon, setShowNav}) => {
            const [ hovered, setHovered ] = useState(false)
            useEffect(() => {
                setHovered(showIcon)
            }, [showIcon])

           return(
            <div className={`cursor-pointer text-sm p-1 center transition-all duration-500 px-4 border border-gray-400 h-fit w-fit rounded-lg rounded-tr-[20px] ${className} flex gap-3 overflow-hidden`} 
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