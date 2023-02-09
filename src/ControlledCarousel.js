import React from 'react';
import foto1 from './fon/fone.jpeg'
import foto2 from './fon/fonq.jpeg'
import foto3 from './fon/fonw.jpeg'
import foto4 from './fon/fonr.jpeg'
import Carousel from 'react-bootstrap/Carousel';


export default function CarouselFadeExample() {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel fade activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <div className='images'>   <img
          className="d-block w-100"
          id='prev'
          src={foto1}
          alt="Second slide"
        /></div>
        <Carousel.Caption>
        <h1 className='boy boy1'>MC5 Carbine</h1>
          <p className='npi'>Built from a forged upper and lower AR-15 receiver with a standard <br /> barrel nut interface and mil-spec controls; The MC5 is made for <br />
             abuse and high round counts.
            Buy Now Read More</p>
            <div className='sad'>
              <p className='npm'>Buy Now</p>
             <p className='npx'>Read More</p>
           </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
     <div className='images'>   <img
          className="d-block w-100"
          id='prev'
          src={foto2}
          alt="Second slide"
        /></div>

        <Carousel.Caption>
        <div>
          <h1 className='boy boy2'>MC5 Carbine</h1>
          <p className='bo'>Built from a forged upper and lower AR-15 receiver with a standard <br /> barrel nut interface and mil-spec controls; The MC5 is made for <br />
            abuse and high round counts.
            Buy Now Read More</p>
            <div className='sad sad1'>
            <p className='npm'>Buy Now</p>
            <p className='npx'>Read More</p>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='images'>   <img
          className="d-block w-100"
          id='prev'
          src={foto3}
          alt="Second slide"
        /></div>

        <Carousel.Caption>
        <div>
           <h1 className='boy boy 2'>MC5 Carbine</h1>
           <p className='bi'>Built from a forged upper and lower AR-15 receiver with a standard <br /> barrel nut interface and mil-spec controls; The MC5 is made for <br />
             abuse and high round counts.
             Buy Now Read More</p>
             <div className='sad sad1'>
             <p className='npm'>Buy Now</p>
             <p className='npx'>Read More</p>
             </div>
           </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='images'>   <img
          className="d-block w-100"
          id='prev'
          src={foto4}
          alt="Second slide"
        /></div>

        <Carousel.Caption>
        <div>
          <h1 className='boy boy1'>MC5 Carbine</h1>
          <p className='vox'>Built from a forged upper and lower AR-15 receiver with a standard <br /> barrel nut interface and mil-spec controls; The MC5 is made for <br />
            abuse and high round counts.
            Buy Now Read More</p>
            <div className='sad'>
            <p className='npm'>Buy Now</p>
            <p className='npx'>Read More</p>
            </div>
          </div>
        </Carousel.Caption>
        
      </Carousel.Item>
      
    </Carousel>
  );
}


