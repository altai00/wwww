import  { Button }  from  'react-bootstrap' ;
import  './Header.scss';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logos from './img/logos.png';
import './Karusel'
function App() {
  return (
    <div className='Header'>
      <header className='box'>
    <div className="con">
      
   <img className='box1' src={logos} alt/>
   <div className='pages'>
   <li>HOME</li>
   <li>ABOUTE</li>
   <li>SERVICES</li>
   <li>PAGES</li>
   <li>SHOP</li>
   <li>BLOG</li>
   <li>CONTACT</li>
   <li></li>
   <li></li>
   <li></li>
   <li>SIGN IN</li>
   </div>
     
    </div>
    </header>
    <div>
    <Karusel/>

    </div>
    
    </div>
  );
}

export default App;
