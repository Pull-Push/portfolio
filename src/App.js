import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QRCodeRender from './pages/FrontendMentor/QRCode';
import Landing from './pages/Landing';
import BlogCardRender from './pages/FrontendMentor/BlogPreview';

// WHEN LANDING PAGE IS IMPORTED, ALL CSS IS THROWN OFF. FIND OUT WHY CSS INHERITANCE IS BROKEN


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="/frontendmentor/qr" element={<QRCodeRender />} />
        <Route path='/frontendmentor/blog' element={<BlogCardRender />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
