import React from 'react'

const UserReducer = (state,action) => {
    switch(action.type){
        case 'fetch':
            return{
                ...state,
                users:state.payload
            }
        default: {
            return {
                state
            }
        }
    }
}

export default UserReducer