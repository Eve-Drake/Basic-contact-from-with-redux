import { Route, Routes } from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';
import './index.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='contact:contactId' element={<Contact />}></Route>
    </Routes>
  
  );
}

export default App;
