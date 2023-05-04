import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Container/Homepage/Homepage';
import Productpage from './Container/Productpage/Productpage';

function App() {
  return (
    <div className="App">
      
     <Routes>

      <Route path='/' element={<Homepage/>}/>
      <Route path='/product' element={<Productpage/>}/>
      

     </Routes>

    </div>
  );
}

export default App;
