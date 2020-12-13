import React, { Component } from 'react';
import { sendInfo } from '../action';
import { connect } from 'react-redux';

class PersonalInfo extends Component {
  toUpperCase = ({ target }) => {
    const { sendInfo } = this.props;

    target.value = target.value.toUpperCase();
    sendInfo({ name: target.value })
  }

  checkFirstLetter = ({ target }) => {
    const { sendInfo } = this.props;
    const firstLetter = target.value[0];

    if (Number(firstLetter) || firstLetter === '0') {
      target.value = '';
      sendInfo({ city: '' });
    }
  }
  render() {
    const { sendInfo } = this.props;

    return (
      <fieldset>
        <label htmlFor="input-name">Nome</label>
        <input
          id="input-name"
          maxLength="40"
          onChange={this.toUpperCase}
        />
        <label htmlFor="input-email">Email</label>
        <input
          onChange={({ target }) => sendInfo({ email: target.value })}
          id="input-email"
          maxLength="50"
        />
        <label htmlFor="input-cpf">CPF</label>
        <input
          onChange={({ target }) => sendInfo({ cpf: target.value })}
          id="input-cpf"
          maxLength="11"
        />
        <label htmlFor="input-adress">Endereço</label>
        <input
          onChange={({ target }) => sendInfo({ adress: target.value })}
          id="input-adress"
          maxLength="200"
        />
        <label htmlFor="input-city">Cidade</label>
        <input
          onChange={({ target }) => sendInfo({ city: target.value })}
          id="input-city"
          maxLength="28"
          onBlur={this.checkFirstLetter}
        />
        <label htmlFor="state">Estado</label>
        <select id="state" onChange={({ target }) => sendInfo({ state: target.value })}>
          <option>Acre</option>
          <option>Alagoas</option>
          <option>Amapá</option>
          <option>Amazonas</option>
          <option>Bahia</option>
          <option>Ceará</option>
          <option>Distrito Federal</option>
          <option>Espírito Santo</option>
          <option>Goiás</option>
          <option>Maranhão</option>
          <option>Mato Grosso</option>
          <option>Mato Grosso do Su)</option>
          <option>Minas Gerais</option>
          <option>Pará</option>
          <option>Paraíba</option>
          <option>Paraná</option>
          <option>Pernambuco</option>
          <option>Piauí</option>
          <option>Rio de Janeiro</option>
          <option>Rio Grande do Norte</option>
          <option>Rio Grande do Sul</option>
          <option>Rondônia</option>
          <option>Roraima</option>
          <option>Santa Catarina</option>
          <option>São Paulo</option>
          <option>Sergipe</option>
          <option>Tocantins</option>
        </select>
        <label htmlFor="house">Casa</label>
        <input onClick={({ target }) => sendInfo({ residence: target.value })}
          value="Casa"
          id="house"
          type="radio"
          name="type"
          defaultChecked
        />
        <label htmlFor="apt">Apartamento</label>
        <input onClick={({ target }) => sendInfo({ residence: target.value })}
          value="Apartamento"
          id="apt"
          type="radio"
          name="type"
        />
      </fieldset>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  sendInfo: (value) => dispatch(sendInfo(value)),
});

export default connect(null, mapDispatchToProps)(PersonalInfo);
