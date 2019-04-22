import React from 'react';
import { Button } from 'reactstrap';

class SurveyResponderButtons extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(responseBool) {
    const { requestToCreateSurveyResponse, surveyID } = this.props;
    requestToCreateSurveyResponse({ survey_id: surveyID, response: responseBool });
  }

  render() {
    const { yesCount, noCount } = this.props;
    return (
      <React.Fragment>
        <Button color="primary" onClick={() => this.handleSubmit(true)}>Yes</Button>
        {yesCount}
        <Button color="secondary" onClick={() => this.handleSubmit(false)}>No</Button>
        {noCount}
      </React.Fragment>
    );
  }
}

export default SurveyResponderButtons;
