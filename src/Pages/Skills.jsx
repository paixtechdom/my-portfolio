import { Header } from "../assets/Components/Header"
import { Parallax } from "../assets/Components/Parallax"

export const Skills = () => {

    const myskills = [
        {
            name: 'React',
        },
        {
            name: 'Typescript',
        },
        {
            name: 'Javascript',
        },
        {
            name: 'Next.js',
        },
        {
            name: 'Tailwind',
        },
        {
            name: 'PHP',
        },
        {
            name: 'Wordpress',
        },
        {
            name: 'SQL',
        },
        {
            name: 'Git',
        },
        {
            name: 'HTML',
        },
        {
            name: 'CSS',
        },
        {
            name: 'Bootstrap',
        },
        {
            name: 'REST API',
        },
        {
            name: 'SEO',
        },
        {
            name: 'DSA',
        }
    ]



    return(
    <div id="Skills" className="parent w-full center flex-col z-0 py-9 pb-[10vh]">
        <Header text={'My skills'} icon={'code'}/>

        <div className=" w-11/12 md:w-10/12 lg:w-9/12 grid flex-wrap grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 text-gray-400 gap-4">
            {
                myskills.map((skill, i) => (
                    <Parallax key={i} id={skill.name.replaceAll(' ', '').replaceAll('.','')}>
                        <div className={`shadow center text-center p-3 bg-black bg-opacity-40 backdrop-blur-sm gray-950 rounded-xl text-sm tracking-wider border border-purple-900 cursor-pointer transition-all duration-1000 hover:scale-90 active:scale-90  hover:bg-purple-950`}>
                            {skill.name}
                        </div>
                    </Parallax>
                ))
            }

        </div>

        
    </div>
    )
}