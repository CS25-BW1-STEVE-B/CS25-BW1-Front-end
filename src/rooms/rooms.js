import React, { useState } from 'react'
import './rooms.scss'

const Rooms = props => {
    // console.log('from rooms', props.rooms)
    let array2DRooms = []
    let rooms = [
        {
            title: "Outside Cave Entrance",
            description: "North of you, the cave mount beckons",
            pk: 1,
            n_to: 2,
            s_to: 0,
            e_to: 0,
            w_to: 0,
            coords: {
                x: '',
                y: '',
            }
        },
        {
            title: "Foyer",
            description: "Dim light filters in from the south. Dusty↵passages run north and east.",
            pk: 2,
            n_to: 3,
            s_to: 1,
            e_to: 4,
            w_to: 0,
            coords: {
                x: '',
                y: '',
            }
        },
        {
            title: "Grand Overlook",
            description: "A steep cliff appears before you, falling↵into the darkness. Ahead to the north, a light flickers in↵the distance, but there is no way across the chasm.",
            pk: 3,
            n_to: 0,
            s_to: 2,
            e_to: 0,
            w_to: 0,
            coords: {
                x: '',
                y: '',
            }
        },
        {
            title: "Narrow Passage",
            description: "The narrow passage bends here from west↵to north. The smell of gold permeates the air.",
            pk: 4,
            n_to: 5,
            s_to: 0,
            e_to: 0,
            w_to: 2,
            coords: {
                x: '',
                y: '',
            }
        },
        {
            title: "Treasure Chamber",
            description: "You've found the long-lost treasure↵chamber! Sadly, it has already been completely emptied by↵earlier adventurers. The only exit is to the south.",
            pk: 5,
            n_to: 0,
            s_to: 4,
            e_to: 0,
            w_to: 0,
            coords: {
                x: '',
                y: '',
            }
        }
    ]


    // if(props.rooms !== undefined){
    //     props.rooms.forEach(room => {
    //         rooms.push(room)
    //     })
    // }

    // function that creates our 2d array
    const the2DArray = () => {
        // variable that holds our primary array
        let sub_arr = []
        // for loop used to come up with numbers for position x in our sub arrays
        for(let i = 0; i <= 9; i++){
            // for loop used to come up with numbers for position y in our sub arrays
            for(let j = 0; j <= 9; j++){
                // we push our sub array created to our primary array var
                sub_arr.push({x: j, y: i})
            }
        }
        // we assign our dummy variable to be our primary array
        return array2DRooms = sub_arr
    }
    the2DArray()

    // console.log('INITIAL 2D ARRAY', array2DRooms)



    const roomPlacer = (array2d, rooms) => {
        let first_room = rooms[0]
        let array2d_coords = array2d[54]
        let new_rooms = []
        let divs = []

        first_room.coords.x = array2d_coords.x
        first_room.coords.y = array2d_coords.y

        for(let i = 0; i < array2d.length; i++){
            if(array2d[i].x === first_room.coords.x && array2d[i].y === first_room.coords.y){
                // console.log('rooms[0]', rooms[0])
                array2d[i] = rooms[i]
            // let room = <div className='visibleRooms' x={first_room_coords.x} y={first_room_coords.y}>{rooms[0].title}</div>
                new_rooms.push(first_room)
                for(let z = 0; z < rooms.length; z++){
                    for(let j = 0; j < rooms.length; j++){
                        // the room in the current index north to is equal to any primary key of the other rooms
                        if(rooms[z].n_to === rooms[j].pk){
                            rooms[j].coords.x = rooms[z].coords.x
                            rooms[j].coords.y = rooms[z].coords.y - 1
                            new_rooms.push(rooms[j])
                        } 
                        // the room in the current index north to is equal to any primary key of the other rooms
                        else if(rooms[z].w_to === rooms[j].pk){
                            rooms[j].coords.x = rooms[z].coords.x - 1
                            rooms[j].coords.y = rooms[z].coords.y
                            new_rooms.push(rooms[j])
                        } 
                        else if(rooms[z].s_to === rooms[j].pk){
                            rooms[j].coords.x = rooms[z].coords.x
                            rooms[j].coords.y = rooms[z].coords.y + 1
                            new_rooms.push(rooms[j])
                        } 
                        else if(rooms[z].e_to === rooms[j].pk){
                            rooms[j].coords.x = rooms[z].coords.x + 1
                            rooms[j].coords.y = rooms[z].coords.y
                            new_rooms.push(rooms[j])
                        } 
                    }
                }
            }
        }

        // This for loop makes sure there is no repetitive
        let unique_rooms = []
        for(let i = 0; i < new_rooms.length; i++){
            if(unique_rooms.indexOf(new_rooms[i]) === -1){
                unique_rooms.push(new_rooms[i])
            }
        }
        for(let i = 0; i < array2d.length; i++){
            for(let j = 0; j < unique_rooms.length; j++){
                console.log('array2d[i]', array2d[i])
                console.log('unique_rooms[i]', unique_rooms[j].coords)
                    try{
                        if(array2d[i].x === unique_rooms[j].coords.x){
                            console.log('HERE!')
                            for(let y = 0; y < array2d.length; y++){
                                for(let z = 0; z < unique_rooms.length; z++){
                                    if(array2d[i].y === unique_rooms[z].coords.y){
                                        console.log('WE HAVE A MATCH!!!!!')
                                }
                            }
                        }
                    }
                //             // let new_room = <div className='visibleRooms' x={rooms[j].coords.x} y={rooms[j].coords.y}>{rooms[j].title}</div>
                        
                    } catch(err) {
                        console.log('Not there??')
                    } 
            }
        }
        
            
            // console.log('THE UNIQUE ROOMS', unique_rooms)
        console.log('DIVS', divs)
        // console.log('NEW ROOMS', new_rooms)
        return divs
    }

    console.log('2D ARRAY', array2DRooms)
    console.log('TEST ROOMS', rooms)
    console.log('API ROOMS', props.rooms)
    
    return (
        <>
            {/* {props.rooms !== undefined ? 
                props.rooms.map(room => {
                    return <div className='rooms' id={room.pk}>{room.fields.title}</div>
                })
            : null} */}
            {array2DRooms.map(room => {
                // console.log('GRID', room)
                return <div className='invisibleRooms' x={room.x} y={room.y}></div>
            })}
            {roomPlacer(array2DRooms, rooms)}
        </>
    )
}

export default Rooms