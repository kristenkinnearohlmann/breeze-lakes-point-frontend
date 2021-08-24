import React from 'react'
import { connect } from 'react-redux'
import Splash from './Splash'

const Site = () => {

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