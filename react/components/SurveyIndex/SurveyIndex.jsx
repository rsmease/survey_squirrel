import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { PulseLoader } from 'react-spinners';
import { StyleSheet, css } from 'aphrodite';

import Logo from './images/logo.png';
import SurveyIndexItem from './SurveyIndexItem';
import SurveyCreator from '../SurveyCreator/container';

const styles = StyleSheet.create({
  spinnerContainer: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: '30px 0'
  },
  centeredText: {
    textAlign: 'center'
  }
})
class SurveyIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidUpdate() {
    const { surveys } = this.props;
    const { loading } = this.state;

    if (surveys && loading) {
      setTimeout(() => this.setState({ loading: false }), 4000)
    }
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
    const { loading } = this.state;

    if (loading) {
      return (
        <div className={css(styles.spinnerContainer)}>
          <PulseLoader
            sizeUnit={"px"}
            size={30}
            color={'rgba(0, 122, 255, 1)'}
            loading={loading}
          />
        </div>
      )
    }

    return (
      <Container>
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
