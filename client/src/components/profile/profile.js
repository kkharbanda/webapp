import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getProfileById } from '../../actions/profile'
import Spinner from '../layout/spinner'


const Profile = ({ getProfileById }) => {
    useEffect(() => {
        getProfileById(id);
    }, [getProfileById,id]);
  
  return (
    <div>profile</div>
  )
}

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    profile: state.profile
  });
  
  export default connect(mapStateToProps, { getProfileById })(Profile);
  