import React,{ Component } from 'react'



export class Dev extends Component {
    render (){
        return (
           
            <div className='dev'>
<img src={"./img/" + this.props.dev.img}/>
<h2>{this.props.dev.title}</h2>
<p>{this.props.dev.desc}</p>
<p>2.999.00$</p>
<h6></h6>
<h4>Buy Now</h4>

{/* <b>{this.props.item.price}</b> */}

<div className='add-to-card' onClick={() => this.props.onAdd(this.props.dev)}> {this.props.dev.price}</div>





            </div>


           
        )
    }
}


export default Dev;