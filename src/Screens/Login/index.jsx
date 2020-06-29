import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { Form, Input, Button, Spin } from 'antd';
import { MailOutlined, LockOutlined, LoadingOutlined } from '@ant-design/icons';

import './style.css'

import Login from '../../img/login.svg'
import { login } from "../../store/action/user";

const NormalLoginForm = ({ isAuthenticated, isLoggingIn }) => {
  const dispatch = useDispatch()

  const onFinish = values => {
    const { email, password } = values
    dispatch(login(email, password))
  };

  return (
    <div>
      {
        isAuthenticated ? <Redirect to="/" /> :
          <div className="login-container">
            <h1 className="login-title">Login</h1>
            <div className="lp-box-image">
              <img src={Login} alt="todo" className="login-image" />
            </div>
            <div className="login-form-box">
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="email"
                  className="input"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Username!',
                    },
                  ]}
                  style={{ marginBottom: 10 }}
                >
                  <Input size="large" prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Password!',
                    },
                  ]}
                >
                  <Input
                    size="large"
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>

                <Form.Item>
                  <div className="box-btn-login">
                    <Button size="large" type="ghost" htmlType="submit" className="login-form-button">
                      {isLoggingIn ? <LoadingOutlined style={{color: 'white', fontSize: 20, fontWeight: "bold", marginTop: 3}} /> : <p className="p-login">Log in</p>}
                    </Button>
                    <p className="p-or">Or</p>
                    <Link to="/register">Register Now</Link>
                  </div>
                </Form.Item>
              </Form>
            </div>
          </div>
      }
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isLoggingIn: state.userState.isLoggingIn,
    loginError: state.userState.loginError,
    isAuthenticated: state.userState.isAuthenticated
  };
}

export default connect(mapStateToProps)(NormalLoginForm)