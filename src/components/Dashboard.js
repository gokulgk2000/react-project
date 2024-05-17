import React, { useEffect } from 'react';
import Navigation from './Navigation';
import { useMenu } from './context/MenuContext';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { selectedMenuItem } = useMenu();
  const navigate = useNavigate()

  console.log("selectedMenuItem",selectedMenuItem)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("authUser"))
    if(!user){
        navigate("/register")
    }
  },[])
  return (
    <div className="grid grid-cols-2">
    <div>     
     <Navigation />
     </div>
<div>
      <div className="content">
        {selectedMenuItem === 'home' && <HomePage />}
        {selectedMenuItem === 'about' && <AboutPage />}
        {selectedMenuItem === 'contact' && <ContactPage />}
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
