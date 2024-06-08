import { useState, useContext, useEffect } from "react"
import { Header } from "../assets/Components/Header"
import { Parallax } from "../assets/Components/Parallax"
import me  from '../assets/img/me.png'
import { AppContext } from "../App"
import { Axios } from "axios" 
import emailjs  from "@emailjs/browser"

export const Contact = () => {
    const { setShowAlert, setAlertMessage, setAlertType } = useContext(AppContext)

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ subject, setSubject ] = useState('')
    const [ nameError, setNameError ] = useState(false)
    const [ messageError, setMessageError ] = useState(false) 
    const [ isSending, setIsSending ] = useState(false) 

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
    useEffect(() => {

    }, [])

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const newName = name.split(' ').join('')
        const newMessage = message.split(' ').join('')
        if(newName.length < 5 || newName == 0){
            setNameError(true)
            setMessageError(false)
        }else if(newMessage.length < 5 || newMessage == 0){
            setMessageError(true)
            setNameError(false)
        }else{
            setIsSending(true)
            setMessageError(false)
            setNameError(false)

            const serviceId = 'service_xhn7c5e';
            const templateId = 'template_seeyysd';
            const publicKey = 'OB73Vlg7iLdz4EZD6';
         
            const data = {
                service_id: serviceId ,
                template_id: templateId,
                template_params: {
                    from_name: name,
                    from_email: email,
                    to_name: 'Oluwaferanmi Peace',
                    message: 
                    'SUBJECT -      ' + subject + 
                    ' MESSAGE -     ' + message
                },
                user_id: publicKey,
            };

            // await Axios.post("https://api.emailjs.com/api/v1.0/email/send", data)
            await emailjs.send(data.service_id, data.template_id, data.template_params, data.user_id)
            .then((response) => {
            setShowAlert(true)
            setAlertType('success')
            setIsSending(false)
            setAlertMessage('Message sent successfully!')
            setName('')
            setEmail('')
            setSubject('')
            setMessage('')
        })
        .catch((error) =>{
            setShowAlert(true)
            setIsSending(false)
            setAlertType('error')
            setAlertMessage('Error sending message')
        })
     }
    }

    
    return(
    <div id="Contact" className="parent center flex-col">
        <Header text={'Contact me'} icon={'envelope-fill'}/>

        <div className="flex flex-col center lg:flex-row w-11/12 md:w-10/12 lg:w-9/12 mt-5 gap-9">
            <div className="center flex-col w-full">
                <div className="flex w-full justify-between px-9 mb-6 border rounded-full p-2 border-purple-900">
                    {
                        contactInfo.map((contact, i) => (
                            <Parallax key={i} id={contact.icon.replaceAll('-','')}>

                            <a target="_blank" href={contact.link} className="items-center bg-b lack w-11 h-11 center text-gray-100 border border-purple-900 rounded-full text-xl hover:scale-125 transition-all duration-500 hover:bg-gray-900  hover:border-0">
                                <i className={`bi bi-${contact.icon}`}></i>
                            </a>
                            </Parallax>
                        ))
                    }
                </div>
                <div className="w-full bg-gray-900 rounded-xl h-96 center border border-purple-900 ">
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
            </div>
            <form action="" id="contactform" className="center w-11/12 flex-col gap-5" onSubmit={handleSubmit}>
                
                <Parallax id={'formname'} className={'w-full'}>
                    <FormInput label={'Name'} icon={'person-fill'} value={name} setValue={setName} type={'text'}/>
                    {
                        nameError ? 
                        <p className="text-red-600 p-2 px-4">Name is too short</p> : ''
                    }
                </Parallax>
                <Parallax id={'formemail'} className={'w-full'}>
                    <FormInput label={'Email'} icon={'envelope-fill'} value={email} setValue={setEmail} type={'email'}/>
                </Parallax>

                <Parallax id={'forsubject'} className={'w-full'}>
                    <FormInput label={'Subject'} icon={'file-text'} value={subject} setValue={setSubject} type={'text'}/>
                    
                </Parallax>


                <Parallax id={'formmessage'} className={'w-full'}>
                    <div className="flex w-full relative text-gray-100">
                    <label htmlFor="" className="bg-black absolute text-sm left-3 -top-3 px-4 flex items-center gap-3">
                    <i className={`bi bi-chat-dots-fill `}></i> 
                    
                    Message
                    </label>

                    <div className="flex border border-purple-900 rounded-2xl shadow-lg center w-full overflow-hidden text-sm">
                        <textarea type='text' placeholder="" className="bg-black bg-opacity-70 w-full p-3 pt-5 px-6 outline-none  focus:initial" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                        
                    </div>                
                    </div>

                    {
                        messageError ? 
                        <p className="text-red-600 p-2 px-4">Message is too short</p> : ''
                    }
                </Parallax>

                <Parallax id={'formsubmit'} className={'w-full'}>
                    <button type="submit" disabled={isSending} className={`bg-black  border border-purple-900 text-gray-200 rounded-2xl w-full  transition-all duration-1000 gap-3 text-xl p-3 center cursor-pointer hover:scale-90 focus:initial`}>
                        {
                            isSending ? 'Sending...' : 'Send Message'
                        }
                        {
                            isSending ? '' : 
                        <i className="bi bi-cursor-fill"></i>
                        }

                    </button>
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

        <div className="flex border border-purple-900 rounded-2xl shadow-lg center w-full overflow-hidden">
            <input type={type} placeholder="" className="bg-black bg-opacity-70 w-full p-3 pt-5 px-6 outline-none focus:initial" value={value} onChange={(e) => setValue(e.target.value)} required/>
            

        </div>
    </div>
        )
}
