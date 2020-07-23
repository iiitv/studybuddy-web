import React from 'react'
import Card from './Card'
import './cardContainer.scss'

const CardContainer =() => {

    const sems = [1,2,3,4,5,6,7]
    const container = sems.map((sem)=>{
        return <Card name={sem}/>
    })
    return (
        <div className="cardContainer">
        {container}        
        </div>
    )
}

export default CardContainer
