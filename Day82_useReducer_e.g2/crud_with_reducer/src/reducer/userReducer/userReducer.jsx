const userReducer = (state,action) => {
    switch (action.type) {
        case 'fetch':
            return {
                ...state,
                users: action.payload
            };
        default:
            return {
                ...state
            }
    }
}
export default userReducer;