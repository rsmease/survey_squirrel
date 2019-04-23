//utils
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//actions
import { requestToCreateSurveyResponse } from '../../actions/survey_actions';

//components
import SurveyResponderForm from './SurveyResponderForm';

const mapStateToProps = () => { };

const mapDispatchToProps = (dispatch) => ({
  requestToCreateSurveyResponse: (formData) => dispatch(requestToCreateSurveyResponse(formData))
});

export default withRouter
  (connect(mapStateToProps, mapDispatchToProps)(SurveyResponderForm));
