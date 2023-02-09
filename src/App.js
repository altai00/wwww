import  { Button }  from  'react-bootstrap' ;
import React from 'react';
import './index.css'
import  './Header.scss';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logos from './fon/logos.png';
import {FaShoppingCart} from 'react-icons/fa'

import Karusel from './ControlledCarousel'
import Header from './Header.js'
import Items from "./components/Items"
import Order from './Order';
import Vtoroi  from './panda/Vtoroi.js';
import Devs from "./components/Devs"
import Treti from './hare/Tretii';
import './hare/tretii.scss'
import './Aen.scss'
import Video from './videolor/Video.js'
import Koroche from './production/Koroche.js'


class App extends React.Component {
  constructor (props) {
      super(props)
      this.state = {
          orders: [],
          items:[
            {
            id:1,
            title:'MC5 Carbine',
            img:'fona.jpeg',
            category:'carbine',
            price:'1.499.00',

          },
            {
            id:2,
            title:'MC5 Carbine',
            img:'fonz.jpeg',
            category:'carbine',
            price:'1.499.00',

          },
            {
            id:3,
            title:'MC5 Carbine',
            img:'fonx.jpeg',
            category:'carbine',
            price:'1.499.00',

          },
            {
            id:4,
            title:'MC5 Carbine',
            img:'fons.jpeg',
            category:'carbine',
            price:'1.499.00',

          },
            
           
            
           
            

          ],
          devs:[

            {
              id:1,
              title:'New MC7 Carbine Gun',
              img:'myltyk.png',
              category:'carbine',
              price:'1.999.00',
  
            }

          ],
      }
      this.addToOrder = this.addToOrder.bind(this)
      this.deleteOrder = this.deleteOrder.bind(this)
  }
  render() {
      return(
          <div>
              
              <><Header orders ={this.state.orders} onDelete={this.deleteOrder}/><div className='karusel'>

<Karusel />

</div></>

              <Items items={this.state.items} onAdd={this.addToOrder}/>
<div className='glavny-vtoroi'><Vtoroi/></div>
<Devs devs={this.state.devs} onAdd={this.addToOrder}/>

<div className='accardeon'>
<div className='container dep'><Treti/>

</div>
</div>
<div className='video'>
  <Video/>
</div>
<div className='koroche'>
<Koroche/>
</div>
          </div>
      )
  }
  deleteOrder(id){
this.setState({orders:this.state.orders.filter(el => el.id !== id)})
  }
  addToOrder(item){
      let isInArray = false
     
      this.state.orders.forEach(el => {
          if(el.id === item.id)
          isInArray = true
      })
      if(!isInArray)
      this.setState({orders:[...this.state.orders,item]},()=> {

          console.log(this.state.orders)
      }
      )

  }
  deleteOrder(id){
    this.setState({orders:this.state.orders.filter(el => el.id !== id)})
      }
      addToOrder(dev){
          let isInArray = false
         
          this.state.orders.forEach(el => {
              if(el.id === dev.id)
              isInArray = true
          })
          if(!isInArray)
          this.setState({orders:[...this.state.orders,dev]},()=> {
    
              console.log(this.state.orders)
          }
          )
    
      }
}

export default App;



