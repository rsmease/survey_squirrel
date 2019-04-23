import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import { ModalBody } from 'reactstrap';

import SurveyResponderButtons from './SurveyResponderButtons';
import SurveyResponseGraph from '../SurveyIndex/SurveyResponseGraph';

const styles = StyleSheet.create({
  modalBody: {
    padding: 30,
    minHeight: 200,
    borderWidth: 0,
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  question: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 0
  }
})

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
        <ModalBody className={css(styles.modalBody)}>
          <p className={css(styles.question)}>{survey.question}</p>
          <SurveyResponderButtons surveyID={survey.id} yesCount={survey.yes_count} noCount={survey.no_count} requestToCreateSurveyResponse={requestToCreateSurveyResponse} />
          <SurveyResponseGraph yesCount={survey.yes_count} noCount={survey.no_count} />
        </ModalBody>
      </React.Fragment>
    );
  }
}

export default SurveyResponderForm;
