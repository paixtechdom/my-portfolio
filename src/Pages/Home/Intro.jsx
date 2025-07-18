import { useEffect, useState } from "react";

export const Intro = ({display}) => {
    const text ="A web developer"
    const IntroText = text.split("")

    const [ index, setIndex ] = useState(0)


    useEffect(() => {
        setTimeout(() => {
            {display && 
                setIndex(index > IntroText.length ? IntroText.length : index + 1)
            }
        }, 100);
        
    }, [index, display])

            
    return(
        <div className="text-center lg:text-left w-full">
                {
                IntroText.map((letter, key) => (
                    key < index ?
                    <span key={key} className="text-5xl lg:text-7xl  text-gray-300"> 
                        {letter}
                    </span> : ''
                ))
            }
        </div>
    )

}