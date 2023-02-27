import React, { Component } from "react";
import Swa from "./Swa";

export class Swas extends Component {
    render(){
        return(
            <div className="makn">
                {this.props.swas.map(el => (

                     <Swa key={el.id} swa ={el}   onAdd={this.props.onAdd} /> 

                   

                    //  <h1>{el.title}</h1>
                ))}
            </div>
        )
    }
}

export default Swas