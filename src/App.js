

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <>



      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route excat path='/' element={<Home />} />
          <Route excat path='/about' element={<About />} />
          <Route excat path='/service' element={<Service />} />
          <Route excat path='/contact' element={<Contact />} />
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
