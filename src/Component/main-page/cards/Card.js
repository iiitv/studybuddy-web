import React from 'react'
import './card.scss'

const Card = (props) => {
    return (
        <div className="card">
            <p className="card__label">Sem {props.name}</p>
            {/* {this.props.name} */}
        </div>
    )
}

export default Card
