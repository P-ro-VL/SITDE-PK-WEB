import { Route, Routes, useLocation } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import './App.css';
import Navbar from './components/Navbar';
import Mainboard from './components/Mainboard';
import About from './components/About';
import Download from './components/Download';
import Features from './components/Features';
import Footer from './components/Footer';
import { styled } from '@mui/material';

const Blank = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  zIndex: `20`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `100%`,
  height: `50px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

export default function App() {
  const [showScrollUpBtn, setShowScrollUpBtn] = useState(false);

  const [windowSize, setWindowSize] = useState(getWindowSize());

  const [showHighlight, setHighlight] = useState({
    highlightAbout: false,
    highlightDownload: false,
    highlightFeatures: false,
    highlightContact: false,
  });

  const { pathname } = useLocation();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        setShowScrollUpBtn(true);
      } else {
        setShowScrollUpBtn(false);
      }
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (pathname !== '/') {
      setHighlight(
        Object.fromEntries(
          Object.keys(showHighlight).map((key) => [key, false])
        )
      );
    }
  }, [pathname]);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth } = window;
    return { innerWidth };
  }

  const pointRef = useRef(null);
  const areaRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const topRef = useRef(null);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToAbout = () => {
    areaRefs[0].current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToDownload = () => {
    areaRefs[1].current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToFeatures = () => {
    areaRefs[2].current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    areaRefs[3].current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const checkImpact = () => {
      const point = pointRef.current;
      const elements = areaRefs.map((ref) => ref.current);

      if (!point || elements.some((element) => !element)) return;

      const rect1 = point.getBoundingClientRect();

      elements.forEach((element, index) => {
        const rect2 = element.getBoundingClientRect();

        const isImpacting = !(
          rect1.right < rect2.left ||
          rect1.left > rect2.right ||
          rect1.bottom < rect2.top ||
          rect1.top > rect2.bottom
        );

        if (
          window.innerHeight + document.documentElement.scrollTop ===
          document.documentElement.offsetHeight
        ) {
          setHighlight(
            Object.fromEntries(
              Object.keys(showHighlight).map((key) => [
                key,
                key === 'highlightContact' ? true : false,
              ])
            )
          );
        }

        if (window.pageYOffset === 0) {
          setHighlight(
            Object.fromEntries(
              Object.keys(showHighlight).map((key) => [key, false])
            )
          );
        }

        if (isImpacting) {
          switch (index) {
            case 0:
              setHighlight(
                Object.fromEntries(
                  Object.keys(showHighlight).map((key) => [
                    key,
                    key === 'highlightAbout' ? true : false,
                  ])
                )
              );
              break;
            case 1:
              setHighlight(
                Object.fromEntries(
                  Object.keys(showHighlight).map((key) => [
                    key,
                    key === 'highlightDownload' ? true : false,
                  ])
                )
              );
              break;
            case 2:
              setHighlight(
                Object.fromEntries(
                  Object.keys(showHighlight).map((key) => [
                    key,
                    key === 'highlightFeatures' ? true : false,
                  ])
                )
              );
              break;
            case 3:
              setHighlight(
                Object.fromEntries(
                  Object.keys(showHighlight).map((key) => [
                    key,
                    key === 'highlightContact' ? true : false,
                  ])
                )
              );
              break;
            default:
              setHighlight(
                Object.fromEntries(
                  Object.keys(showHighlight).map((key) => [key, false])
                )
              );
              break;
          }
        }
      });
    };

    window.addEventListener('scroll', checkImpact);
    return () => {
      window.removeEventListener('scroll', checkImpact);
    };
  }, [areaRefs]);

  return (
    <div ref={topRef}>
      {showScrollUpBtn && (
        <BsFillArrowUpCircleFill
          onClick={scrollToTop}
          className="fixed right-5 bottom-5 text-3xl sm:text-4xl text-black opacity-20 active:opacity-75 lg:hover:opacity-75 cursor-pointer duration-200 z-20"
        />
      )}
      <div className="fixed bg-none h-1 left-0 right-0 top-44" ref={pointRef} />

      <Navbar
        scrollToAbout={scrollToAbout}
        scrollToDownload={scrollToDownload}
        scrollToFeatures={scrollToFeatures}
        scrollToContact={scrollToContact}
        highlight={showHighlight}
        windowWidth={windowSize.innerWidth}
      />
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Blank />
              <Mainboard scrollToDownload={scrollToDownload} />
              <About position={areaRefs[0]} />
              <Download position={areaRefs[1]} />
              <Features position={areaRefs[2]} />
              <Footer position={areaRefs[3]} />
            </>
          }
        />
      </Routes>
    </div>
  );
}
