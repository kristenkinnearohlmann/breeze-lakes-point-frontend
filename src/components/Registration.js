import { React, Component } from 'react'
import { connect } from 'react-redux'

class Registration extends Component {

    state = {
        pronoun_id: -1
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
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <form>
                    <p>
                        <label>Pronouns</label><br/>
                        <select name="pronoun_id" id="pronoun_id" value={this.state.pronoun_id} onChange={this.handleonChange}>
                            <option value="-1"></option>
                            <option value="1">she/her/hers</option>
                            <option value="2">he/him/his</option>
                            <option value="3">they/them/theirs</option>
                            <option value="4">she/they/theirs</option>
                            <option value="5">he/they/theirs</option>
                        </select>
                    </p>
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