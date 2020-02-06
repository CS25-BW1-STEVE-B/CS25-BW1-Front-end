import React, { useState } from 'react'
import './rooms.scss'

const Rooms = props => {
    // console.log('from rooms', props.rooms)
    let array2DRooms = []
    let rooms = [
        {
            title: "Outside Cave Entrance",
            description: "North of you, the cave mount beckons",
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
            n_to: 3,
            s_to: 1,
            e_to: 4,
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
                sub_arr.push({x: i, y: j})
            }
        }
        // we assign our dummy variable to be our primary array
        return array2DRooms = sub_arr
    }
    the2DArray()



    const roomPlacer = (array2d, rooms) => {
        let first_room_coords = rooms[0].coords
        let array2d_coords = array2d[54]
        let divs = []

        first_room_coords.x = array2d_coords.x
        first_room_coords.y = array2d_coords.y

        for(let i = 0; i < array2d.length; i++){
            if(array2d[i].x === first_room_coords.x && array2d[i].y === first_room_coords.y){
                let new_room = rooms[i]
                array2d[i] = new_room
            let room = <div className='visibleRooms' x={first_room_coords.x} y={first_room_coords.y}>{rooms[0].title}</div>
                divs.push(room)
            } else {
                // we would need another iterator to check if ...
                console.log('THE ROOM', rooms[i])
                rooms.forEach(room => {
                // the room in the current index north to is equal to any primary key of the other rooms
                if(rooms.n_to === room.pk){
                    console.log('OUTSIDE', room)
                    // console.log('FOYER', room)
                    // we need to make a variable that holds the coords of the current room with x - 1 and set those coords to the room north to
                }

                })



                let room = <div className='invisibleRooms' x={array2d[i].x} y={array2d[i].y}></div>
                divs.push(room)
            }

        }
        console.log('DIVS', divs)
        return divs
    }

    console.log('2D ARRAY', array2DRooms)
    console.log('API ROOMS', rooms)
    
    return (
        <>
        {roomPlacer(array2DRooms, rooms)}
            {/* {props.rooms !== undefined ? 
                props.rooms.map(room => {
                    return <div className='rooms' id={room.pk}>{room.fields.title}</div>
                })
            : null} */}
            {/* {array2DRooms.map(room => {
                // console.log('GRID', room)
                return <div className='invisibleRooms' x={room.x} y={room.y}></div>
            })} */}
            
        </>
    )
}

export default Rooms