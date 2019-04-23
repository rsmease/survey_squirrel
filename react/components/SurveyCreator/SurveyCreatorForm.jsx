import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import { ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import SurveyCreator from './SurveyCreatorButton';

const styles = StyleSheet.create({
  modalHeader: {
    paddingTop: 12,
    borderBottom: 'none'
  },
  title: {
    marginTop: 18,
    marginLeft: 10
  },
  modalFooter: {
    borderTop: 'none',
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 30
  },
  modalBody: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 0
  },
  input: {
    borderStyle: 'solid',
    padding: '10px 0 10px 30px',
    width: 400,
    borderWidth: 1,
    borderRadius: 22,
    transition: 'all .2s',
    ':focus': {
      borderColor: 'rgba(0, 122, 255, 1)',
      outline: 'none'
    }
  },
  button: {
    backgroundColor: 'rgba(0, 122, 255, 1)',
    borderColor: 'rgba(0, 122, 255, 1)',
    color: 'rgba(255, 255, 255, 1)',
    borderRadius: 22,
    padding: '10px 30px',
    transition: 'all .2s',
    ':focus': {
      backgroundColor: 'rgba(0, 122, 255, 0.8)',
      borderColor: 'rgba(0, 122, 255, 0.8)'
    }
  }
})

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
        <ModalHeader toggle={toggle} className={css(styles.modalHeader)}>
          <p className={css(styles.title)}>What would you like to ask?</p>
        </ModalHeader>
        <ModalBody className={css(styles.modalBody)}>
          <form>
            <input
              maxLength={60}
              className={css(styles.input)}
              value={this.state.question}
              onChange={this.handleInput('question')}
            />
          </form>
        </ModalBody>
        <ModalFooter className={css(styles.modalFooter)}>
          <Button className={css(styles.button)} onClick={this.handleSubmit}>Get Answers</Button>{' '}
        </ModalFooter>
      </React.Fragment>
    );
  }
}

export default SurveyCreatorForm;
