import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QRCodeRender from './pages/FrontendMentor/QRCode';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/frontendmentor/qr" element={<QRCodeRender />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
