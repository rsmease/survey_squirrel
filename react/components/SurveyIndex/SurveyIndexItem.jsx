import React from 'react';
import { Col } from 'reactstrap';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  column: {
    backgroundColor: '#DBA72E',
    height: 200,
    margin: 20,
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    ':hover': {
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
    }
  },
  question: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
})
class SurveyIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { survey } = this.props;

    return (
      <Col xs='12' md='3' className={css(styles.column)}>
        <p className={css(styles.question)}>{survey.question}</p>
      </Col>
    );
  }
}

export default SurveyIndexItem;
