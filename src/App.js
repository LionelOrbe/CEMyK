
import './App.css';
import Inicio from './components/Inicio';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from './components/Notfound';
import Kinesiologia from './components/Kinesiologia';
import Nutricion from './components/Nutricion';


function App() {
  return (
    <BrowserRouter>
    <div >
    <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route path="/Kinesiología" element={<Kinesiologia />} />
          <Route path="/Nutrición" element={<Nutricion />} />
          <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
