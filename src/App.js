import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Website from './pages/Website';
import Video from './pages/Video';
import Recipe from './pages/Recipe';
import Product from './pages/Product';
import HowTo from './pages/HowTo';
import Question from './pages/Question';
import LocalBusiness from './pages/LocalBusiness';
function App() {
  return (
    <BrowserRouter>
      <Home />
      <Routes>
        <Route path="/website" element={<Website />} />
        <Route path="/video" element={<Video />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/product" element={<Product />} />
        <Route path="/How-to" element={<HowTo />} />
        <Route path="/faq" element={<Question />} />
        <Route path="/LocalBusiness" element={<LocalBusiness />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
