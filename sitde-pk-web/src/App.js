import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Mainboard from './components/Mainboard';
import About from './components/About';
import Download from './components/Download';
import Features from './components/Features';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Mainboard />
              <About />
              <Download />
              <Features />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}
