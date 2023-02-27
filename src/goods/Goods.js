
import './goods.scss'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import '../componenter/swaip.scss'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import foto11 from '../fon/myltyk1.jpeg'
import foto22 from '../fon/myltyk2.jpeg'
import foto33 from '../fon/myltyk3.jpeg'
import foto44 from '../fon/myltyk4.jpeg'
// import required modules



import { Navigation, Mousewheel, Keyboard } from "swiper";

export default function Goods() {
    return (

        <>
            <Swiper id='garden'
                slidesPerView={4}
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide className='dank'><div className='dovd'><img className='garden-mimg' src={foto11}/> <div className='garden-div'>
                <h1 className='garden-h1'>M57 Carbinn </h1>
                 <p className='garde-p'>$1,499,00</p>
                 <p className='garden-p'>Add To Card</p>
                 </div>
                </div>
               

                </SwiperSlide>
                 <SwiperSlide className='dank'><div className='dovd'><img className='garden-mimg' src={foto22}/> <div className='garden-div'>     <h1 className='garden-h1'>M57 Carbinn </h1>
                 
                 
                 <p className='garde-p'>$1,499,00</p>
                 <p className='garden-p'>Add To Card</p></div>
                 
                 
                  </div></SwiperSlide>
                <SwiperSlide className='dank'><div className='dovd'><img className='garden-mimg' src={foto33}/> <div className='garden-div'>
                      <h1 className='garden-h1'> MC5 Carbine</h1>
                
                      <p className='garde-p'>$1,499,00</p>
                 <p className='garden-p'>Add To Card</p></div>
                 
                
                </div></SwiperSlide>
                <SwiperSlide className='dank'><div className='dovd'><img className='garden-mimg' src={foto44}/> <div className='garden-div'>  <h1 className='garden-h1'> MC5 Carbine</h1>
                
                <p className='garde-p'>$1,499,00</p>
                 <p className='garden-p'>Add To Card</p>
                 </div></div>
                
                
                    </SwiperSlide>
                <SwiperSlide className='dank'><div className='dovd'><img className='garden-mimg' src={foto11}/> <div className='garden-div'>
                      <h1 className='garden-h1'> MC5 Carbine</h1>
                
                
                      <p className='garde-p'>$1,499,00</p>
                 <p className='garden-p'>Add To Card</p></div>
                
                </div></SwiperSlide>
                <SwiperSlide className='dank'><div className='dovd'><img className='garden-mimg' src={foto22}/> <div className='garden-div'><h1 className='garden-h1'> MC5 Carbine</h1>
                
                <p className='garde-p'>$1,499,00</p>
                 <p className='garden-p'>Add To Card</p></div>
                
                
                      </div></SwiperSlide>
                <SwiperSlide className='dank'><div className='dovd'><img className='garden-mimg' src={foto33}/> <div className='garden-div'>   <h1 className='garden-h1'> MC5 Carbine</h1>
                <p className='garde-p'>$1,499,00</p>
                 <p className='garden-p'>Add To Card</p></div>
                
                
                   </div></SwiperSlide>
                <SwiperSlide className='dank'><div className='dovd'><img className='garden-mimg' src={foto44}/> <div className='garden-div'>
                      <h1 className='garden-h1'> MC5 Carbine</h1>
                
                      <p className='garde-p'>$1,499,00</p>
                 <p className='garden-p'>Add To Card</p></div>
                
                </div></SwiperSlide>
                <SwiperSlide className='dank'><div className='dovd'><img className='garden-mimg' src={foto11}/> <div className='garden-div'>   <h1 className='garden-h1'> MC5 Carbine</h1>
                
                
                <p className='garde-p'>$1,499,00</p>
                 <p className='garden-p'>Add To Card</p></div>
                
                
                   </div></SwiperSlide> 
              

            </Swiper>
            <p className='View-All'>View All</p>
        </>
    );
}
