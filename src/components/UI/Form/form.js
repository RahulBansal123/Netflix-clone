import React from 'react';
import { Link } from 'react-router-dom';
import './form.css';
const Form = (props) => {
  return (
    <div className="form">
      <h3>Sign In</h3>
      <div className="inputGroup">
        <input className="formInput" type="text" required />
        <label>Email or phone number</label>
      </div>
      <div className="inputGroup">
        <input className="formInput" type="text" required />
        <label>Password</label>
      </div>
      <button className="formbutton">Sign In</button>
      <div className="formHelp">
        <div>
          <input type="checkbox" />
          <h5>Remember Me</h5>
        </div>
        <h5>Need Help?</h5>
      </div>
      <h5>Login With Facebook</h5>
      <h5 style={{ marginTop: '20px', fontSize: '18px' }}>
        New to Netlix?
        <Link to="/">
          <span style={{ color: '#fff', cursor: 'pointer' }}> Sign up now</span>
        </Link>
      </h5>
      <h5 style={{ marginTop: '20px' }}>
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
        <span style={{ color: '#0071eb' }}>Learn more.</span>
      </h5>
    </div>
  );
};
export default Form;
