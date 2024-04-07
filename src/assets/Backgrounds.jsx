import { useEffect, useState } from 'react'
import './Bg.css'
import me from '../assets/img/me.png'


const StaticBg = () => {
    const [ cursorPos, setCursorPos ] = useState({x: 0, y: 0})

    
    document.addEventListener('mousemove', (e)=> {       
        setCursorPos({x: e.clientX , y: e.clientY})
    })

    return(
        <div className="fixed flex justify-end items-center h-screen bg-black w-full ">

            <img src={me} alt="My Image" className='z-[3] absolute right-0'/>

            <div className="fixed bg-black bg-opacity-90 h-screen w-full z-[4]"></div>

            <div className="blurOverlay h-screen w-full z-[2]"></div>
            <div className="z-[1]">

            <Obj bg={'bg-pink-500'} start={10} cursorPos={cursorPos}/>
            <Obj bg={'bg-blue-500'} start={50} cursorPos={cursorPos}/>
            <Obj bg={'bg-purple-500'} start={90} cursorPos={cursorPos}/>

            </div>
            <CursorLight  cursorPos={cursorPos}/>
        </div>
    )
}

const Obj = ({bg, start}) => {
    const [ pos, setPos ] = useState({ x: start, y: start })


    useEffect(() => {
        const interval = setInterval(() => {
            moveObj()    
        }, 5000);

        return(() => clearInterval(interval))
    }, [])

    const moveObj = () => {
        const q = parseInt((Math.random() * 100).toFixed())
        let x = Math.ceil(q / 10) * 10

        
        const p = parseInt((Math.random() * 100).toFixed())
        let y = Math.ceil(p / 10) * 10

        
        setPos({
            ...pos,
            x: x,
            y: y,
        })
        
    }


    return(
        <div className={`absolute blurLight w-[350px] h-[350px] z-[10] rounded-full flex items-center bg-opacity-1 0 justify-center transition-all duration-[5s] ${bg}`}  style={{
            top: pos.y+'%',
            left: pos.x+'%',
        }}></div>
        )
    }
    
    
    const CursorLight = ({cursorPos}) => {
        return(
        <div className={`absolute blurLight w-[20px] h-[20px] z-[10] rounded-full center items-center justify-center transition-all duration-[1s] bg-white bg-opacity-10 blurOverlay`}  style={{
            top: cursorPos.y - 10,
            left: cursorPos.x - 10  

        }}>
        </div>

    )
}


export { StaticBg }
