

import './koroche.scss'

import pistolet from '../fon/pistolet.png'
import pistolet1 from '../fon/pistolet1.png'
import pistolet2 from '../fon/pistolet2.png'
import pistolet3 from '../fon/pistolet3.png'






function Koroche() {

return(

    <div>
<div className='work'>
    <p className='workp workp1'></p>
    <h1 className='workh1'>Our Products</h1>
    <p className='workp'></p>
    
</div>
<p className='workp2'>All modern weaponts can appreciate our broad services akshay handge pharetra, eratd fermentum feugiat, gun <br/> are best velit mauris aks egestasut aliquam.</p>

<div className=' container workdiv1'>

<div className='workdivs'>
    <img src={pistolet}/>
    <h1 className='workdivh1'>Handguns</h1>
</div>
<div className='workdiv2'>
    <img src={pistolet1}/>
    <h1 className='workdivh1'>Machine guns</h1>
</div>
<div className='workdivs12'>
    <img src={pistolet2}/>
    <h1 className='workdivh1'>Silencers</h1>
</div>
<div className='workdiv12'>
    <img src={pistolet3}/>
    <h1 className='workdivh1'>Gun Bullet</h1>
</div>



</div>
    </div>
)



}
    











export default Koroche;