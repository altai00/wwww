
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import '../componenter/swaip.scss'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import foto1 from '../fon/fone.jpeg'
import foto2 from '../fon/fonq.jpeg'
import foto3 from '../fon/fonr.jpeg'
import foto4 from '../fon/fonw.jpeg'

// import required modules



import { Navigation, Mousewheel, Keyboard } from "swiper";

export default function App() {
    return (

        <>
            <Swiper
                slidesPerView={3}
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Mousewheel, Keyboard]}
                className="mySwiper"
            >
               
              
               <SwiperSlide><img src={foto1}/></SwiperSlide>
                <SwiperSlide><img src={foto2}/></SwiperSlide>
                <SwiperSlide><img src={foto3}/></SwiperSlide>
                <SwiperSlide><img src={foto4}/></SwiperSlide>
                <SwiperSlide><img src={foto1}/></SwiperSlide>
                <SwiperSlide><img src={foto2}/></SwiperSlide>
                <SwiperSlide><img src={foto3}/></SwiperSlide>
                <SwiperSlide><img src={foto4}/></SwiperSlide>
                <SwiperSlide><img src={foto1}/></SwiperSlide>
             

            </Swiper>
        </>
    );
}
