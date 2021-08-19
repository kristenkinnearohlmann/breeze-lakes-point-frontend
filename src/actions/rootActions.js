const loginUser = loginParms => {
    return (dispatch) => {

        let userId = loginParms.currentUserId

        switch (loginParms.email) {
            case 'user@mail.com':
                console.log('User')
                userId = 2
                break
            case 'desk@mail.com':
                console.log('Desk')
                userId = 3
                break
            case 'editor@mail.com':
                console.log('Editor')
                userId = 4
                break
            case 'manager@mail.com':
                console.log('Manager')
                userId = 5
                break
            case 'admin@mail.com':
                console.log('Admin')
                userId = 6
                break
            case 'vendor@mail.com':
                console.log('Vendor')
                userId = 7
                break
            case 'sysadmin@mail.com':
                console.log('SysAdmin')
                userId = 1
                break
            default:
                console.log(loginParms.email)
                break
        }

        loginParms = {
            ...loginParms,
            currentUserId: userId
        }
        dispatch( {type: 'LOGIN', payload: loginParms} )
    }
}

export {
    loginUser
}