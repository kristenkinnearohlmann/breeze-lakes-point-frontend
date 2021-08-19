const rootReducer = (state = {current_user: {id: -1}}, action) => {
    switch (action.type) {
        case 'LOGIN':
            console.log('Login reducer')
            console.log(action.payload)
            return state

        default:
            console.log(state.current_user)
            return state
    }
}

export default rootReducer