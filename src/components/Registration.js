import React from 'react'
import { connect } from 'react-redux'

const Registration = props => {
    console.log('Registration component')
    console.log(props.currentUserId)
    return (
        <div>
            Registration
            <form>
                
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentUserId: state.current_user.id
    }
}

export default connect(mapStateToProps)(Registration)