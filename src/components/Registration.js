import { React, Component } from 'react'
import { connect } from 'react-redux'
import './Registration.css'

class Registration extends Component {

    state = {
        login: "",
        pwd: "",
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
        zip_code: "",
        work_all: "",
        hours: {
            morning: false,
            day: false,
            evening: false,
            overnight: false
        },
        pre_event: "",
        post_event: "",
        event_jobs: {
            animals: false,
            building_maintenance: false,
            cleaning: false,
            customer_service: false,
            office_work: false,
            supervisor: false
        },
        vendor_jobs: {
            cooking: false,
            food_preparation: false,
            food_sales: false,
            stand_maintenance: false,
            retail_sales: false,
            games_rides: false
        },
        prev_exp: false,
        prev_event_exp: false,
        prev_vendor_exp: false,
        skills: {
            cleaning_custodial: false,
            data_entry: false,
            cooking: false,
            customer_service: false,
            heavy_equipment: false,
            food_beverage_service: false,
            physical_labor: false,
            money_cashier: false,
            retail_sales: false,
            security: false
        },
        reg_ack: false
    }

    state_abbrevs = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ]

    handleonChange = event => {
        if (event.target.name === 'middle_name' && event.target.value) {
            document.getElementById('no_middle_name').disabled = true

        } else {
            document.getElementById('no_middle_name').disabled = false
        }

        this.setState({
            [event.target.name]: event.target.value
        },() => {
            console.log(this.state)
        })

    }

    handleHours = event => {
        const { name, checked } = event.target

        this.setState((prevState) => {
            const hours = prevState.hours
            hours[name] = checked
            return hours
        },() => {
            console.log(this.state)
        })
    }

    handleEventJobs = event => {
        const { name, checked } = event.target

        this.setState((prevState) => {
            const jobs = prevState.event_jobs
            jobs[name] = checked
            return jobs
        })
    }

    handleVendorJobs = event => {
        const { name, checked } = event.target
        
        this.setState((prevState) => {
            const jobs = prevState.vendor_jobs
            jobs[name] = checked
            return jobs
        })
    }

    handleSkills = event => {
        const { name, checked } = event.target

        this.setState((prevState) => {
            const skills = prevState.skills
            skills[name] = checked
            return skills
        })
    }

    handlePhoneNumber = event => {
        const { name, value } = event.target
        const formattedNumber = this.formatPhoneNumber(value)

        this.setState({
            [name]: formattedNumber
        })
    }

    formatPhoneNumber = value => {
        if (!value) return value

        const phoneNumber = value.replace(/[^\d]/g, "")

        if (phoneNumber.length < 4) return phoneNumber

        if (phoneNumber.length < 7) {
            return `${phoneNumber.slice(0,3)}.${phoneNumber.slice(3)}`
        }

        return `${phoneNumber.slice(0,3)}.${phoneNumber.slice(3,6)}.${phoneNumber.slice(6,10)}`
    }

    showInfo = () => {
        console.log('Reached Show Info')
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state)
        // TODO: Add call to dispatch action to handle input
    }

    render() {
        return (
            <div>
                <h2>Applicant Registration</h2>
                <form className="form-reg" onSubmit={this.handleSubmit}>
                    <div>
                        <p>
                        Working for our event is a one-of-a-kind experience! Please complete or update these registration details prior to visiting our office.</p>
                        <p>
                        We will meet with you to review this information and look for open interviews that match your unique personal contribution.
                        </p>
                    </div>
                    <div>
                        <fieldset>
                            <legend>Login Information</legend>
                            <div className="flex-row">
                                <p>
                                    <label htmlFor="login">Login name or email</label><span className="required-field">*</span><br/>
                                    <input type="text" name="login" id="login" value={this.state.login} onChange={this.handleonChange} required />
                                </p>
                                <p>
                                    <label htmlFor="pwd">Password</label><span className="required-field">*</span><br/>
                                    <input type="password" name="pwd" id="pwd" value={this.state.pwd} onChange={this.handleonChange} required />
                                </p>
                            </div>
                        </fieldset>
                    </div>
                    <div>
                        <fieldset>
                            <legend>Personal Information</legend>
                            <div className="flex-row">
                                <p>
                                    <label htmlFor="first_name">First Name</label><span className="required-field">*</span><br/>
                                    <input type="text" name="first_name" id="first_name" value={this.state.first_name} onChange={this.handleonChange} required />
                                </p>
                                <p className="length-175px">
                                    <label htmlFor="middle_name">Middle Name</label><br/>
                                    <input type="text" name="middle_name" id="middle_name" value={this.state.middle_name} onChange={this.handleonChange} /><br/>
                                    <input type="checkbox" name="no_middle_name" id="no_middle_name" value={this.state.no_middle_name} onChange={this.handleonChange} />No middle name
                                </p>
                                <p>
                                    <label htmlFor="last_name">Last Name</label><span className="required-field">*</span><br/>
                                    <input type="text" name="last_name" id="last_name" value={this.state.last_name} onChange={this.handleonChange} required />
                                </p>
                                <p className="length-175px">
                                    <label htmlFor="preferred_name">Preferred Name</label>&nbsp;<i id="info-preferredname" className="far fa-question-circle" title="The name you would like to use in conversation." onClick={this.showInfo}></i><br/>
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
                                    <select name="age" id="age" value={this.state.age} onChange={this.handleonChange} >
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
                                <p>
                                    <label htmlFor="phone_1">Best Contact Phone Number</label><span className="required-field">*</span><br/>
                                    <input type="tel" name="phone_1" id="phone_1" value={this.state.phone_1} onChange={this.handlePhoneNumber} required />
                                </p>
                                {/* TODO: Format with dots */}
                                <p>
                                    <label htmlFor="phone_2">Alternate Contact Phone Number</label><br/>
                                    <input type="tel" name="phone_2" id="phone_2" value={this.state.phone_2} onChange={this.handlePhoneNumber} />
                                </p>
                                {/* TODO: Validate as email */}
                                <p>
                                    <label htmlFor="email">Email</label><br/>
                                    <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleonChange} />
                                </p>
                            </div>
                            <div className="flex-row">
                                <p>
                                    <label htmlFor="street_address">Street Address</label><span className="required-field">*</span><br/>
                                    <input type="text" name="street_address" id="street_address" value={this.state.street_address} onChange={this.handleonChange} required />
                                </p>
                                <p>
                                    <label htmlFor="apt_suite">Apartment or Suite</label><br/>
                                    <input type="text" name="apt_suite" id="apt_suite" value={this.state.apt_suite} onChange={this.handleonChange} />
                                </p>
                                <p>
                                    <label htmlFor="city">City</label><span className="required-field">*</span><br/>
                                    <input type="text" name="city" id="city" value={this.state.city} onChange={this.handleonChange} required />
                                </p>
                                <p>
                                    <label htmlFor="state_abbrev">State</label><br/>
                                    <select name="state_abbrev" id="state_abbrev" value={this.state.state_abbrev} onChange={this.handleonChange} >
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
                                    <label htmlFor="zip_code">Zip Code<span className="required-field">*</span></label><br/>
                                    <input type="text" name="zip_code" id="zip_code" value={this.state.zip_code} onChange={this.handleonChange} required />
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
                                        Can you work all days of the event?<span className="required-field">*</span><br/>
                                        <label>
                                            <input type="radio" name="work_all" value="1" checked={this.state.work_all === "1"} onChange={this.handleonChange} required />
                                            Yes
                                        </label><br/>
                                        <label>
                                            <input type="radio" name="work_all" value="0" checked={this.state.work_all === "0"} onChange={this.handleonChange} />
                                            No
                                        </label>
                                    </p>
                                    <p>
                                        Preferred Shifts<br/>
                                        <label>
                                            <input type="checkbox" name="morning" checked={this.state.hours.morning} onChange={this.handleHours} />
                                            Morning (6 am - 2 pm)
                                        </label><br/>
                                        <label>
                                            <input type="checkbox" name="day" checked={this.state.hours.day} onChange={this.handleHours} />
                                            Day (10 am - 6 pm)
                                        </label><br/>
                                        <label>
                                            <input type="checkbox" name="evening" checked={this.state.hours.evening} onChange={this.handleHours} />
                                            Evening (2 pm - 10 pm)
                                        </label><br/>
                                        <label>
                                            <input type="checkbox" name="overnight" checked={this.state.hours.overnight} onChange={this.handleHours} />
                                            Overnight (10 pm - 6 am)
                                        </label>
                                    </p>
                                    <p>
                                        Can you work pre-event (May-Sep)?<br/>
                                        <label>
                                            <input type="radio" name="pre_event" value="1" checked={this.state.pre_event === "1"} onChange={this.handleonChange} />
                                            Yes
                                        </label><br/>
                                        <label>
                                            <input type="radio" name="pre_event" value="0" checked={this.state.pre_event === "0"} onChange={this.handleonChange} />
                                            No
                                        </label>
                                    </p>
                                    <p>
                                        Can you work post-event (Sep-Nov)?<br/>
                                        <label>
                                            <input type="radio" name="post_event" value="1" checked={this.state.post_event === "1"} onChange={this.handleonChange} />
                                            Yes
                                        </label><br/>
                                        <label>
                                            <input type="radio" name="post_event" value="0" checked={this.state.post_event === "0"} onChange={this.handleonChange} />
                                            No
                                        </label>
                                    </p>
                                </div>
                        </fieldset>
                    </div>
                    <div>
                        <fieldset>
                            <legend>Work Type Preferences</legend>
                            <div className="flex-row">
                                <p>
                                    Event Jobs<br/>
                                    <label>
                                        <input type="checkbox" name="animals" checked={this.state.event_jobs.animals} onChange={this.handleEventJobs} />Animals
                                    </label><br/>
                                    <label>
                                        <input type="checkbox" name="building_maintenance" checked={this.state.event_jobs.building_maintenance} onChange={this.handleEventJobs} />Building Maintenance
                                    </label><br/>
                                    <label>
                                        <input type="checkbox" name="cleaning" checked={this.state.event_jobs.cleaning} onChange={this.handleEventJobs} />Cleaning
                                    </label><br/>
                                    <label>
                                        <input type="checkbox" name="customer_service" checked={this.state.event_jobs.customer_service} onChange={this.handleEventJobs} />Customer Service
                                    </label><br/>
                                    <label>
                                        <input type="checkbox" name="office_work" checked={this.state.event_jobs.office_work} onChange={this.handleEventJobs} />Office Work
                                    </label><br/>
                                    <label>
                                        <input type="checkbox" name="supervisor" checked={this.state.event_jobs.supervisor} onChange={this.handleEventJobs} />Supervisor
                                    </label>
                                </p>
                                <p>
                                    Vendor Jobs<br/>
                                    <label>
                                        <input type="checkbox" name="cooking" checked={this.state.event_jobs.cooking} onChange={this.handleVendorJobs} />Cooking
                                    </label><br/>
                                    <label>
                                        <input type="checkbox" name="food_preparation" checked={this.state.event_jobs.food_preparation} onChange={this.handleVendorJobs} />Food Preparation
                                    </label><br/>
                                    <label>
                                        <input type="checkbox" name="food_sales" checked={this.state.event_jobs.food_sales} onChange={this.handleVendorJobs} />Food Sales
                                    </label><br/>
                                    <label>
                                        <input type="checkbox" name="stand_maintenance" checked={this.state.event_jobs.stand_maintenance} onChange={this.handleVendorJobs} />Stand Maintenance
                                    </label><br/>
                                    <label>
                                        <input type="checkbox" name="retail_sales" checked={this.state.event_jobs.retail_sales} onChange={this.handleVendorJobs} />Retail Sales
                                    </label><br/>
                                    <label>
                                        <input type="checkbox" name="games_rides" checked={this.state.event_jobs.games_rides} onChange={this.handleVendorJobs} />Games and Rides
                                    </label>
                                </p>
                            </div>
                        </fieldset>
                    </div>
                    <div>
                        <fieldset>
                            <legend>
                                Work Experience
                            </legend>
                            <div className="flex-row">
                                <p>
                                    History<br/>
                                    <label>
                                        <input type="checkbox" name="prev_exp" checked={this.state.prev_exp} onChange={this.handleonChange} />
                                        I have previous work experience.
                                    </label><br/>
                                    <label>
                                        <input type="checkbox" name="prev_event_exp" checked={this.state.prev_event_exp} onChange={this.handleonChange} />
                                        I have worked for the event.
                                    </label><br/>
                                    <label>
                                        <input type="checkbox" name="prev_vendor_exp" checked={this.state.prev_vendor_exp} onChange={this.handleonChange} />
                                        I have worked for a vendor.
                                    </label>
                                </p>
                                <p>
                                    Skills<br/>
                                    <label>
                                        <input type="checkbox" name="cleaning_custodial" checked={this.state.skills.cleaning_custodial} onChange={this.handleSkills} />Cleaning or Custodial Work
                                    </label><br/>
                                    <label>
                                        <input type="checkbox" name="data_entry" checked={this.state.skills.data_entry} onChange={this.handleSkills} />Data Entry
                                    </label><br/>
                                    <label>
                                        <input type="checkbox" name="cooking" checked={this.state.skills.cooking} onChange={this.handleSkills} />Cooking
                                    </label><br/>
                                    <label>
                                        <input type="checkbox" name="customer_service" checked={this.state.skills.customer_service} onChange={this.handleSkills} />Customer Service
                                    </label><br/>
                                    <label>
                                        <input type="checkbox" name="heavy_equipment" checked={this.state.skills.heavy_equipment} onChange={this.handleSkills} />Heavy equipment operation
                                    </label><br/>
                                    <label>
                                        <input type="checkbox" name="food_beverage_service" checked={this.state.skills.food_beverage_service} onChange={this.handleSkills} />Food or Beverage Service
                                    </label><br/>
                                    <label>
                                        <input type="checkbox" name="physical_labor" checked={this.state.skills.physical_labor} onChange={this.handleSkills} />Physical Labor
                                    </label><br/>
                                    <label>
                                        <input type="checkbox" name="money_cashier" checked={this.state.skills.money_cashier} onChange={this.handleSkills} />Money Handling or Cashier
                                    </label><br/>
                                    <label>
                                        <input type="checkbox" name="retail_sales" checked={this.state.skills.retail_sales} onChange={this.handleSkills} />Retail Sales
                                    </label><br/>
                                    <label>
                                        <input type="checkbox" name="security" checked={this.state.skills.security} onChange={this.handleSkills} />Security
                                    </label>
                                </p>
                            </div>
                        </fieldset>
                    </div>
                    <div>
                        <fieldset>
                            <legend>Notice to Registrants</legend>
                            <p>
                                This registration is not an application for, an offer of, or a contract for employment with the event and creates no contractual or employment relationship between the event and the person completing this registration.
                            </p>
                            <p>
                                If you are referred to interview and are subsequently offered a position with the event, you will be required to complete the event's Application For Employment.
                            </p>
                            <p>
                                I certify that all statements made on this registration are true and complete to the best of my knowledge. I understand that any misrepresentation of any kind may result in denial of employment or subsequent dismissal if I am hired.
                            </p>
                            <label>
                                <input type="checkbox" name="reg_ack" checked={this.state.reg_ack} onChange={this.handleonChange} required />
                                I acknowledge that I have read the above information and that the answers I provided are true and accurate. This will serve as your signature.<span className="required-field">*</span>
                            </label>
                        </fieldset>
                    </div>
                    <div id="submit-reg">
                        <input type="submit" value="Submit Registration" />
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