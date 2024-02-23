import Body from './components/Body'
import {Nav} from './components/Nav'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import References from './pages/References';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import PhaseChanges from './pages/PhaseChanges';
import Water from './pages/Water';

const Routing = ()=>{
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/references' element={<References/>}/>
      <Route path='/phase-changes' element={<PhaseChanges/>}/>
      <Route path='/water' element={<Water/>}/>
    </Routes>
  )
}

const MyContext = createContext();

// Step 2: Create a provider component
const AppProvider = ({ children }) => {
  const [sharedState, setSharedState] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(null)
  const [ changeStyle, setChangeStyle ] = useState(false)
  const [ hidden, setHidden ] = useState(false)
  const toggleMenu = ()=>{setIsMenuOpen(!isMenuOpen)}
  const containerRef = useRef(null)

  return (
    <MyContext.Provider value={{ sharedState, setSharedState, containerRef, changeStyle, setChangeStyle, setHidden, hidden, setIsMenuOpen, isMenuOpen, toggleMenu }}>
      {children}
    </MyContext.Provider>
  );
};

// Step 3: Create a custom hook to consume the context
export const useSharedVals = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useSharedState must be used within a MyProvider');
  }
  return context;
};

function App() {
  console.log(Routing)

  return (

    <AppProvider>
      <div className="flex flex-col ">
        <Nav/>
        <Body content={<Routing/>}/>
        <Footer/>
      </div>
    </AppProvider>

  );
}

export default App;
