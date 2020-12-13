import React from 'react';
import PersonalInfo from './components/PersonalInfo';
import JobInfo from './components/JobInfo';
import { connect } from 'react-redux';

class Forms extends React.Component {
  constructor() {
    super();

    this.state = {
      validated: false,
    }
  }

  validateData = (e) => {
    e.preventDefault();
    const { info } = this.props;
    const keys = Object.keys(info);
    for (let key of keys) {
      if (info[key] === '') {
        this.setState({
          validated: false,
        });
        return;
      }
    }
    this.setState({
      validated: true,
    });
  }

  renderDataDiv = () => {
    const { info } = this.props;
    const { validated } = this.state;
    if (validated) {
      return (
        <div>
          <h2>Informações:</h2>
          <p>Nome: {`${info.name}`}</p>
          <p>Email: {`${info.email}`}</p>
          <p>CPF: {`${info.cpf}`}</p>
          <p>Endereço: {`${info.adress}`}</p>
          <p>Cidade: {`${info.city}`}</p>
          <p>Estado: {`${info.state}`}</p>
          <p>Tipo de Residencia: {`${info.residence}`}</p>
          <p>Resumo do currículo: {`${info.curriculum}`}</p>
          <p>Cargo: {`${info.jobRole}`}</p>
          <p>Descrição do cargo: {`${info.jobDescription}`}</p>
        </div>
      );
    }
    return 'Por Favor, preencha todos os campos.';
  }

  cleanFields = () => {
    this.setState({
      validated: false,
    })

    const dataInput = document.getElementsByTagName('input');
    const dataTextArea = document.getElementsByTagName('textarea');
    for(let input of dataInput) {
      input.value = '';
    }
    for(let textArea of dataTextArea) {
      textArea.value = '';
    }
  }

  render() {
    return (
      <div>
        <form>
          <PersonalInfo />
          <JobInfo />
          <button onClick={this.validateData} type="submit">Submit</button>
        </form>
        <button onClick={this.cleanFields}>Limpar</button>
        {this.renderDataDiv()}
      </div>
    );
  }
};

const mapStateToProps = state => ({
  info: state.infoReducer.info,
});

export default connect(mapStateToProps)(Forms);