//utils
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//actions
import { requestAllSurveys } from '../../actions/survey_actions';

//components
import SurveyIndex from './SurveyIndex';

const mapStateToProps = (state, ownProps) => {
  return {
    surveys: state.surveys
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestAllSurveys: () => dispatch(requestAllSurveys())
});

export default withRouter
  (connect(mapStateToProps, mapDispatchToProps)(SurveyIndex));
