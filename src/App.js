import Body from './components/Body'
import {Nav} from './components/Nav'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import References from './pages/References';
import Explore from './pages/Explore';
import { useEffect } from 'react';

const Routing = ()=>{
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/references' element={<References/>}/>
      <Route path='/explore' element={<Explore/>}/>
    </Routes>
  )
}

function App() {
  console.log(Routing)

  return (

    <div className="flex flex-col">
      <Nav/>
      <Body content={<Routing/>}/>
      <Footer/>
    </div>

  );
}

export default App;
