import React, { useState } from 'react'
import './rooms.scss'

const Rooms = props => {
    //rooms shortcut
    const rooms = props.rooms

    console.log('ROOMS FROM ROOMS', rooms)
    
    // avoids error of props being undefined before loaded in the DOM
    const loadRooms = () => {
        if(rooms !== undefined){
            rooms.forEach(room => room)
        }
    }
    //Takes care of loading the rooms first
    loadRooms()

    return (
        <>
            {rooms !== undefined ?
                rooms.map(room =>
                    <>
                        {room.fields.n_to !== 0 || room.fields.s_to !== 0 ?
                            <div className='firstSetOfRooms'>
                                <div className='upDownPath'></div>
                                <div className='room'></div>
                                <div className='upDownPath'></div>
                            </div>
                        : null}
                        {room.fields.w_to !== 0 || room.fields.e_to !== 0 ?
                            <div className='secondSetOfRooms'>
                                <div className='leftRightPath'></div>
                                <div className='room'></div>
                                <div className='leftRightPath'></div>
                            </div>
                        : null}
                    </>
                )
            : null}
            {/* <div className='upDownPath'></div> */}
            {/* {rooms !== undefined ? rooms.map(room => 
                (
                    <div className='room' key={room.pk}>
                        <h2 className='roomName'>{room.fields.title}</h2>
                        {/* <p>{room.fields.description}</p> */}
                    {/* </div>
                )
                ) : null} */}
        </>
    )
}

export default Rooms