const login = (state = {current_user: {id: -1}}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return state

        default:
            console.log(state.current_user)
            return state
    }
}

export default login