import React from 'react';
import SurveyResponder from '../SurveyReponder/container';
class SurveyIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { survey } = this.props;

    return (
      <React.Fragment>
        <div>{survey.question}</div>
        <div>{survey.responses.length}</div>
        <SurveyResponder surveyID={survey.id} />
      </React.Fragment>
    );
  }
}

export default SurveyIndexItem;
