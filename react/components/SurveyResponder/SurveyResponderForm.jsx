import React from 'react';
import { ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import SurveyResponderButtons from './SurveyResponderButtons';

class SurveyResponderForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    document.title = "Survey Squirrel - Respond to This Survey"
  }

  componentWillUnmount() {
    document.title = "Survey Squirrel - Home"
  }

  render() {
    const { toggle, survey, requestToCreateSurveyResponse } = this.props;

    return (
      <React.Fragment>
        <ModalBody>
          <p>{survey.question}</p>
          <SurveyResponderButtons surveyID={survey.id} yesCount={survey.yes_count} noCount={survey.no_count} requestToCreateSurveyResponse={requestToCreateSurveyResponse} />
        </ModalBody>
      </React.Fragment>
    );
  }
}

export default SurveyResponderForm;
