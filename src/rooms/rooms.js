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

    // const roomLayout = () => {
    //     if(props.room !== undefined){
    //         // props.room.forEach(room => {
    //             if (props.room.pk === 1){
    //                 if(props.room.fields.n_to === props.room.pk){
    //                 // console.log('FROM room LAYOUT FUNCTION', props.room)
    //                     let room = document.getElementById(`${props.room.pk}`)
    //                     if(room !== null){
    //                         console.log('ROOM LAYOUT ROOM', room)
    //                         room.style.backgroundColor = 'pink'
    //                         room.style.position = 'absolute'
    //                         room.style.top = '140px'
    //                         room.style.left = '230px'
    //                     }
    //             }
    //                 console.log('DID WE FOUND IT???', props.room.fields.n_to)
    //                 console.log('WHAT IS THIS??', props.room.pk)
    //                     // let room = document.getElementById(`${props.room.pk}`)
    //                     // room.style.backgroundColor = 'blue'
    //                     // room.style.position = 'absolute'
    //                     // room.style.top = '140px'
    //                     // room.style.left = '230px'   
    //             }
    //                     //     // console.log('ROOM LAYOUT ROOM NORTH TO', props.room.fields.n_to)

    //         // })
    //     }
    // }

    // roomLayout()
    
    return (
        <>

            {rooms.map(room => {
                return(
                    <div id={`${room.pk}`} style={{border: '1px solid black', width: '3rem', height: '3rem'}}>
                        <h2 className='roomName'>{room.fields.title}</h2>
                        {/* <p>{room.fields.description}</p>*/}
                    </div>
                )
            })}
            
        </>
    )
}

export default Rooms