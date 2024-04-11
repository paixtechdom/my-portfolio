import { Header } from "../assets/Components/Header"

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
            name: 'Gitlab',
        },
        {
            name: 'Database',
        },
        {
            name: 'Debugging',
        },
        {
            name: 'Responsive Design',
        },

    ]
    return(
    <div id="Skills" className="parent w-full center flex-col">
        <Header text={'Skills'} icon={'code'}/>

        <div className=" w-11/12 md:w-10/12 lg:w-9/12 grid flex-wrap sm:grid-cols-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 text-gray-100 gap-4">
            {
                myskills.map((skill, i) => (
                    <div key={i} className={`center text-center p-3 bg-gray-900 rounded-xl text-sm font-bold border border-gray-700 cursor-pointer transition-all duration-1000 hover:scale-90 active:scale-90 hover:animate-bounce ${i == myskills.length - 1 ? 'col-span-2' : ''}`}>
                        {skill.name}
                    </div>
                ))
            }

        </div>

        
    </div>
    )
}