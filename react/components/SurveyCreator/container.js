//utils
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//actions
import { requestToCreateSurvey } from '../../actions/survey_actions';

//components
import SurveyCreatorButton from './SurveyCreatorButton';

const mapStateToProps = () => { };

const mapDispatchToProps = (dispatch) => ({
  requestToCreateSurvey: (formData) => dispatch(requestToCreateSurvey(formData))
});

export default withRouter
  (connect(mapStateToProps, mapDispatchToProps)(SurveyCreatorButton));
