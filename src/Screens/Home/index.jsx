import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from '../../store/action/user';
class Home extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logout());
  };
  render() {
    const { isLoggingOut, logoutError } = this.props;
    return (
      <div>
        <h1>HOME.</h1>
        <button onClick={this.handleLogout}>Logout</button>
        {isLoggingOut && <p>Logging Out....</p>}
        {logoutError && <p>Error logging out</p>}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    isLoggingOut: state.userState.isLoggingOut,
    logoutError: state.userState.logoutError
  };
}
export default connect(mapStateToProps)(Home);