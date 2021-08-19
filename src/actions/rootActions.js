const loginUser = loginParms => {
    return (dispatch) => {

        switch (loginParms.loginUser) {
            case 'user@mail.com':
                console.log('User')
                break
            case 'desk@mail.com':
                console.log('Desk')
                break
            case 'editor@mail.com':
                console.log('Editor')
                break
            case 'manager@mail.com':
                console.log('Manager')
                break
            case 'admin@mail.com':
                console.log('Admin')
                break
            case 'vendor@mail.com':
                console.log('Vendor')
                break
            default:
                console.log(loginParms.email)
                break
        }
        dispatch( {type: 'LOGIN', payload: loginParms} )
    }
}

export {
    loginUser
}