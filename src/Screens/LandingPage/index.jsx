import React from 'react'
import { connect } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import { ArrowRightOutlined } from '@ant-design/icons';

import './style.css'

import Todo from '../../img/todo.svg'

const LandingPage = ({ isAuthenticated }) => {
  const history = useHistory()

  return (
    <div>
      {
        isAuthenticated ? <Redirect to="/" /> :
          <div className="lp-container">
            <h1 className="lp-title">Reyn - Todo</h1>
            <div className="lp-box-image">
              <img src={Todo} alt="todo" className="lp-image" />
            </div>
            <p className="lp-subtitle">Get Organized Your Live</p>
            <div className="lp-box-desc">
              <p className="lp-desc">Reyn - Todo is a simple and effective to-to-list and task manager web-app which helps you manage time.</p>
            </div>
            <div className="lp-box-btn" onClick={() => history.push('/login')}>
              <div className="lp-btn">Get Started <ArrowRightOutlined style={{ marginLeft: 5 }} /></div>
            </div>
          </div>
      }
    </div>
  )
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.userState.isAuthenticated
  };
}

export default connect(mapStateToProps)(LandingPage)