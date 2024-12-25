 
import './App.css'
import Navbar from './Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Shared/Footer';

function App() { 

  return (
    <div>
      <div className=" container mx-auto">
      <div className="sticky z-10 top-0"> 
      <Navbar/> 
      </div>
      <div className="min-h-[650px]">
        <Outlet />
      </div>
      <Footer />
    </div>
    </div>
  )
}

export default App
