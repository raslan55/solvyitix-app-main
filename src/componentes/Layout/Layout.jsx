
import { Outlet } from 'react-router-dom';
import MainNav from '../Navigation/MainNav';
import MainFooter from '../Footer/Footer';

export default function Layout() {



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
