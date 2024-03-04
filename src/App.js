
import { Nav } from './components/Nav'
import Footer from './components/Footer'
import { Route, Routes, Switch } from 'react-router-dom';
import { Suspense, createContext, lazy, useContext, useEffect, useRef, useState } from 'react';
import PhaseChanges from './pages/PhaseChanges';
import QuizCTA from './components/QuizCTA';
import Lenis from '@studio-freight/lenis';


// import Home from './pages/Home';
// import About from './pages/About';
// import References from './pages/References';
// import Water from './pages/Water';

const Home = lazy(()=>import('./pages/Home'))
const About = lazy(()=>import('./pages/About'))
const References = lazy(()=>import('./pages/References'))
const Water = lazy(()=>import('./pages/Water'))

const Routing = () => {
  return (
    <Suspense fallback={<div className='h-[100dvh] w-[100dvw] bg-white absolute z-[999] top-0 right-0'></div>}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/references' element={<References />} />
        <Route path='/phase-changes' element={<PhaseChanges />} />
        <Route path='/water' element={<Water />} />
      </Routes>
    </Suspense>
  )
}

const MyContext = createContext();

// Step 2: Create a provider component
const AppProvider = ({ children }) => {
  const [sharedState, setSharedState] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(null)
  const [changeStyle, setChangeStyle] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const toggleMenu = () => { setIsMenuOpen(!isMenuOpen) }
  const containerRef = useRef(null)

  return (
    <MyContext.Provider value={{ sharedState, setSharedState, containerRef, changeStyle, setChangeStyle, setHidden, hidden, setIsMenuOpen, isMenuOpen, toggleMenu, isOpen, setIsOpen }}>
      {children}
    </MyContext.Provider>
  );
};


export const useSharedVals = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useSharedState must be used within a MyProvider');
  }
  return context;
};

function App() {
  // console.log(Routing)
  // useEffect(() => {
  //   const lenis = new Lenis()
  //   function raf(time) {
  //     lenis.raf(time)
  //     requestAnimationFrame(raf)
  //   }
  //   requestAnimationFrame(raf)
  // }, [])
  return (

    <AppProvider>
      <div className="flex flex-col ">
        <Nav />
        <Routing />
        <QuizCTA />
        <Footer />
      </div>

    </AppProvider>

  );
}

export default App;
