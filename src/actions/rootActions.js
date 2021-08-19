const loginUser = loginParms => {
    return (dispatch) => {

        switch (loginParms.loginUser) {
            default:
                console.log(loginParms.email)
        }
        dispatch( {type: 'LOGIN', payload: loginParms} )
    }
}

export {
    loginUser
}