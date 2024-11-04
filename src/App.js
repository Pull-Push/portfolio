import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QRCodeRender from './pages/FrontendMentor/QRCode';
import Landing from './pages/Landing';
import BlogCardRender from './pages/FrontendMentor/BlogPreview';
import SocialLinkRender from './pages/FrontendMentor/SocialLinks';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="/frontendmentor/qr" element={<QRCodeRender />} />
        <Route path='/frontendmentor/blog' element={<BlogCardRender />} />
        <Route path='/frontendmentor/social' element={<SocialLinkRender />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
