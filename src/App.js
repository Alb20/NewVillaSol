import './App.css'
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Salon1 from './pages/Salon1/Salon1';
import Salon2 from './pages/Salon2/Salon2';
import Contacto from './pages/Contacto/Contacto';
import Citas from './pages/Citas/Citas';
import Paquetes from './pages/Paquetes/Paquetes';
function App ()  {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/salon1' element = {<Salon1/>}/>
      <Route path='/salon2' element = {<Salon2/>}/>
      <Route path='/contacto' element = {<Contacto/>}/>
      <Route path='/citas' element = {<Citas/>}/>
      <Route path='/paquetesS1' element = {<Paquetes/>}/>
      
    </Routes> 

  );
}

export default App;
