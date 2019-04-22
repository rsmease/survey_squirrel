//utils
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//actions
import { requestToCreateSurveyResponse } from '../../actions/survey_actions';

//components
import SurveyResponderButtons from './SurveyResponderButtons';

const mapStateToProps = () => { };

const mapDispatchToProps = (dispatch) => ({
  requestToCreateSurveyResponse: (formData) => dispatch(requestToCreateSurveyResponse(formData))
});

export default withRouter
  (connect(mapStateToProps, mapDispatchToProps)(SurveyResponderButtons));
