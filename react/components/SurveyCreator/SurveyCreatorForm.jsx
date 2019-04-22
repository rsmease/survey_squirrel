import React from 'react';
import { ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import SurveyCreator from './SurveyCreatorButton';

class SurveyCreatorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: ''
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    document.title = "Survey Squirrel - Create a New Survey"
  }

  componentWillUnmount() {
    document.title = "Survey Squirrel - Home"
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    const { toggle, requestToCreateSurvey } = this.props;

    e.preventDefault();

    requestToCreateSurvey(this.state);
    toggle();
  }

  render() {
    const { toggle } = this.props;

    return (
      <React.Fragment>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <form>
            <label>What would you like to ask?</label>
            <textarea
              type="textarea"
              value={this.state.question}
              onChange={this.handleInput('question')}
            />
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.handleSubmit}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </React.Fragment>
    );
  }
}

export default SurveyCreatorForm;
