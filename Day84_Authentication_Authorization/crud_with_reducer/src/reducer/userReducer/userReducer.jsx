const userReducer = (state,action) => {
    switch (action.type) {
        case 'fetch':
            return {
                ...state,
                users: action.payload, 
                isLoading:false
            };
        case "single_user":
            // let filteredData = state.filter((user)=>{user.id == user.id})
            return {
                ...state,
                filteredData
            }
        default:
            return {
                ...state
            }
    }
}
export default userReducer;