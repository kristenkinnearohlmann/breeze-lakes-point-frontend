import { React, Component } from 'react'

class Login extends Component {
    
    state = {
        email: ''
    }

    render() {
        console.log(this.state.email)
        return (
            <div>
                Login form will go here
                <form>
                    
                </form>
            </div>
        )
    }
}

export default Login