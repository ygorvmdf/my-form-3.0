import React, { Component } from 'react';
import { warningAlert, sendInfo } from '../action';
import { connect } from 'react-redux';

class JobInfo extends Component {
  showAlert = () => {
    const { warningAlert, showAlert } = this.props;
    if (showAlert) {
      warningAlert()
    }
  }

  render() {
    const { warningAlert, sendInfo, showAlert } = this.props;

    return (
      <fieldset>
        <label>Resumo do currículo</label>
        <textarea
          onChange={({ target }) => sendInfo({ curriculum: target.value })}
          maxLength="1000"
        >
        </textarea>
        <label>Cargo</label>
        <textarea
          onChange={({ target }) => sendInfo({ jobRole: target.value })}
          onMouseOver={this.showAlert}
          maxLength="40"
        >
        </textarea>
        <label>Descrição do cargo</label>
        <textarea
          onChange={({ target }) => sendInfo({ jobDescription: target.value })}
          maxLength="500"
        >
        </textarea>
      </fieldset>
    )
  }
}

const mapStateToProps = state => ({
  showAlert: state.warningReducer.showAlert,
});

const mapDispatchToProps = dispatch => ({
  warningAlert: () => dispatch(warningAlert()),
  sendInfo: (value) => dispatch(sendInfo(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(JobInfo);
