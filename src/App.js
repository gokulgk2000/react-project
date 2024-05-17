import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/Dashboard';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';

function App() {
  return (
    
      <>
        <Routes>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/homepage" element={<HomePage/>}/>
          <Route path="/aboutpage" element={<AboutPage/>}/>
          <Route path="/contactpage" element={<ContactPage/>}/>
        </Routes>
      </>
   
  );
}

export default App;
