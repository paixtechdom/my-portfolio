import { AppContext } from '../../App'
import { useContext, useEffect } from 'react'


export const Alert = () =>{
    const { alertMessage, setShowAlert, alertType } = useContext(AppContext)
    useEffect(() => {
        document.body.style.overflow = 'hidden'
    }, [])
    return(
        <div className="fixed h-screen w-full bg-black bg-opacity-90 center" style={{
            zIndex: 60
        }}>
            <div className={` rounded-xl h-96 w-11/12 md:w-7/12 lg:w-5/12 center flex-col border gap-5  bg-black ${alertType == 'error' ? 'border-red-400' : 'border-green-400'} text-gray-100`}
            >
                <i className={`bi bi-${alertType == 'error' ? 'x-circle-fill text-red-500' : 'check-circle-fill text-green-700'}  text-7xl mb-4`}></i>
                <h3 className='text-center font-bold text-gray-200 text-2xl w-9/12 md:w-full lg:text-3xl'>{alertMessage}</h3>

                <button className='bg-dark bg-gray-900 border w-6/12 lg:w-5/12 px-7 border-gray-100 rounded-xl p-2 mt-6' 
                onClick={() => {setShowAlert(false)
                    document.body.style.overflowY = 'scroll'

                }}
                >Close</button>
            </div>
        </div>
    )
}