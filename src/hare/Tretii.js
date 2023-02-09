
import Accordion from 'react-bootstrap/Accordion';
import './tretii.scss'
import Swaiper from '../componenter/Swaiper'
import './den.css'


    

function Tretii() {
  return (
    
<div className='tretii'>
    <div className='fan'>
      <p className='pin'></p>
      <h1 className='tema'>Upcoming Events</h1>
      <p className='pin p2'></p>
      <p className='texty'>All modern weaponts can appreciate our broad services akshay handge pharetra, eratd fermentum feugiat, gun <br/> are best velit mauris aks egestasut aliquam.</p>
    </div>



<Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0" id='fan1' >
        <Accordion.Header id='fan2'>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
        <p className="swipd">Weaponts can appreciate our broad services akshay handge pharetra, eratd fermentum feugiat, gun are best velit mauris aks <br/> egestasut aliquam. This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem <br/> quis bibendum auctor. Read More


</p>
          <Swaiper/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
        <p className="swipd">Weaponts can appreciate our broad services akshay handge pharetra, eratd fermentum feugiat, gun are best velit mauris aks <br/> egestasut aliquam. This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem <br/> quis bibendum auctor. Read More


</p>
          <Swaiper/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
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