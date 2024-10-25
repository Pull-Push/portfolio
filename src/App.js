import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QRCodeRender from './pages/FrontendMentor/QRCode';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QRCodeRender />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
