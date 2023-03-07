
import './news.scss'
import {HiOutlineMail} from 'react-icons/hi'
import Store from '../fon/logos.png';
import Xan2 from '../news/xan2.jpeg'
import Xan3 from '../news/xan3.jpeg'
import Xan4 from '../news/xan4.jpeg'
import Xan5 from '../news/xan5.jpeg'
import Xan6 from '../news/xan6.jpeg'
import  {FaFacebookF} from 'react-icons/fa'
import {TfiTwitter} from 'react-icons/tfi'
import {SlSocialYoutube} from 'react-icons/sl'

import {BsFillCalendarCheckFill} from 'react-icons/bs'
import {FaLongArrowAltRight} from 'react-icons/fa'

function News() {
    
    return(
        <div>

<div className='mail'>
<div className='mail1'>
    <p className='mailsxs'><HiOutlineMail className='mail2'/></p>
    <h1 className='mail3'>Get Our Latest News</h1>
    <p className='mail4'>Subscribe our Newsletter Now !</p>
</div>
<div className='mail5'>
<input className='input2 mail6' type="text" placeholder='Email Address'/>
{/* <input type="email" name="" id="input2">Email Address</input> */}
<p className='mail7'>Subscribe</p>
</div>

</div>
<div className='glavnyi-divka-news'>
    <div className='vybor'>
   <img src={Store}/>
    <p className='vybor2'>All modern weaponts can apprecie our broad <br/>services akshay handge phatum feugiat gun.<br/> This is Photo shop's version of Lorem.

</p>
    <p className='vybor3'>Read More <FaLongArrowAltRight/> </p>
    <div className='vybor4'>
        <p className='vybor5'><FaFacebookF/></p>
        <p className='vybor5'><TfiTwitter/></p>
        <p className='vybor5'><SlSocialYoutube/></p>
        <p className='vybor5'>in</p>
    </div>
</div>
<div className='news-div'>
    <div className='news-div1'>
        <p className='news-p'></p>
        <p className='news-p1'>latest News</p>
    </div>
    <img className='news-img' src={Xan2} />
    <div className='news-div2'>
        
        <p className='news-p2'>
Weapons 2022</p>
        <p className='news-p3'>Weaponts can apprecie
our broad services.</p>
        <p className='news-p4'><BsFillCalendarCheckFill/> 12 Jan 2022</p>
    </div>
    <img className='news-img' src={Xan3} />
    <div className='news-div2'>
        
        <p className='news-p2'>
Weapons 2022</p>
        <p className='news-p3'>Weaponts can apprecie
our broad services.</p>
        <p className='news-p4'><BsFillCalendarCheckFill/> 12 Jan 2022</p>
    </div>
</div>
</div>
<div className='product-div'>
    <div className='product-div1'>
        <p className='product-p'></p>
        <div className='product-p1'>Product Shop
</div>
    </div>
    <div className='product-div2'>
        <img src={Xan4} />
        <img src={Xan5} />
        <img src={Xan3} />
        <img src={Xan6} />
    </div>
    <p className='product-p2'>For More Products and Gun Click Here!</p>
    <p className='product-p3'>Our Shop</p>
</div>
<div className='dash'>
    <p className='dsad'>Copyright © 2022 Weapon Store. Design by Webstrot</p>
    <div className='dashi'>
        <p className='bnt'>PRIVACY POLICY
</p>
        <p className='bnt'>TERMS & CONDITIONS</p>
        <p className='bnt'>COPYRIGHT POLICY</p>
    </div>
</div>
        </div>
    )
}
export default News;