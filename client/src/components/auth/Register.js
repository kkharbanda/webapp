import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';

export const Register = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
      });
      const { name, email, password, password2 } = formData;
      const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = async (e) => {
        e.preventDefault();
        if (password !== password2) {
          props.setAlert('Passwords do not match', 'danger');
        } else {
          
        }
      };
  return (
    <section class="container">
      <h1 class="large text-primary">Sign Up</h1>
      <p class="lead"><i class="fas fa-user"></i> Create Your Account</p>
      <form class="form" onSubmit={onSubmit}>
        <div class="form-group">
          <input type="text"  value={name}
            onChange={onChange} placeholder="Name" name="name" required />
        </div>
        <div class="form-group">
          <input type="email"  value={email}
            onChange={onChange} placeholder="Email Address" name="email" />
          <small class="form-text"
            >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small
          >
        </div>
        <div class="form-group">
          <input
            type="password"
            value={password}
            onChange={onChange}
            placeholder="Password"
            name="password"
            minLength="6"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            value={password2}
            onChange={onChange}
            name="password2"
            minLength="6"
            required
          />
        </div>
        <input type="submit" class="btn btn-primary" value="Register" />
      </form>
      <p class="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </section>
  )
}

export default connect(null, { setAlert })(Register);