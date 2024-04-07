export const Header = ({icon, text, className}) =>{
    return(
        <div className="flex flex-col w-full center"> 
        <div className="mt-9 w-full"></div>

        <div className="flex mt-9 mb-5 w-11/12 md:w-10/12 lg:w-9/12 bg-blue-90 0 text-gray-200 pb-2 items-center text-2xl lg:text-4xl gap-4 border-b border-gray-400">
            <i className={`bi bi-${icon}`}></i>
            <h2 className="">{text}</h2>
        </div>
        </div>
    )
}