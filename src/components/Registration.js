import { React, Component } from 'react'
import { connect } from 'react-redux'

class Registration extends Component {

    state = {

    }

    handleonChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state)
        // TODO: Add call to dispatch action to handle input
    }

    render() {
        console.log('Registration component')
        console.log(this.props.currentUserId)        
        return (
            <div>
                <h2>Registration</h2>
                she/her/hers<br/>
                he/him/his<br/>
                they/them/theirs<br/>
                she/they/theirs<br/>
                he/they/theirs<br/>
                <form>
    
                </form>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        currentUserId: state.current_user.id
    }
}

export default connect(mapStateToProps)(Registration)