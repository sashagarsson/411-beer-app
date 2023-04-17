
import './Drinks.css'

//functional component
function Beer(props) {
    console.log(props)

    return(
        //this is coming in as a props object
        <div className="beer-info">
            <img src={props.drink.image_url} alt={props.drink.name} />
            <h4>Name: {props.drink.name}</h4>
            <p>Tagline: {props.drink.tagline}</p>
            <p>Description: {props.drink.description}</p>
            <p>First Brewed: {props.drink.first_brewed}</p>
        </div>
    )


}

export default Beer