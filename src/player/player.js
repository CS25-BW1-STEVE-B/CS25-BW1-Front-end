import React from 'react'
import './player.scss'

const Player = props => {
    
    console.log('player props', props)
    // checks the player's current location and, indicates it by changing the rooms background color,
    // as the player moves around
    if(props.rooms !== undefined){
        props.rooms.forEach(room => {
            if(props.props.location === room.fields.title){
                let current_room = document.getElementById(room.pk)
                console.log('CURRENT ROOM', current_room)
                if(current_room !== null){
                    current_room.style.backgroundColor = '#ff6b6b'
                }
            } 
            else if (props.props.location !== room.fields.title){
                let current_room = document.getElementById(room.pk)
                if(current_room !== null){
                    current_room.style.backgroundColor = 'white'
                }
            }
        })
    }

    // if(props.rooms !== undefined){
    //     props.rooms.forEach(room => {
    //         let room = document.getElementById(room.pk)
    //         if(room.field)
    //     })
    // }


    return (
        <div className='player'>
            {props.props.players !== undefined ?
                <> 
                    {/* <p className='playerUsername'><p className='playerUserDescription'>Player's username:</p>{props.props.name}</p>
                    <p className='playerLocation'> <p className='playerLocationDescription'>Player's location:</p>{props.props.location}</p>
                    <p className='onlinePlayers'><p className='onlinePlayersDescription'>There is</p>{props.props.players.length}<p className='onlinePlayersDescription'>players in this room.</p></p> */}
                </>
            : null}
        </div>
    )
}

export default Player