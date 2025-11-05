import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Products from './page/Products';
import Profile from './page/Profile';
import Contact from './page/Contact';
import Header from './layout/Header';
import "./scss/main.scss"
function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={< Home /> } />
          <Route path="/products" element={< Products /> } />
          <Route path="/profile" element={ < Profile /> } />
          <Route path="/contact" element={ < Contact /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
