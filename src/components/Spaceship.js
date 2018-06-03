// Code The Spaceship Component Here
import React, {Component} from "react"


export default class Spaceship extends Component{
    render(){
        const{name, speed, hasRockets, colors} = this.props
        return (
            <div>
                <h1>Spaceship Name: {name}</h1>
                <h2>Spaceship Info:</h2>
                <p>Speed: {speed}</p>
                <p>Rocksts:{hasRockets ? "Yes": "No"}</p>

                <ul>
                    {colors.map((color, index) => <li key={index}>{color}</li>)}
                </ul>



            </div>

        )
    }
}

Spaceship.defaultProps = {
    speed : "slow",
    hasRockets : false,
    colors: ["black", "red"]
}
