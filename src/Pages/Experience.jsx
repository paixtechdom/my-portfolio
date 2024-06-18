import { Header } from "../assets/Components/Header"
import { Parallax } from '../assets/Components/Parallax'

export const Experience = () => {
    const myexperience = [
        {
            organization: 'Web Developer',
            role: 'PAIX TECHDOM',
            intro: ['s'],
            responsibility: [
                "Developed and maintained responsive websites and web apps.",
                "Debugged and optimized code for performance and scalability.",
                "Conducted web design and collaborated with clients to meet project requirements.",
                "Utilized Git for version control and code management."
            ],
            conclusion: ''
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
                                {experience.role}
                            </p>
                            <div className="flex justify-between">
                                <p className="">{experience.organization}</p>
                            </div>

                        </div>
                        <div className="flex flex-col p-4 lg:p-9 text-[15px] lg:text-[16px] border pt-6 border-t-0 border-purple-900 rounded-b-xl">
                                {
                                    experience.intro.map((int, j) => (
                                        int !== 's' &&
                                        <Parallax key={j} id={
                                            i == 1 ? 'mn' :
                                            i == 2 ? 'e2' : 'fss'}>
                                        <p key={j} className="mb-4">{int}</p>
                                        </Parallax>
                                    ))
                                }

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
                            <Parallax id={i == 1 ? 'tltn' : 'djtepi'}>
                                <p className="mt-4">{experience.conclusion}</p>

                            </Parallax>
                        </div>
                    </div>
                ))
            }

        </div>
        
    </div>
    )
}