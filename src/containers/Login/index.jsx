import React from 'react'
import './style.css';
import { connect } from 'react-redux';
import { facebook_login } from '../../store/actions';
const Login = (props) => {
  return (
    <div>
        <h1>Login</h1>
        <button onClick={props.facebook_login}>Login with Facebook</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
    facebook_login: () => dispatch(facebook_login())
})

export default connect(null, mapDispatchToProps)(Login);
