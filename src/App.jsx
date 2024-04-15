import { useState, createContext, lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider, Outlet, Link } from 'react-router-dom';
// import { Home } from '';
const Home = lazy(() => delayLoad(import('./Pages/Home/Home')))
import { StaticBg } from './assets/Backgrounds';
import { Loading } from './assets/Components/Loading';
import { Alert } from './assets/Components/Alert';

function delayLoad(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

export const AppContext = createContext()
const Layout = () => {
  const [ currentNav, setCurrentNav ] = useState(0)
  const [ showNav, setShowNav ] = useState(false)
  const [ scrolledDown, setScrolledDown ] = useState(false)
  const [ showALert, setShowAlert ] = useState(false)
  const [ alertMessage, setAlertMessage ] = useState('')
  const [ alertType, setAlertType ] = useState('')

    document.addEventListener('scroll', () => {
      if(document.documentElement.scrollTop > 500){
          setScrolledDown(true)
      }else{
          setScrolledDown(false)
      }
  })



    return (
      <AppContext.Provider value={{currentNav, setCurrentNav, showNav, setShowNav, scrolledDown, setScrolledDown, showALert, setShowAlert, alertMessage, setAlertMessage, setAlertType, alertType }}>

        <div className='app min-h-screen'>

          <StaticBg />
          {
            showALert ? 
            <Alert /> : ''
          }

        <div className="z-[4] relative text-gray-400 overflow-hidden">
          <Outlet />
        </div>
      
        </div>
      </AppContext.Provider>
    )

}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path: '/',
        element: 
        <Suspense fallback={<Loading />}>
          <Home />
        </Suspense>
      }
      

      // landing page with each page for each project
      // contact page

      // ,{
      //   path: '/about',
      //   element: <About />
      // },
      // {
      //    path: '/services',
      //   // element: <Services />
      // }
      ,
      {
        path: '/*',
        element: <div className='parent h-screen center flex-col gap-5 w-full text-gray-200 bg-gray-900 border border-purple-900'>Page not found <br />

        <p className='flex gap-2'>Return to the  <Link to='/' className='font-bold'>Home Page</Link></p>
        
        
        </div>
      }
    ]
  }
])

function App() {
  

  return (
    <div className='App'>
      <div>
        <RouterProvider router={router} />

      </div>
    </div>
  );


}
export default App
