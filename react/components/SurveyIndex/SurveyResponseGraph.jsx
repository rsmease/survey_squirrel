import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  yesBar: {
    height: 2,
    color: '#4A572C'
  },
  noBar: {
    height: 2,
    color: '#E34819'
  }
})

class SurveyReponseGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yesPercent: 0,
      noPercent: 0
    }
  }

  adjustBars() {
    const { yesCount, noCount } = this.props;
    const total = yesCount + noCount;
    if (!total) {
      return;
    }

    const yesPercent = Math.floor((yesCount / total) * 100);
    const noPercent = Math.floor((noCount / total) * 100);

    this.setState({ yesPercent, noPercent })
  }

  render() {
    const { yesPercent, noPercent } = this.state;

    return (
      <React.Component>
        <div className={css(styles.yesBar)} styles={{ width: `${yesPercent}%` }}></div>
        <div className={css(styles.noBar)} styles={{ width: `${noPercent}%` }}></div>
      </React.Component>
    )
  }
}
