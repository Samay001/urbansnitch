import {Routes, Route} from 'react-router-dom';
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import PageNotFound from "./pages/pageNotFound";
import Register from './pages/Auth/register';
import Login from './pages/Auth/login';
import Male from './pages/Products/male';
import Female from './pages/Products/female';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/male" element={<Male/>}/>
      <Route path="/female" element={<Female/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    </>
  );
}

export default App;
