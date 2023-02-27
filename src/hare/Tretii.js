
import Accordion from 'react-bootstrap/Accordion';
import './tretii.scss'
import Swaiper from '../componenter/Swaiper'
import './den.css'
import {BsFillCalendarCheckFill} from 'react-icons/bs'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {FaMapMarkerAlt} from 'react-icons/fa'
    

function Tretii() {
  return (
    
<div className='tretii'>
    <div className='fan'>
      <p className='pin'></p>
      <h1 className='tema'>Upcoming Events</h1>
      <p className='pin p2'></p>
      <p className='texty'>All modern weaponts can appreciate our broad services akshay handge pharetra, eratd fermentum feugiat, gun <br/> are best velit mauris aks egestasut aliquam.</p>
    </div>



<Accordion id='fan2' defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0" id='fan1' >
        <Accordion.Header>
          <div className='fan2'>
          <h1 className='accardion-h1'>Modern Weapon Trainning Seminar</h1>
          <div className='accardion-div'>
           <div className='lidiv'> <li><BsFillCalendarCheckFill/></li>
            <li>July 25, 2022</li></div>
            <div className='lidiv'><li><AiOutlineClockCircle/></li>
            <li>EST 11.00 to 5.00 </li></div>
          <div className='lidiv'>  <li><FaMapMarkerAlt/></li>
            <li>121, King Street, Melbourne</li></div>
          </div>
          </div>
          </Accordion.Header>
        <Accordion.Body>
        <p className="swipd">Weaponts can appreciate our broad services akshay handge pharetra, eratd fermentum feugiat, gun are best velit mauris aks <br/> egestasut aliquam. This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem <br/> quis bibendum auctor. Read More


</p>
          <Swaiper/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" id='fan1'>
        <Accordion.Header><div className='fan2'>
          <h1 className='accardion-h1'>Modern Weapon Trainning Seminar</h1>
          <div className='accardion-div'>
           <div className='lidiv'> <li><BsFillCalendarCheckFill/></li>
            <li>July 25, 2022</li></div>
            <div className='lidiv'><li><AiOutlineClockCircle/></li>
            <li>EST 11.00 to 5.00 </li></div>
          <div className='lidiv'>  <li><FaMapMarkerAlt/></li>
            <li>121, King Street, Melbourne</li></div>
          </div>
          </div></Accordion.Header>
        <Accordion.Body>
        <p className="swipd">Weaponts can appreciate our broad services akshay handge pharetra, eratd fermentum feugiat, gun are best velit mauris aks <br/> egestasut aliquam. This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem <br/> quis bibendum auctor. Read More


</p>
          <Swaiper/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" id='fan1'>
        <Accordion.Header><div className='fan2'>
          <h1 className='accardion-h1'>Modern Weapon Trainning Seminar</h1>
          <div className='accardion-div'>
           <div className='lidiv'> <li><BsFillCalendarCheckFill/></li>
            <li>July 25, 2022</li></div>
            <div className='lidiv'><li><AiOutlineClockCircle/></li>
            <li>EST 11.00 to 5.00 </li></div>
          <div className='lidiv'>  <li><FaMapMarkerAlt/></li>
            <li>121, King Street, Melbourne</li></div>
          </div>
          </div></Accordion.Header>
        <Accordion.Body>
        <p className="swipd">Weaponts can appreciate our broad services akshay handge pharetra, eratd fermentum feugiat, gun are best velit mauris aks <br/> egestasut aliquam. This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem <br/> quis bibendum auctor. Read More


</p>
          <div className=' container vito'><Swaiper/></div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
</div>

    
  );
}

export default Tretii;