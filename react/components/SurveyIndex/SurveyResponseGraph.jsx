import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: '90%'
  },
  yesBar: {
    height: 10,
    backgroundColor: 'rgba(76, 217, 100, 1)'
  },
  noBar: {
    height: 10,
    backgroundColor: 'rgba(255, 59, 48, 1)'
  }
})

class SurveyResponseGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yesPercent: 0,
      noPercent: 0,
      pastTotal: 0
    }
  }

  componentWillMount() {
    this.adjustBars();
  }

  adjustBars() {
    const { yesCount, noCount, pastTotal } = this.props;
    const currentTotal = yesCount + noCount;

    if (!currentTotal || currentTotal === pastTotal) {
      return;
    }
    const yesPercent = Math.floor((yesCount / currentTotal) * 100);
    const noPercent = Math.floor((noCount / currentTotal) * 100);

    this.setState({ yesPercent, noPercent, pastTotal: currentTotal })
  }

  render() {
    const { yesPercent, noPercent, pastTotal } = this.state;

    if (!pastTotal) {
      return (
        <p>No responses yet.</p>
      )
    }

    return (
      <div className={css(styles.container)}>
        <span className={css(styles.yesBar)} style={{ width: `${yesPercent}%` }}></span>
        <span className={css(styles.noBar)} style={{ width: `${noPercent}%` }}></span>
      </div>
    )
  }
}

export default SurveyResponseGraph;
