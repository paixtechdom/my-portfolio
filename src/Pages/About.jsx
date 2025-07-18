import { LazyLoadImage } from "react-lazy-load-image-component"
import { Button } from "../assets/Components/Button"
import { Header } from "../assets/Components/Header"
import me from '../assets/img/me.png'
import { Link } from "react-router-dom"
import resume from '/Oluwaferanmijohnresume.pdf' 

export const About = () => {
    return(
    <div id="About" className="parent center flex-col bg-black bg-opacity-80 pb-[10vh]">
        <Header text={'About me'} icon={'person-fill'}/>
        <div className="center flex-col lg:flex-row w-11/12 md:w-10/12 lg:w-9/12 gap-8 lg:gap-[4ch]">

            <div className="center w-full lg:w-5/12 border border-purple-700 h-[40vh] rounded-xl">
                <div className="rounded-full h-40 w-40 bg-gray-100 overflow-hidden ">
                    <LazyLoadImage 
                        src={me} 
                        placeholderSrc={'My Image'} 
                        effect='blur'
                        className="w-fit h-fit border border-purple-600 border-b-0 rounded-t-2xl"
                    />
                    {/* <img src={me} alt={'my i/mage'} /> */}

                </div>
            </div>

            <div className="flex flex-col w-full text-gray-400 tracking-wide leading-relaxed gap-4">
                <p>I am <span className="text-purple-600 fon t-bold">John Oluwaferanmi,</span> a results-driven Web Developer skilled in React, Typescript, Next.js, Tailwind css, WordPress, and PHP. Passionate about improvements, learning new tools, building scalable, high-performance websites with optimized SEO and user experience. 
                </p>
                <p>
                Seeking to contribute expertise to a dynamic team and drive impactful projects.
                </p>

                <p>I am always in for both independent and collaborative projects.</p>

                <a target="_blank" href={resume}>
                    <Button icon={'download'} text={'Download my resume'} className={'w-fit border-purple-600'}/>
                </a>
            </div>

        </div>
        
    </div>
    )
}