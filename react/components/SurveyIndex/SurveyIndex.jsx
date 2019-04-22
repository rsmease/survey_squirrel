import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { StyleSheet, css } from 'aphrodite';

import Logo from './images/logo.png';
import SurveyIndexItem from './SurveyIndexItem';
import SurveyCreator from '../SurveyCreator/container';

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    margin: '30px 0'
  },
  centeredText: {
    textAlign: 'center'
  }
})
class SurveyIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    document.title = "Survey Squirrel - Home"
    this.props.requestAllSurveys();
  }

  displaySurveys(surveys) {
    return Object.values(surveys).map((survey) => <SurveyIndexItem survey={survey} />)
  }

  render() {
    const { surveys } = this.props;
    return (
      <Container>
        <Row className={css(styles.row)}>
          <img src={Logo} />
        </Row>
        <Row className={css(styles.row)}>
          <Col xs='12'>
            <h3 className={css(styles.centeredText)}>Welcome to Survey Squirrel</h3>
          </Col>
          <Col xs='12'>
            <p className={css(styles.centeredText)}>Click any of the surveys below to submit your response.</p>
          </Col>
        </Row>
        <Row fluid className={css(styles.row)}>
          <SurveyCreator />
        </Row>
        <Row fluid className={css(styles.row)}>
          {Object.values(surveys).map((survey) => (
            <SurveyIndexItem survey={survey} />)
          )}
        </Row>
      </Container>
    );
  }
}

export default SurveyIndex;
