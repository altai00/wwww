import React,{ Component } from 'react'



export class Swa extends Component {
    render (){
        return (
           
            <div className='swa'>

<img className='imash'  src={"./img/" +this.props.swa.img}/>
<h2>{this.props.swa.title}</h2>
<p>{this.props.swa.desc}</p>




<div className='add-to-card' onClick={() => this.props.onAdd(this.props.swa)}> {this.props.swa.price}</div>





            </div>


           
        )
    }
}


export default Swa;