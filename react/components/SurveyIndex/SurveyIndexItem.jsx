import React from 'react';

class SurveyIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { survey } = this.props;

    return (
      <React.Fragment>
        <div>{survey.question}</div>
      </React.Fragment>
    );
  }
}

export default SurveyIndexItem;
