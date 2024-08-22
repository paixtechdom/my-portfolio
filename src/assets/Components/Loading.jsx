import { useEffect } from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import  "react-lazy-load-image-component/src/effects/blur.css"
import  "react-lazy-load-image-component/src/effects/opacity.css"
export const Loading = () => {
    useEffect(() => {

    }, [])
    return(
        <div className="fixed bg-black border border-purple-900 center w-full h-screen top-0 left-0 flex-col text-purple-300">
            <div className="mt-9 animate-spin border-2 border-purple-900 bg -red-400 transparent size-10">
                
            </div>
            <p className="mt-7 font-bold text-2xl animate-pulse">Oluwaferanmi John</p>
        </div>
    )
}