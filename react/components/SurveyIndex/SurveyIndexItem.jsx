import React from 'react';
import { Col, Modal } from 'reactstrap';
import { StyleSheet, css } from 'aphrodite';

import SurveyResponder from '../SurveyResponder/container';
import SurveyResponseGraph from './SurveyResponseGraph';

const styles = StyleSheet.create({
  column: {
    cursor: 'pointer',
    minHeight: 200,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    margin: 20,
    padding: 30,
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    ':hover': {
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
    }
  },
  question: {
    textAlign: 'center'
  }
})
class SurveyIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { modalIsOpen } = this.state;
    this.setState({ modalIsOpen: !modalIsOpen })
  }

  render() {
    const { survey } = this.props;
    const { modalIsOpen } = this.state;

    return (
      <React.Fragment>
        <Col xs='12' lg='3' className={css(styles.column)} onClick={this.toggle}>
          <p className={css(styles.question)}>{survey.question}</p>
          <SurveyResponseGraph yesCount={survey.yes_count} noCount={survey.no_count} />
        </Col>
        <Modal isOpen={modalIsOpen} toggle={this.toggle} centered>
          <SurveyResponder survey={survey} toggle={this.toggle} />
        </Modal>
      </React.Fragment>
    );
  }
}

export default SurveyIndexItem;
