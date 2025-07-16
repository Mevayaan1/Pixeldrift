// import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import AboutUs from './pages/AboutUs';
// import Directors from './pages/Directors';
// import Products from './pages/Products';
// import Gallery from './pages/Gallery';
// import News from './pages/News';
// import Contact from './pages/Contact';

// export default function App() {
//   return (
//     <div className="font-sans">
//       <Navbar />
//       <main className='pt-16'>
// <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/directors" element={<Directors />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/news" element={<News />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//       </main>
      
//     </div>
//   );
// }
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/AboutUs'
import Contact from './pages/Contact'
import ScrollToTop from "./components/ScrollToTop";
import Directors from './pages/Directors'
import Products from './pages/Products'
import News from './pages/News'
import { AnimatePresence } from 'framer-motion';
import AnimatedCursor from './components/AnimatedCursor';

export default function App() {
  return (
    <>
 {/* <AnimatedCursor /> */}
      <ScrollToTop />
      <AnimatePresence mode='wait'>
        <div className="font-sans">
          <Navbar />
          <main className="pt-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/directors" element={<Directors />} />
              <Route path='/products' element={<Products/>}/>
              <Route path='/news' element={<News/>}/>
            </Routes>
          </main>
        </div>
      </AnimatePresence>
    
      </>
    
  )
}