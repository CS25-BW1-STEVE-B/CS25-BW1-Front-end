import React, { useState } from 'react'
import './rooms.scss'

const Rooms = props => {

    console.log(props.rooms)
    
    // avoids error of props being undefined before loaded in the DOM
    const loadRooms = () => {
        if(props.rooms !== undefined){
            props.rooms.forEach(room => room)
        }
    }
    //Takes care of loading the rooms first
    loadRooms()

    return (
        <div id='map'>
            {props.rooms !== undefined ? props.rooms.map(room => 
                (
                    <div className='room'  key={room.pk}>
                        <h2 className='roomName'>{room.fields.title}</h2>
                        {/* <p>{room.fields.description}</p> */}
                    </div>
                )
                ) : null}
        </div>
    )
}

export default Rooms