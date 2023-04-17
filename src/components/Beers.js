
import React, { Component } from "react";
import Beer from "./Beer";
import './Drinks.css'
import Like from './Like'
import axios from "axios";

export default class Beers extends Component { 
    constructor(props) {
        console.log("constructor initialized")
        super(props)

        this.state = {
            drinks: [],
            likedBeer: true
        }
    }

    componentDidMount() {
        console.log("component mounted");
        axios.get("https://api.punkapi.com/v2/beers")
          .then((response) => {
            this.setState({
              drinks: response.data
            });
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }

    componentDidUpdate() {
        console.log("component updated", this.state.drinks)
    }

    handleClick = () => {
        this.setState({
          likedBeer: !this.state.likedBeer
        });
      };

    render() {
        console.log("render")
       return (
        <div>
            <h2> Pick A Beer, Any Beer!</h2>
            <div className="drink-info">
                {this.state.drinks.map( (drink) => {
                    return(
                        <div>
                        <Beer drink = {drink} />
                        {this.state.likedBeer ? "" : <Like />}
                        {this.state.likedBeer ? <button onClick={this.handleClick}>Like this beer</button> : <button onClick={this.handleClick}>Unike this beer</button>}
                        </div>
                        // <li>
                        //     <img src={actor.image} alt={actor.name} />
                        //     <h4>{actor.name}</h4>
                        //     <p>{actor.location.name}</p>
                        // </li>
                    )
                })
                
                 
                }
                
                
            </div> 


        </div>
       )
    }
}