const loginUser = loginParms => {
    return (dispatch) => {
        dispatch( {type: 'LOGIN', payload: loginParms} )
    }
}

export {
    loginUser
}