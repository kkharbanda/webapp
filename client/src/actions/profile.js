import api from '../utils/api';
import { setAlert } from './alert';
import { GET_PROFILE,  PROFILE_ERROR,CLEAR_PROFILE , UPDATE_PROFILE } from "../actions/types";

export const getCurrentProfile  = () =>async (dispatch) =>{
    
    try {
        const res = await api.get('/profile/me');
        dispatch ({
            type : GET_PROFILE,
            payload :res.data
        })

    } catch (err) {
        dispatch({
            type:  PROFILE_ERROR, 
            payload: { msg: err.response.statusText, status: err.response.status }
          });
    }
}
export const CreateProfile = (formData,navigate,edit = false) => async (dispatch) =>{
    
    try {
        const res = await api.post('/profile',formData);
        dispatch ({
            type : GET_PROFILE,
            payload : res.data
        })
        dispatch(
            setAlert(edit ? 'Profile Updated' : 'Profile Created' , 'success'),
          )
          if(!edit){
            navigate.push('/dashboard')
          }
       ;
}catch(err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
        type:  PROFILE_ERROR, 
        payload: { msg: err.response.statusText, status: err.response.status }
      });
}
}
// Add Experience
export const addExperience = (formData, navigate) => async (dispatch) => {
    try {
      const res = await api.put('/profile/experience', formData);
  
      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data
      });
  
      dispatch(setAlert('Experience Added', 'success'));
  
      navigate('/dashboard');
    } catch (err) {
      const errors = err.response.data.errors;
  
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }
  
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
  
  // Add Education
  export const addEducation = (formData, navigate) => async (dispatch) => {
    try {
      const res = await api.put('/profile/education', formData);
  
      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data
      });
  
      dispatch(setAlert('Education Added', 'success'));
  
      navigate('/dashboard');
    } catch (err) {
      const errors = err.response.data.errors;
  
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }
  
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
  