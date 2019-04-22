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
        <SurveyResponder surveyID={survey.id} yesCount={survey.yes_count} noCount={survey.no_count} />
      </React.Fragment>
    );
  }
}

export default SurveyIndexItem;
