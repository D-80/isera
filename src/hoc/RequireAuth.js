import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export default function (ComposedComponent) {
  class Authentication extends Component {

    render() {
      if (!this.props.loggedIn) return <Redirect to='/login' />
      return <ComposedComponent {...this.props} />
    }
  }

  Authentication.propTypes = {
    authenticated: PropTypes.bool
  };

  function mapStateToProps(state) {
    return {
      loggedIn: state.auth.loggedIn,
    };
  }

  return connect(mapStateToProps)(Authentication);
}
