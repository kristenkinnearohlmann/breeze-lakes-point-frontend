import { React, Component } from 'react'
import { connect } from 'react-redux'
import './Registration.css'

class Registration extends Component {

    state = {
        first_name: "",
        middle_name: "",
        no_middle_name: false,
        last_name: "",
        preferred_name: "",
        pronoun_id: -1,
        age: "",
        phone_1: "",
        phone_2: "",
        email: "",
        street_address: "",
        apt_suite: "",
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
                        <fieldset>
                            <legend>Personal Information</legend>
                            <div className="flex-row">
                                <p>
                                    <label htmlFor="first_name">First Name</label><br/>
                                    <input type="text" name="first_name" id="first_name" value={this.state.first_name} onChange={this.handleonChange} />
                                </p>
                                <p className="length-175px">
                                    <label htmlFor="middle_name">Middle Name</label><br/>
                                    <input type="text" name="middle_name" id="middle_name" value={this.state.middle_name} onChange={this.handleonChange} /><br/>
                                    <input type="checkbox" name="no_middle_name" id="no_middle_name" value={this.state.no_middle_name} onChange={this.handleonChange} />No middle name
                                </p>
                                <p>
                                    <label htmlFor="last_name">Last Name</label><br/>
                                    <input type="text" name="last_name" id="last_name" value={this.state.last_name} onChange={this.handleonChange} />
                                </p>
                                <p className="length-175px">
                                    <label htmlFor="preferred_name">Preferred Name</label>&nbsp;<i className="far fa-question-circle" title="The name you would like to use in conversation."></i><br/>
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
                                {/* TODO: Add feature to disable form for under 16 based on IP */}
                                <p>
                                    <label htmlFor="age">Age</label><br/>
                                    <select name="age" id="age" value={this.state.age} onChange={this.handleonChange}>
                                        <option value="-1"></option>
                                        <option value="0">Under 16</option>
                                        <option value="1">16+</option>
                                        <option value="2">18+</option>
                                        <option value="3">21+</option>
                                    </select>
                                </p>
                            </div>
                        </fieldset>
                    </div>
                    <div>
                        <fieldset>
                            <legend>Contact Information</legend>
                            <div className="flex-row">
                                {/* TODO: Format with dots */}
                                <p>
                                    <label htmlFor="phone_1">Best Contact Phone Number</label><br/>
                                    <input type="tel" name="phone_1" id="phone_1" value={this.state.phone_1} onChange={this.handleonChange} />
                                </p>
                                {/* TODO: Format with dots */}
                                <p>
                                    <label htmlFor="phone_2">Alternate Contact Phone Number</label><br/>
                                    <input type="tel" name="phone_2" id="phone_2" value={this.state.phone_2} onChange={this.handleonChange} />
                                </p>
                                {/* TODO: Validate as email */}
                                <p>
                                    <label htmlFor="email">Email</label><br/>
                                    <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleonChange} />
                                </p>
                            </div>
                            <div className="flex-row">
                                <p>
                                    <label htmlFor="street_address">Street Address</label><br/>
                                    <input type="text" name="street_address" id="street_address" value={this.state.street_address} onChange={this.handleonChange} />
                                </p>
                                <p>
                                    <label htmlFor="apt_suite">Apartment or Suite</label><br/>
                                    <input type="text" name="apt_suite" id="apt_suite" value={this.state.apt_suite} onChange={this.handleonChange} />
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
                                {/* TODO: Check for valid */}
                                <p className="length-175px">
                                    <label htmlFor="zip_code">Zip Code</label><br/>
                                    <input type="text" name="zip_code" id="zip_code" value={this.state.zip_code} onChange={this.handleonChange} />
                                </p>
                            </div>
                        </fieldset>
                    </div>
                    <div>
                        <fieldset>
                            <legend>Availability</legend>
                                <div>
                                    <p>
                                        This year's event runs between {this.props.eventStartDate} and {this.props.eventEndDate}.
                                    </p>
                                </div>
                                <div className="flex-row">
                                    <p>
                                        <label htmlFor="workFullEvent">Can you work all days?</label><br/>
                                        <input type="radio"></input>
                                    </p>
                                    <p>
                                        <label htmlFor="workFullEvent">Another question?</label><br/>
                                        <input type="radio"></input>
                                    </p>
                                </div>
                        </fieldset>
                    </div>
                </form>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        currentUserId: state.current_user.id,
        // TODO: Write function to find first Monday in September and return dates
        eventStartDate: "August 26, 2021",
        eventEndDate: "September 6, 2021"
    }
}

export default connect(mapStateToProps)(Registration)