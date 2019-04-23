import React from 'react';
import { Button } from 'reactstrap';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '80%',
    justifyContent: 'space-around',
    padding: 30
  },
  button: {
    borderRadius: 22,
    padding: '10px 30px',
    transition: 'all .2s',
    ':hover': {
      transform: 'scale(1.05)'
    }
  },
  yesButton: {
    backgroundColor: '#4A572C',
    borderColor: '#4A572C'
  },
  noButton: {
    backgroundColor: '#E34819',
    borderColor: '#E34819'
  }
});
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
    console.log(this.props);
    return (
      <div className={css(styles.container)}>
        <Button
          onClick={() => this.handleSubmit(true)}
          className={css(styles.button, styles.yesButton)}
        >
          {`Yes ${yesCount}`}
        </Button>
        <Button
          onClick={() => this.handleSubmit(false)}
          className={css(styles.button, styles.noButton)}
        >
          {`No ${noCount}`}
        </Button>
      </div>
    );
  }
}

export default SurveyResponderButtons;
