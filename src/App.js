import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/home';
import About from './routes/about';
import Services from './routes/services';
import Contact from './routes/contact';

function App() {
  return (
    <div className='App'>
    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Services />} />
      <Route path='/contact' element={<Contact />} />

    </Routes>
    
   </div>
  );
}

export default App;
