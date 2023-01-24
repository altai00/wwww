import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import foto1 from './img/fone.jpeg'
import foto2 from './img/fonq.jpeg'
import foto3 from './img/fonw.jpeg'
import foto4 from './img/fonr.jpeg'
export default function ControlledCarousel() {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={foto1}
          alt="First slide"
        />
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
        <img
          className="d-block w-100"
          src={foto2}
          alt="Second slide"
        />

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
        <img
          className="d-block w-100"
          src={foto3}
          alt="Third slide"
        />

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
        <img
          className="d-block w-100"
          src={foto4}
          alt="Third slide"
        />

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

