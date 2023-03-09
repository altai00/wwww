import { Button } from 'react-bootstrap';
import React from 'react';
import './index.css'
import './Header.scss';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logos from './fon/logos.png';
import { FaShoppingCart } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import Karusel from './ControlledCarousel'
import Order from './Order';
import Buton from './Buton.js'
import Contact from './contact/Contact.js'
let zakaz = <Contact/>
const showOrders = (props) => {
    let summa = 0

    props.orders.forEach(el =>  {console.log(el.price);
        return summa += Number.parseFloat(el.price)})
    
    return(<div>
        {props.orders.map(el => (
        <Order onDelete={props.onDelete} key={el.id} item={el}/>
    ))}
    <p className='summa'>Сумма: { summa} $  
    <a className='zakaza' href={zakaz}>Заказать</a></p>
    {/* <p className='contact'> {zakaz}Заказать</p> */}
    
    </div>)
}
const showNothing = () => {
    return (<div className='empty'>
        <h2>Товаров нет🗿</h2>
    </div>)
}
function Header(props) {
    let [cartOpen, setCartOpen] = React.useState(false)
    return (

        <div className='Header'>
            <header className='box'>
                <div className="con">

                    <img className='box1' src={logos} alt />
                    <div className='pages'>
                        <li className='lil'>HOME</li>
                        <li className='lil'>ABOUTE</li>
                        <li className='lil'>SERVICES</li>
                        <li className='lil'>PAGES</li>
                        <li className='lil'>SHOP</li>
                        <li className='lil'>BLOG</li>
                        <li className='lil'>CONTACT</li>
                        
                        
                        <p><FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />
                            {cartOpen && (
                                <div className='shop-cart'>
                             {props.orders.length > 0 ?
                             showOrders(props) : showNothing()}
                            
                                </div>
                            )}
                        </p>
                        <li></li>
                        <li className='box3'>SIGN IN</li>
                    </div>

                </div>
            </header>
            <div className='karusel'>
                <Karusel />

            </div>

        </div>
    );
}
export default Header
