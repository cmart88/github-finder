import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between '>
        <Navbar />
        <main className='container mx-auto px-40 pb-12'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/*' element={<NotFound />}></Route>
          </Routes>
        </main>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
