import React from 'react'
import './FruitCard.css'

const FruitCard = props => {
    return (
        <div className="card-container">
            <div className="card">
                <h2 className="name">{props.name}</h2>
                <div className="picture" style={{ backgroundImage: `url("${props.picture}")` }}>

                </div>
                <p className="description">{props.description}</p>
            </div>
            <button onClick={() => props.deleteCard(props.index)}>DELETE</button>
        </div>
    )
}

export default FruitCard