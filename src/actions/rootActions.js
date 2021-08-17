const loginUser = loginParms => {
    return (dispatch) => {
        console.log(loginParms)
        dispatch( {type: 'LOGIN'} )
    }
}

export {
    loginUser
}