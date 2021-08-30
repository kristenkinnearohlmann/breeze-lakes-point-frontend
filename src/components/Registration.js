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
        preferred_name: "",
        street_address: "",
        city: "",
        state_abbrev: "",
        zip_code: ""
    }

    state_abbrevs = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ]

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
                    <div>
                        <fieldset className="input-fields-row">
                            <legend>Name</legend>
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
                        </fieldset>
                    </div>
                    <div className="input-fields-row">
                        <p>
                            <label htmlFor="street_address">Street Address</label><br/>
                            <input type="text" name="street_address" id="street_address" value={this.state.street_address} onChange={this.handleonChange} />
                        </p>
                        <p>
                            <label htmlFor="city">City</label><br/>
                            <input type="text" name="city" id="city" value={this.state.city} onChange={this.handleonChange} />
                        </p>
                        <p>
                            <label htmlFor="state_abbrev">State</label><br/>
                            <select name="state_abbrev" id="state_abbrev" value={this.state.state_abbrev} onChange={this.handleonChange}>
                                <option value="NA"></option>
                                {this.state_abbrevs.map(abbrev => {
                                    return (
                                        <option key={abbrev} value={abbrev}>{abbrev}</option>
                                    )
                                })}
                            </select>
                        </p>
                        <p>
                            {/* check for number */}
                            <label htmlFor="zip_code">Zip Code</label><br/>
                            <input type="text" name="zip_code" id="zip_code" value={this.state.zip_code} onChange={this.handleonChange} />
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