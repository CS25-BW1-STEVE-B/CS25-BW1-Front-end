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


    // dummy rooms to create our 2d array matrix
    let test_rooms;

    // function that creates our 2d array
    const the2DArray = () => {
        // variable that holds our primary array
        let sub_arr = []
        // for loop used to come up with numbers for position x in our sub arrays
        for(let i = 0; i < 5; i++){
            // for loop used to come up with numbers for position y in our sub arrays
            for(let j = 0; j < 5; j++){
                // we push our sub array created to our primary array var
                sub_arr.push({x: i, y: j})
            }
        }
        // we assign our dummy variable to be our primary array
        return test_rooms = sub_arr
    }
    the2DArray()

    console.log('2D ARRAY', test_rooms)
    
    return (
        <>
            {test_rooms.map(room => {
                return <div className='testRooms' id={room}></div>
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