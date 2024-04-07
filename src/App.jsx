import { useState, createContext } from 'react'
import { createBrowserRouter, RouterProvider, Outlet, Link } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { StaticBg } from './assets/Backgrounds';

export const AppContext = createContext()
const Layout = () => {
  const [ currentNav, setCurrentNav ] = useState(0)
  const [ showNav, setShowNav ] = useState(false)


    return (
      <AppContext.Provider value={{currentNav, setCurrentNav, showNav, setShowNav }}>

        <div className='app min-h-screen'>

          <StaticBg />

        <div className="z-[4] relative text-gray-400">
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
        element: <Home />
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
        element: <h4 className='parent' style={{
          marginTop: 100+'px',
          marginLeft: 50+'px'
        }}>Page not found <Link to='/'>return to the home page</Link></h4>
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
