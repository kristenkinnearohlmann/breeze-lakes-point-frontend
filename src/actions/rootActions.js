const loginUser = loginParms => {
    return (dispatch) => {

        let userId = loginParms.currentUserId
        let userType = ''

        switch (loginParms.email) {
            case 'user@mail.com':
                userType = 'User'
                userId = 2
                break
            case 'desk@mail.com':
                userType = 'Desk'
                userId = 3
                break
            case 'editor@mail.com':
                userType = 'Editor'
                userId = 4
                break
            case 'manager@mail.com':
                userType = 'Manager'
                userId = 5
                break
            case 'admin@mail.com':
                userType = 'Admin'
                userId = 6
                break
            case 'vendor@mail.com':
                userType = 'Vendor'
                userId = 7
                break
            case 'sysadmin@mail.com':
                userType = 'SysAdmin'
                userId = 1
                break
            default:
                console.log(loginParms.email)
                break
        }

        loginParms = {
            ...loginParms,
            currentUserId: userId,
            userType: userType
        }
        dispatch( {type: 'LOGIN', payload: loginParms} )
    }
}

const logoutUser = () => {
    return (dispatch) => {
        dispatch( {type: 'LOGOUT'} )
    }
}

export {
    loginUser,
    logoutUser
}