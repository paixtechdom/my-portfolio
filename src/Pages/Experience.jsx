import { Header } from "../assets/Components/Header"
import { Parallax } from '../assets/Components/Parallax'

export const Experience = () => {
    const myexperience = [
        {
            organization: 'AMAZING GRACE COMPUTERS',
            date: "May 2022 – Aug 2022",
            role: 'Instructor & Web Development Tutor',
            responsibility: [
                "Delivered hands-on training in HTML, CSS, JavaScript, and WordPress.",
                "Assisted students in developing personal and commercial web projects.",
                "Created and maintained course materials, improving learning efficiency"
            ],
        },
        {
            organization: 'EDUAID CONSULT',
            date: "Nov 2022 – Dec 2023",
            role: 'Web Developer & Website Manager',
            responsibility: [  
                "Designed and developed responsive, SEO-optimized websites for an educational consultancy.",
                "Improved website traffic by 30% through SEO and performance optimization.", 
                "Provided technical support and regular updates to ensure smooth website functionality."
            ]          
        },
        {
            organization: 'SACULIET NIGERIA ENTERPRISES',
            date: "Dec 2023 – June 2024",
            role: 'Web Developer',
            responsibility: [  
                "Developed a secure certificate verification portal for a driving school.",
                "•	Designed and implemented a visually engaging multi page site, consisting of a registration page and gallery, which effectively increased conversion of visitors into new students..",
                "Implemented performance optimizations, reducing page load time by 40%."
            ]          
        },
        {
            organization: 'ONIDSON TRAVELS AND LOGISTICS LTD',
            date: "June 2024 – Dec 2024",
            role: 'Web Developer',
            responsibility: [  
                "Built a fully functional website for a travel agency, showcasing services and aviation courses",
                "Integrated a customer inquiry contact form, improving lead generation.",
                "Enhanced site navigation and responsiveness for a seamless user experience."
            ]          
        },
        {
            organization: 'PAIX TECHDOM',
            role: 'Founder & Lead Web Developer',
            date: "Dec 2022 – Present",
            responsibility: [
                "Established a web development agency, delivering custom digital solutions for businesses.",
                "Led a team in developing high-performing websites with modern UI/UX principles.",
                "Spearheaded SEO strategies that improved client search rankings by 50%."
            ],
        },
    ]

    return(
    <div id="Experience" className="parent center flex-col">
        <Header text={'Relevant Experience'} icon={'people-fill'}/>
        
        <div className="w-11/12 md:w-10/12 lg:w-9/12 center flex-col gap-6 ">
            {
                myexperience.map((experience, i) => (
                    <div key={i} className={`flex flex-col
                    w-full text-gray-300 bg-black bg-opacity-50 mb-9 mt-3 rounded-xl ${i == 0 ? 'col-span-2' : ''} tracking-wide leading-relaxed `}>
                        
                        <div className="flex flex-col gap-3 bg-gray-900 p-4 lg:p-5 lg:px-9 rounded-t-xl">
                            <p className="text-xl font-bold text-gray-300">
                                {experience.organization}
                            </p>
                            <div className="flex justify-between text-sm flex-col md:flex-row">
                                <p className="">{experience.role}</p>
                                <p className="">{experience.date}</p>
                            </div>

                        </div>
                        <div className="flex flex-col p-4 lg:p-9 text-[15px] lg:text-[16px] border pt-6 border-t-0 border-purple-900 rounded-b-xl">
                            {
                                experience.responsibility.map((resp, j) => (
                                    <Parallax key={j} id={(resp[0]+resp[2]+resp[3]+resp[4]).replaceAll(' ', '')}>

                                        <div key={j} className={`flex gap-3 w-full min-h-5 overflow-hidden`}>
                                            <div className="flex flex-col items-center">
                                                <p className="h-3 w-3 rounded-full bg-purple-600"></p>
                                                <p className="w-1 h-4/5 border border-purple-600 bg-black bg-opacity-70 border-t-0"></p>
            
                                            </div>
                                            <p className={`w-full ${j == experience.responsibility.length - 1 ? 'pb-2' : 'pb-5'}`}>{resp}</p>
                                            
                                        </div>
                                    </Parallax>
                                ))
                            }
                           
                        </div>
                    </div>
                ))
            }

        </div>
        
    </div>
    )
}