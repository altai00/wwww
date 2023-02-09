
import React from 'react';
import './vtoroi.scss'
import fanta from "./fotoolor/fanta.png"
import fantas from "./fotoolor/fantas.png"
import fad from "./fotoolor/fad.png"

import {HiArrowNarrowRight} from "react-icons/hi"



function Vtoroi() {
    return (
        <div>
            <div className='vtoroi'>
                <p className='uchburch'>0</p>
                <h1 className='name'>Who We Are</h1>
                <p className='text'>With state-of-the-art indoor training facilities and full service custom shop on lion, we can <br />accommodate most requests. All modern weapon enthussts can appreciate our broad <br /> services and real-world, experienced staff. With state-of-the-art indoor training facilities and <br /> full service.
                </p>
                <p className='syzyk'></p>
                <p className='jashyl'>“This kiosk will revolutionize the purchasing process of silencers, SBRs, ine ns and in the<br /> class 3 realm.we can accommodate most rests.”</p>

                <p className='text'>All modern weaponts can appreciate our broad services and real-world, exper ienced taff.T <br /> fm nunc. Etiam pharetra, eratd fermentum feugiat, velit mauris aks egestasut aliquam <br /> akshay handge.

                </p>
                <div className='kvadratar'>
                    <p className='kvadrat'>Read More</p>
                    <p className='kvadrata'>Oue Shop</p>
                </div>


            </div>
            <div className='bort'>
                <div className='titanic'>
                    <div className='podlotk'>
                        <h3 className='korabl'>Hunting</h3>
                        <p className='lodka'>Read More  <HiArrowNarrowRight/></p>
                    </div>
                    <img src={fanta} />

                </div>
                <div className='titanica'>
                    <div className='podlotka'>
                        <h3 className='korabl'>Trainning</h3>
                        <p className='lodka'>Read More   <HiArrowNarrowRight/></p>
                    </div>
                    <img src={fantas} />
                </div>
                <div className='titanic'>
                    <div className='podlotk'>
                        <h3 className='korabl'>Shoot Range</h3>
                        <p className='lodka'>Read More   <HiArrowNarrowRight/></p>
                    </div>
                    <img src={fad} />
                </div>
            </div>
        </div>

    )

}
















export default Vtoroi;