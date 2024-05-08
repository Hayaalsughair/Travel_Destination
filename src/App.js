import Home from '../src/component/home/Home';
import Navbar from '../src/component/navbar/Navbar';
import TourDetails from '../src/component/tourDetails/TourDetails';
import { Route, Routes } from 'react-router-dom';
import Footer from './component/footer/Footer';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/tour/:id' element ={<TourDetails />} />
      </Routes>
    <Footer />

    </>

  );
}

export default App;
