// import logo from './logo.svg';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ProyectosPage from './pages/ProyectosPage';
import ContactoPage from './pages/ContactoPage';
import NovedadesPage from './pages/NovedadesPage';
import GaleriaPage from './pages/GaleriaPage';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path= "proyectos" element ={<ProyectosPage />} />
        <Route path= "novedades" element ={<NovedadesPage />} />
        <Route path= "contacto" element ={<ContactoPage />} />
        <Route path= "galeria" element ={<GaleriaPage />} />


      </Routes>
      </BrowserRouter>
      
      <Footer/>
      
    </div>
  );
}

export default App;
