import React, { useEffect, useState } from 'react'
import './game.scss'
import { axiosWithAuth } from '../authentication/axiosAuth'
import Rooms from '../rooms/rooms'
import Player from '../player/player'
import Directions from '../player/directions'

const MainGame = () => {
    //all the rooms in our game
    const [rooms, setRooms] = useState()
    // console.log('rooms', rooms)

    const [player, setPlayer] = useState({
        name: '',
        location:'',
        inventory:[]
    })
    console.log('player', player)

    //This function is what set's the initial location of the player on state
    const currentLocationTracker = () =>{
        let room_key
        let room_name;
        rooms.forEach(room => {
            room_key = room.pk
            room_name = room.fields.title
            
            if(player.location === room_name){
                console.log('matching room', room.fields.n_to)
                setPlayer({
                    ...player,
                    location: room_name
                })
            }
        })
    }

    //Runs everytime the player's location get's updated 
    useEffect(() => {
        if(rooms !== undefined && player.n_to === 0 && player.s_to === 0 && player.e_to === 0 && player.w_to === 0){
            currentLocationTracker()
        }
    })

    //fetchs all the rooms in our database
    useEffect(() => {
        axiosWithAuth()
            .get('https://lambda-mud-test.herokuapp.com/api/adv/rooms/')
            .then(res => {
                const rooms = JSON.parse(res.data.rooms)
                // console.log('ROOMS', rooms)
                setRooms(rooms)
            })
            .catch(err => console.log(err.response))
    }, [])

    //fetchs the player's current status on state
    useEffect(() => {
        axiosWithAuth()
        .get('https://lambda-mud-test.herokuapp.com/api/adv/init/')
        .then(res => {
            // console.log('AXIOS INIT GET', res.data)
            setPlayer({...player, name: res.data.name, location: res.data.title})
        })
        .catch(err => console.log(err.response))
    }, [])

    return (
        <div className='gameCanvas'>
            <Rooms rooms={rooms}/>
            <Player props={player}/>
            <Directions rooms={rooms} player={player} setPlayer={setPlayer}/>
        </div>
    )
}

export default MainGame