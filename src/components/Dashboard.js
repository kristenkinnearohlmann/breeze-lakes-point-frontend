import { React, Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Dashboard extends Component {
    render () {
        console.log('Dashboard component')
        console.log(this.props.currentUserId)

        const displayItems = () => {
            if (this.props.currentUserId === -1) {
                return <p>You must <NavLink to="/login" exact>log in</NavLink> to see your dashboard.</p>
            } else {
                return <p>Current user: {this.props.currentUserEmail}<br/>User type: {this.props.currentUserType}</p>
            }
        }

        return (
            <div>
                <h1>Dashboard</h1>
                {displayItems()}
                <ul>
                    <li>Applicant</li>
                    <li>Editor</li>
                    <li>FullEditor</li>
                    <li>Admin</li>
                    <li>Entity</li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUserId: state.current_user.id,
        currentUserEmail: state.current_user.email,
        currentUserType: state.current_user.user_type
    }
}

export default connect(mapStateToProps)(Dashboard)