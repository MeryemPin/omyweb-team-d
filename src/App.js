// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import NoMatch from './components/NoMatch';
// import Landing from './components/Landing';
import About from './pages/About';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Main from './pages/Main';
import Services from './pages/Services';

function App() {
  return (
   <div className='start'>
        {/* <Landing /> */}
      <div className="App">
        <Header />
  
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/services" element={<Services />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/case-studies" element={<Services />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/careers" element={<Careers /> }/>
            <Route path="/contact" element={<Contact />}/>
            <Route path='*' element={<NoMatch />}/>
        </Routes>

        <Footer />
      </div>
   </div>
  );
}

export default App;
