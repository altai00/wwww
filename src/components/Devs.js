import React, { Component } from "react";
import Dev from'./Dev'

export class Devs extends Component {
    render(){
        return(
            <div>
                {this.props.devs.map(el => (

                     <Dev key={el.id} dev ={el}   onAdd={this.props.onAdd} /> 

                   

                    //  <h1>{el.title}</h1>
                ))}
            </div>
        )
    }
}

export default Devs