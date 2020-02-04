import React from 'react'
import Rooms from '../rooms/rooms'
import './map.scss'

const GameMap = props => {

    return (
        <div className='gameMap'>
            <Rooms rooms={props.rooms}/>
        </div>
    )
}

export default GameMap