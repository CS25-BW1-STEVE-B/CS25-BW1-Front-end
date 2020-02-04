import React from 'react'

const Player = props => {
    
    console.log('player props', props.props)
    return (
        <div className='player'>
            {/* {props.props.players !== undefined ?
                <> 
                    <h5>Player's username: {props.props.name}</h5>
                    <h5>Player's location: {props.props.location}</h5>
                <p>There is {props.props.players.length} players in this room.</p>
                </>
            : null} */}
        </div>
    )
}

export default Player