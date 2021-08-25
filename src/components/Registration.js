import React from 'react'
import { connect } from 'react-redux'

const Registration = props => {
    console.log('Registration component')
    console.log(props.currentUserId)
    return (
        <div>
            Registration<br/>
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

const mapStateToProps = state => {
    return {
        currentUserId: state.current_user.id
    }
}

export default connect(mapStateToProps)(Registration)