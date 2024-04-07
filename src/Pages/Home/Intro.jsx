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
        <div>
                {
                IntroText.map((letter, key) => (
                    key < index ?
                    <span key={key} className="text-5xl xl:text-8xl text-gray-100"> 
                        {letter}
                    </span> : ''
                ))
            }
        </div>
    )

}