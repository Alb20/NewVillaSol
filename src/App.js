import './App.css'
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Salon1 from './pages/Salon1/Salon1';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/salon1' element= {<Salon1/>}/>
    </Routes>

  );
}

export default App;
