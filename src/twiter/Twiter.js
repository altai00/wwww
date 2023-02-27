import './twiter.scss'
import Wter from "../fon/twitter.png"
import Carousel from 'react-bootstrap/Carousel';
import Skymy from '../fon/skymy.jpeg'
function Twiter() {
  return (
    <div>
<div>
      <img className='twiter-icon' src={Wter}/>

      </div>
    
    <div className='twiter-corusel'>
    <Carousel 
    indicators={false}>
        <Carousel.Item>
        <div className='twiter-id'><img
          className="d-block w-100"
          id='twiter-id'
          src={Skymy}
          alt="Second slide"
        /></div>
        <Carousel.Caption>
          <p className='twiteer-p'>New Item on Weapon Store. We are Happy too show my new item on our store Machine Gun
#weapon #gun #webstrot

</p>
          <p className='twiter-p'>
by AkshayHandge @HandgeAkshay - Jan 23, 2022</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <div className='twiter-id'><img
          className="d-block w-100"
          id='twiter-id'
          src={Skymy}
          alt="Second slide"
        /></div>
        <Carousel.Caption>
        <p className='twiteer-p'>New Item on Weapon Store. We are Happy too show my new item on our store Machine Gun
#weapon #gun #webstrot

</p>
          <p className='twiter-p'>
by AkshayHandge @HandgeAkshay - Jan 23, 2022</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='twiter-id'><img
         className="d-block w-100"
         id='twiter-id'
         src={Skymy}
         alt="Second slide"
        /></div>

        <Carousel.Caption>
        <p className='twiteer-p'>New Item on Weapon Store. We are Happy too show my new item on our store Machine Gun
#weapon #gun #webstrot

</p>
          <p className='twiter-p'>
by AkshayHandge @HandgeAkshay - Jan 23, 2022</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    </div>
    </div>
  );
}



export default Twiter;