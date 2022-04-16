import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Website from './pages/Website';
import Video from './pages/Video';
import Recipe from './pages/Recipe';
import Product from './pages/Product';
function App() {
  return (
    <BrowserRouter>
      <Home />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}

        <Route path="/website" element={<Website />} />
        <Route path="/video" element={<Video />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
