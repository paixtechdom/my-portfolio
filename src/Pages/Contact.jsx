import { useState } from "react"
import { Header } from "../assets/Components/Header"
import { Parallax } from "../assets/Components/Parallax"
import me  from '../assets/img/me.png'

export const Contact = () => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ message, setMessage ] = useState('')

    const contactInfo = [
      
        {
            icon: 'envelope-fill',
            h3: 'Email',
            a: 'johnoluwaferanmi0106@gmail.com',
            link: 'mailto:johnoluwaferanmi0106@gmail.com'
        },
        {
            icon: 'whatsapp',
            h3: 'Whatsapp',
            a: '+234-706-373-0930',
            link: 'https://api.whatsapp.com/send?phone=2347063730930'
        },
        {
            icon: 'github',
            h3: 'Github',
            a: 'Paix Techdom',
            link: 'https://github.com/paixtechdom'
        },
        {
            icon: 'linkedin',
            h3: 'Linkedin',
            a: 'Oluwaferanmi John',
            link: 'https://www.linkedin.com/in/oluwaferanmi-john'
        },
        {
            icon: 'facebook',
            h3: 'Facebook',
            a: 'Oluwaferanmi Peace',
            link: 'https://www.facebook.com/oluwaferanmi.peace.96'
    
        },
        
    ]
    
    return(
    <div id="Contact" className="parent center flex-col">
        <Header text={'Contact'} icon={'envelope-fill'}/>

        <div className="flex flex-col center lg:flex-row w-11/12 md:w-10/12 lg:w-9/12 mt-5 gap-9">

            <div className="w-full bg-gray-900 rounded-xl h-96 center border border-gray-700 ">
                    <div className="flex flex-col w-full text-4xl justify- gap-4 bg-blue- items- center " onClick={() => {
                        document.querySelector('#contactform').scrollIntoView({
                            behavior: 'smooth'
                        })
                    }}>
                        <Parallax id={'myimage'}>
                            <div className="h-40 w-40 center rounded-full bg-gray-200 overflow-hidden">
                                <img src={me} alt="My Image" className="w-fit h-full"/>

                            </div>

                        </Parallax>
                        {/* <i className="bi bi-person-plus-fill center bg-gray-100 text-gray-900 h-20 w-20 border rounded-full"></i> */}
                        <Parallax id={'onboard'}>
                            <div className="flex items-center cursor-pointer">
                                <p className=" flex items-center gap-4 lining-nums"> 
                                Onboard me 
                                </p>
                                <i className="bi bi-arrow-right hidden lg:block animate-bounce-x"></i>
                                <i className="bi bi-arrow-down lg:hidden animate-bounce"></i>
                            </div>
                        </Parallax>

                    </div>
              
            </div>
            <form action="" id="contactform" className="center w-11/12 flex-col gap-5">
                <div className="flex w-full justify-between px-9 mb-6 border rounded-full p-2 border-gray-400">
                {
                    contactInfo.map((contact) => (
                        <Parallax id={contact.icon.replaceAll('-','')}>

                        <a href={contact.link} className="items-center bg-b lack w-11 h-11 center text-gray-100 border border-gray-700 rounded-full text-xl hover:scale-125 transition-all duration-500 hover:bg-gray-900  hover:border-0">
                            <i className={`bi bi-${contact.icon}`}></i>
                        </a>
                        </Parallax>
                    ))
                }
                </div>
                <Parallax id={'formname'} className={'w-full'}>
                    <FormInput label={'Name'} icon={'person-fill'} value={name} setValue={setName} type={'text'}/>
                </Parallax>
                <Parallax id={'formemail'} className={'w-full'}>
                    <FormInput label={'Email'} icon={'envelope-fill'} value={email} setValue={setEmail} type={'email'}/>
                </Parallax>


                <Parallax id={'formmessage'} className={'w-full'}>
                    <div className="flex w-full relative text-gray-100">
                    <label htmlFor="" className="bg-black absolute text-sm left-3 -top-3 px-4 flex items-center gap-3">
                    <i className={`bi bi-chat-dots-fill `}></i> 
                    
                    Message
                    </label>

                    <div className="flex border border-gray-400 rounded-2xl shadow-lg center w-full overflow-hidden text-sm">
                        <textarea type='text' placeholder="" className="bg-black bg-opacity-70 w-full p-3 pt-5 px-6 outline-none " value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        
                    </div>                
                    </div>
                </Parallax>

                <Parallax id={'formmessage'} className={'w-full'}>
                    <div className={`bg-gray-900 text-gray-100 rounded-2xl w-full  transition-all duration-1000 gap-3 text-xl p-3 center cursor-pointer hover:scale-90`}>
                        Send Message

                        <i className="bi bi-cursor-fill"></i>
                    </div>
                </Parallax>
            </form>
        </div>
    </div>
    )
}



const FormInput = ({label, icon, value, setValue, type, isTextArea}) => {
    return(
        <div className="flex w-full relative text-gray-100 text-sm z-0">
        <label htmlFor="" className="bg-black absolute left-3 -top-3 px-4 flex items-center gap-3">
        {
            icon !== '' ? 
            <i className={`bi bi-${icon}`}></i> : ''
        } 
        {label} 
            </label>

        <div className="flex border border-gray-400 rounded-2xl shadow-lg center w-full overflow-hidden">
            <input type={type} placeholder="" className="bg-black bg-opacity-70 w-full p-3 pt-5 px-6 outline-none " value={value} onChange={(e) => setValue(e.target.value)}/>
            

        </div>
    </div>
        )
}
