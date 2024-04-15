import { Header } from "../assets/Components/Header"
import { Parallax } from '../assets/Components/Parallax'

export const Experience = () => {
    const myexperience = [
        {
            role: 'Software Engineer (Part Time)',
            organization: 'Kenrow Digital Marketing',
            date: 'April 2, 2024',
            intro: ['s'],
            responsibility: [
                "I've been involved in building software applications, with a focus on building the Kenrow Shop's merchant management application as a start.",
                "I've had the pleasure of contributing to the brainstorming and execution of fresh, innovative features that are custom-made for the merchant management application",
                "I troubleshoot and resolve technical issues on software applications",
                "Working hand-in-hand with diverse teams, ensuring we consistently deliver top-notch software solutions"
            ],
            conclusion: ''
        },
        {
            role: 'Freelance Web Developer',
            organization: 'Saculiet Nigeria Enterprises',
            date: 'Jan 3, 2024',
            intro: [
                "I had the opportunity to develop a portal specifically tailored for the Driving School Arm of our company. This portal enables organizations to easily verify the certificates of the students from our driving school",
                "Some key features I implemented include:"
            ],

            responsibility: [
                'A user-friendly page allowing organizations to submit student verification requests with email verification for added security',
                'A comprehensive dashboard for the driving school administration to efficiently manage requests, students, and organizations',
                "Automated email notifications to keep the school informed at every step: from receiving a request submission to granting it, and notifying students when their certificate is verified by an organization."
            ],
            conclusion: 'Additionally, I took charge of designing a captivating landing page and a visually appealing gallery page images and pictures of our driving school, enhancing our online presence and engaging potential students.'
        },

        {
            role: 'Freelance Web Developer',
            organization: 'Christ Liberty Assembly',
            date: 'Dec 12, 2023',
            intro: [
                "I had the privilege of building a website for Christ Liberty Assembly, a beloved church, which features key sections including:"
            ],
            responsibility: [
                'A dedicated page for sharing inspiring sermons, allowing the congregation to access spiritual nourishment anytime, anywhere.',
                'A visually captivating gallery page showcasing images that capture the essence and beauty of the church.',
                'An engaging platform for sharing insightful articles, with individual pages for each article. These articles are easily shareable on social media platforms like Facebook and WhatsApp, or by copying the link to the clipboard.',

                "To enhance accessibility, I implemented a user-friendly search functionality. This feature enables visitors to filter articles by title and sermons by title or preacher, ensuring that they can quickly find the content they're seeking."
            ]
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
                                <p className="text-sm text-gray-400">{experience.date}</p>

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