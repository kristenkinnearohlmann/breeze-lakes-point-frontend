import React from 'react'
import { connect } from 'react-redux'
import Splash from './Splash'

const Site = props => {
    console.log(props.currentUserId)
    return (
      <div>
        <Splash />
      </div>
    )
}

const mapStateToProps = state => {
  return {
    currentUserId: state.current_user.id
  }
}

export default connect(mapStateToProps)(Site)