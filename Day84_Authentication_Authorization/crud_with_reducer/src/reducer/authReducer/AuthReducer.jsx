const authReducer = (state,action) => {
    let {type,payload} = action
    switch (type){
        case 'signup':
            return {
                ...state,
                payload
            }
    }
}
export default authReducer