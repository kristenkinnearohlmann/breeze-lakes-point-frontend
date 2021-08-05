import { React, Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render () {
        console.log('Here?')
        console.log(this.props.currentUserId)
        return (
            <div>
                <h1 className="title">Dashboard</h1>
                <p>
                    <ul>
                        <li>Applicant</li>
                        <li>Editor</li>
                        <li>FullEditor</li>
                        <li>Admin</li>
                        <li>Entity</li>
                    </ul>
                </p>
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