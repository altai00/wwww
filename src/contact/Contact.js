

import './contact.scss'
import {FaLongArrowAltRight} from 'react-icons/fa'
function Contact() {


    return(

<div>

<div className='contacty'>
    <div className='option-div'>
        <form>
                
        <input className='input1' type="text" placeholder='Full Name'/>
        <input className='input2' type="text" placeholder='Email Address'/>
        <input className='input3' type="text" placeholder='Phone No.'/>
        

    <select className='options-pervyi'>
        <option>Weapon/Plans</option>
        <option>Weapon/Plans</option>
        <option>Weapon/Plans</option>
        <option>Weapon/Plans</option>
        
      </select>
    <select className='options'>
        <option>Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>
    
      <input className='input4' type="number" placeholder='Age'/>
        <input className='input5' type="text" placeholder='Message'/>

        </form>
        <p className='pinput'>Send Now</p>
    </div>

</div>
<div className='glavnyi-skin'>
<div className='weapon'>
    <p className='skin1'></p>
<h1 className='skin2'>Weapon Trainings
</h1>
<p className='skin3'>With state-of-the-art indoor training facilities and full service custom shop on <br/> lion, we can accommodate most requests.</p>
<h1 className='skin4'>P. +880 451 455</h1>
<p className='skin5'>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem is bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh idlit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt.</p>
<p className='skin6'> <FaLongArrowAltRight className='in'/>        Trainning x2 Hand Gun Full Pack</p>
<p className='skin7'> <FaLongArrowAltRight className='in'/>        Machine Gun CS5 4141 Full Pack</p>
<p className='skin8'> <FaLongArrowAltRight className='in'/>        Custom Shooting Range For Trainning</p>
<p className='skin9'> <FaLongArrowAltRight className='in'/>        Outfitters hunting and tactical shooting</p>
</div>
</div>






</div>

    )
    
}



















export default Contact;



