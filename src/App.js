import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Alert from "./components/layout/Alert";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className='flex flex-col justify-between  '>
            <Navbar />

            <main className=' mx-auto px-40 pb-12 h-100 '>
              <Alert />
              <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/user/:login' element={<User />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/*' element={<NotFound />}></Route>
              </Routes>
            </main>
          </div>

          <Footer />
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
