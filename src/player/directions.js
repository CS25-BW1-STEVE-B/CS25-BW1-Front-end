import React, { useEffect, useState } from 'react'
import './directions.scss'
import { axiosWithAuth } from '../authentication/axiosAuth'

const Directions = props => {
    
    const [directions, setDirections] = useState({
        directions: '',
        error: '',
    })

    console.log('directions state', directions)
    
    // useEffect(() => {
        //     axiosWithAuth()
        //     .post('https://lambda-mud-test.herokuapp.com/api/adv/move')
        // })
        
    const directionHandler = (e) => {
        //variable that holds the value on the 'div' clicked
        let buttonClicked = e.target.dataset.name
        // checks which 'div' was clicked
        if(buttonClicked === 'Up'){
            // iterates over the rooms..
            props.rooms.forEach(room => {
                // and checks of the player's location matches the room's name..
                if(props.player.location === room.fields.title){
                    // if it does, then grabs the PK of the next room
                    let next_room = room.fields.n_to
                    // and we iterate once more to check if the pk matches with any of the other room's pk..
                    props.rooms.forEach(room => {
                        if(next_room === room.pk){
                            // if it does, we update player's current location on state
                            props.setPlayer({
                                ...props.player,
                                location: room.fields.title,
                            })
                        }
                    })
                }
            })
        }
        // checks which 'div' was clicked
        if(buttonClicked === 'Down'){
            // iterates over the rooms..
            props.rooms.forEach(room => {
                // and checks of the player's location matches the room's name..
                if(props.player.location === room.fields.title){
                    // if it does, then grabs the PK of the next room
                    let next_room = room.fields.s_to
                    // and we iterate once more to check if the pk matches with any of the other room's pk..
                    props.rooms.forEach(room => {
                        if(next_room === room.pk){
                            // if it does, we update player's current location on state
                            props.setPlayer({
                                ...props.player,
                                location: room.fields.title,
                            })
                        }
                    })
                }
            })
        }
        // checks which 'div' was clicked
        if(buttonClicked === 'Left'){
            // iterates over the rooms..
            props.rooms.forEach(room => {
                // and checks of the player's location matches the room's name..
                if(props.player.location === room.fields.title){
                    // if it does, then grabs the PK of the next room
                    let next_room = room.fields.w_to
                    // and we iterate once more to check if the pk matches with any of the other room's pk..
                    props.rooms.forEach(room => {
                        if(next_room === room.pk){
                            // if it does, we update player's current location on state
                            props.setPlayer({
                                ...props.player,
                                location: room.fields.title,
                            })
                        } else {

                        }
                    })
                }
            })
        }
        // checks which 'div' was clicked
        if(buttonClicked === 'Right'){
            // iterates over the rooms..
            props.rooms.forEach(room => {
                // and checks of the player's location matches the room's name..
                if(props.player.location === room.fields.title){
                    // if it does, then grabs the PK of the next room
                    let next_room = room.fields.w_to
                    // and we iterate once more to check if the pk matches with any of the other room's pk..
                    props.rooms.forEach(room => {
                        if(next_room === room.pk){
                            // if it does, we update player's current location on state
                            props.setPlayer({
                                ...props.player,
                                location: room.fields.title,
                            })
                        }
                    })
                }
            })
        }
        // update's state according to what has been clicked
        setDirections(buttonClicked)
    }



    return (
        <div className='allButtons' onClick={directionHandler}>
            <div className='upButton'>
                <button className='buttons' data-name='Up'>Up</button>
            </div>
            <div className='buttonsbottom'>
                <button className='buttons' data-name='Left'>Left</button>
                <button className='buttons' data-name='Down'>Down</button>
                <button className='buttons' data-name='Right'>Right</button>
            </div>
        </div>
    )
}

export default Directions