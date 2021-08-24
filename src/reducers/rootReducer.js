const rootReducer = (state = {current_user: {id: -1}}, action) => {
    switch (action.type) {
        case 'LOGIN':
            console.log('Login reducer')
            return {
                ...state,
                current_user: {
                    id: action.payload.currentUserId,
                    email: action.payload.email,
                    user_type: action.payload.userType
                }
            }

        case 'LOGOUT':
            console.log('Logout reducer')
            return {
                current_user: {id: -1}
            }

        default:
            console.log(state.current_user)
            return state
    }
}

export default rootReducer