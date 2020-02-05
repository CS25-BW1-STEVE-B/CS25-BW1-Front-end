import React, { useState } from 'react'
import './rooms.scss'

const Rooms = props => {
    console.log('from rooms', props.rooms)
    const rooms = []
    if(props.rooms !== undefined){
        props.rooms.forEach(room => {
            rooms.push(room)
        })
    }
    // const test_rooms = Array(119).fill({x: 0, y: 0})
    const test_rooms = Array(20).fill([])
    // [{x:0,y:0}]
    // test_rooms[0][0].x = 'marco'
    // test_rooms[0][0].y = 'polo'

    const the2DArray = (arr) => {
        for(let i = 0; i < arr.length; i++){
            arr[i] = i
            for(let j = 0; j < arr.length; j++){
                arr[i][j] = j
            }
        }
        return arr
    }
    the2DArray(test_rooms)
    console.log('TEST ROOMS', test_rooms)
    
    return (
        <>
        {test_rooms.map(room => {
            return <div className='testRooms'></div>
        })}

            {/* {rooms.map(room => {
                return(
                    <div id={`${room.pk}`} style={{border: '1px solid black', width: '3rem', height: '3rem'}}>
                        <h2 className='roomName'>{room.fields.title}</h2>
                        {/* <p>{room.fields.description}</p>*/}
                    {/* </div> */}
                {/* ) */}
            {/* })} */}
            
        </>
    )
}

export default Rooms