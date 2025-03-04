
import './App.css';
import Home from './home';
import Header from './header';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Footer from './footer';



function App() {
  return (
   
    <BrowserRouter>
        
          <Header/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>

              
          </Routes>

          <Footer/>
   

     
    </BrowserRouter>
    
      
   
  );
}

export default App;
