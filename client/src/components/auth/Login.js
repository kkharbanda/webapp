import React , { useState } from 'react';
import { Link ,Navigate} from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

      const {  email, password } = formData;
      const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = async (e) => {
        e.preventDefault();
        login({ email, password });
      };
      if (isAuthenticated) {
        return <Navigate to="/dashboard" />;
      }
  return (
    <section className="container">
    
    <h1 class="large text-primary">Sign In</h1>
    <p class="lead"><i class="fas fa-user"></i> Sign into Your Account</p>
    <form class="form" onSubmit = {onSubmit}>
      <div class="form-group">
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value = {email}
          onChange={onChange}
          required
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          placeholder="Password"
          name="password"
          value = {password}
           onChange={onChange}
          required
        />
      </div>
      <input type="submit" class="btn btn-primary" value="Login" />
    </form>
    <p class="my-1">
      Don't have an account? <Link href="/register">Sign Up</Link>
    </p>
  </section>
  )
}
Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
 
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, login})(Login);

