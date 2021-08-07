import { React, Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render () {
        console.log('Here?')
        console.log(this.props.currentUserId)

        const displayItems = () => {
            if (this.props.currentUserId === -1) {
                return <p>You must log in to see your dashboard.</p>
            } else {
                return <p>Current user: {this.props.currentUserId}</p>
            }
        }

        return (
            <div>
                <h1 className="title">Dashboard</h1>
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
        currentUserId: state.current_user.id
    }
}

export default connect(mapStateToProps)(Dashboard)