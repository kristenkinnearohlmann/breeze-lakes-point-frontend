import { React, Component } from 'react'
import { connect } from 'react-redux'
import './Registration.css'

class Registration extends Component {

    state = {
        pronoun_id: -1,
        first_name: "",
        middle_name: "",
        no_middle_name: false,
        last_name: "",
        preferred_name: ""
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
                <form className="form-reg">
                    <div className="input-fields-row">
                        <p>
                            <label htmlFor="first_name">First Name</label><br/>
                            <input type="text" name="first_name" id="first_name" value={this.state.first_name} onChange={this.handleonChange} />
                        </p>
                        <p>
                            <label htmlFor="middle_name">Middle Name</label><br/>
                            <input type="text" name="middle_name" id="middle_name" value={this.state.middle_name} onChange={this.handleonChange} /><br/>
                            <input type="checkbox" name="no_middle_name" id="no_middle_name" value={this.state.no_middle_name} onChange={this.handleonChange} />No middle name
                        </p>
                        <p>
                            <label htmlFor="last_name">Last Name</label><br/>
                            <input type="text" name="last_name" id="last_name" value={this.state.last_name} onChange={this.handleonChange} />
                        </p>
                        <p>
                            <label htmlFor="preferred_name">Preferred Name</label><br/>
                            <input type="text" name="preferred_name" id="preferred_name" value={this.state.preferred_name} onChange={this.handleonChange} />
                        </p>
                        <p>
                        {/* see notes for source */}
                            <label htmlFor="pronoun_id">Pronouns</label><br/>
                            <select name="pronoun_id" id="pronoun_id" value={this.state.pronoun_id} onChange={this.handleonChange}>
                                <option value="-1"></option>
                                <option value="1">she/her</option>
                                <option value="2">he/him</option>
                                <option value="3">they/them</option>
                                <option value="4">other</option>
                            </select>
                        </p>
                    </div>
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