import React, { useCallback, useState } from 'react'
import Rooms from '../rooms/rooms'
import './map.scss'

const GameMap = props => {

    console.log('MAP ROOMS', props.rooms)

    return (
        <div className='gameMap'>
            <div className='rooms'>
                <Rooms rooms={props.rooms}/>
            </div>
        </div>
    )
}

export default GameMap