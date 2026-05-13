import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QRCodeRender from './pages/FrontendMentor/QRCode';
import Landing from './pages/Landing';
import BlogCardRender from './pages/FrontendMentor/BlogPreview';
import SocialLinkRender from './pages/FrontendMentor/SocialLinks';
import RecipeRender from './pages/FrontendMentor/Recipe';
import ProjectRender from './pages/Projects';
import NotFound from './pages/NotFound';
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Landing />} />
        <Route path='/projects' element={<ProjectRender />} /> 
        <Route path="/frontendmentor/qr" element={<QRCodeRender />} />
        <Route path='/frontendmentor/blog' element={<BlogCardRender />} />
        <Route path='/frontendmentor/social' element={<SocialLinkRender />} />
        <Route path='/frontendmentor/recipe' element={<RecipeRender />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/terms' element={<Terms />} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
