import { Header } from "../assets/Components/Header"
import { Parallax } from "../assets/Components/Parallax"

export const Skills = () => {

    const myskills = [
        {
            name: 'React',
        },
        {
            name: 'Javascript',
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
            name: 'PHP',
        },
        {
            name: 'SQL',
        },
        {
            name: 'JSON',
        },
        {
            name: 'SEO',
        },
        {
            name: 'SASS',
        },
        {
            name: 'Git',
        },
        {
            name: 'Github',
        },
        {
            name: 'WordPress',
        },
        {
            name: 'Gitlab',
        },
        {
            name: 'Database',
        },
        {
            name: 'Debugging',
        },
        {
            name: 'DSA',
        },
        {
            name: 'REST API',
        },
        {
            name: 'Responsive Design',
        }

    ]
    return(
    <div id="Skills" className="parent w-full center flex-col z-0">
        <Header text={'Skills'} icon={'code'}/>

        <div className=" w-11/12 md:w-10/12 lg:w-9/12 grid flex-wrap grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 text-gray-100 gap-4">
            {
                myskills.map((skill, i) => (
                    <Parallax id={skill.name.replaceAll(' ', '')} className={`${i == myskills.length - 1 ? 'col-span-3 md:col-span-2' : ''}`}>

                        <div key={i} className={`shadow center text-center p-3 bg-gray-900 rounded-xl text-sm font-bold border border-purple-900 cursor-pointer transition-all duration-1000 hover:scale-90 active:scale-90 hover:animate-bounce `}>
                            {skill.name}
                        </div>
                    </Parallax>
                ))
            }

        </div>

        
    </div>
    )
}