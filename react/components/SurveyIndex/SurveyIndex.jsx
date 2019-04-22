import React from 'react';
import SurveyIndexItem from './SurveyIndexItem';
import SurveyCreator from '../SurveyCreator/container';

class SurveyIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestAllSurveys();
  }

  displaySurveys(surveys) {
    return Object.values(surveys).map((survey) => <SurveyIndexItem survey={survey} />)
  }

  render() {
    const { surveys } = this.props;
    return (
      <React.Fragment>
        {Object.values(surveys).map((survey) => (
          <SurveyIndexItem survey={survey} />)
        )}
        <SurveyCreator />
      </React.Fragment>
    );
  }
}

export default SurveyIndex;
