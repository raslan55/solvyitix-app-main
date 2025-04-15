import  { useEffect, useState } from 'react';


import { Outlet } from 'react-router-dom';
import MainNav from '../Navigation/MainNav';
import MainFooter from '../Footer/Footer';




export default function Layout() {

 const [first, setfirst] = useState(0)

  useEffect(() => {

  }, [])


  return (
 <>
<MainNav/> 
  <div className='container mx-auto'> 
  <Outlet/>
  </div>

<MainFooter/>
   </>
  )
}
