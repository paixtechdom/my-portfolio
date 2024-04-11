import { useEffect, useState } from "react";

export const Intro = ({display}) => {
    const text = 'Welcome to my Portfolio website'
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
        <div className="">
                {
                IntroText.map((letter, key) => (
                    key < index ?
                    <span key={key} className="text-6xl lg:text-7xl text-gray-300"> 
                        {letter}
                    </span> : ''
                ))
            }
        </div>
    )

}