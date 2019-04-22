import React from 'react';
import { Button, Modal } from 'reactstrap';
import SurveyCreatorForm from './SurveyCreatorForm';

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
        <Button color="danger" onClick={this.toggle}>Click Here</Button>
        <Modal isOpen={modalIsOpen} toggle={this.toggle}>
          <SurveyCreatorForm toggle={this.toggle} requestToCreateSurvey={requestToCreateSurvey} />
        </Modal>
      </React.Fragment>
    );
  }
}

export default SurveyCreator;
