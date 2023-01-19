import  { Button }  from  'react-bootstrap' ;
import  './Header.scss';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logos from './img/logos.png';
import {FaShoppingCart} from 'react-icons/fa'
import {FaSearch} from 'react-icons/fa'
import Karusel from './ControlledCarousel'
function App() {
  return (
    <div className='Header'>
      <header className='box'>
    <div className="con">
      
   <img className='box1' src={logos} alt/>
   <div className='pages'>
   <li className='lil'>HOME</li>
   <li className='lil'>ABOUTE</li>
   <li className='lil'>SERVICES</li>
   <li className='lil'>PAGES</li>
   <li className='lil'>SHOP</li>
   <li className='lil'>BLOG</li>
   <li className='lil'>CONTACT</li>
   <p><FaSearch/></p>
   <p><FaShoppingCart/></p>
   <li></li>
   <li className='box3'>SIGN IN</li>
   </div>
     
    </div>
    </header>
    <div className='karusel'>
  <Karusel/>

    </div>
    
    </div>
  );
}

export default App;
