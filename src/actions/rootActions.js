const loginUser = loginParms => {
    return (dispatch) => {
        dispatch( {type: 'LOGIN'} )
    }
}

export {
    loginUser
}