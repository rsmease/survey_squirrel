import React from 'react';
import { Button, Modal } from 'reactstrap';
import { StyleSheet, css } from 'aphrodite';
import SurveyCreatorForm from './SurveyCreatorForm';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(0, 122, 255, 1)',
    borderColor: 'rgba(0, 122, 255, 1)',
    borderRadius: 22,
    padding: '10px 30px',
    transition: 'all 0.2s',
    ':focus': {
      backgroundColor: 'rgba(0, 122, 255, 0.8)',
      borderColor: 'rgba(0, 122, 255, 0.8)'
    }
  }
})

class SurveyCreator extends React.Component {
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
    const { modalIsOpen } = this.state;
    const { requestToCreateSurvey } = this.props;
    return (
      <React.Fragment>
        <Button className={css(styles.button)} onClick={this.toggle}>Click Here To Create a New Survey</Button>
        <Modal isOpen={modalIsOpen} toggle={this.toggle} centered>
          <SurveyCreatorForm toggle={this.toggle} requestToCreateSurvey={requestToCreateSurvey} />
        </Modal>
      </React.Fragment>
    );
  }
}

export default SurveyCreator;
