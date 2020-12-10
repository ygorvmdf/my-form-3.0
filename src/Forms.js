import React from 'react';

class Forms extends React.Component {
  constructor(props){
    super(props);

    this.toUpperCase = this.toUpperCase.bind(this);
    this.checkFirstLetter = this.checkFirstLetter.bind(this);
    this.warningAlert = this.warningAlert.bind(this);

    this.state = {
      validated: true,
    }
  }

  toUpperCase({target}) {
    target.value = target.value.toUpperCase();
  }

  checkFirstLetter({ target }) {
    const firstLetter = target.value[0];
    if (Number(firstLetter) || firstLetter === '0') {
      target.value = '';
    }
  }

  warningAlert() {
    alert('Preencha com cuidado esta informação.');
  }

  render() {
    return (
      <section>
        <fieldset>
          <label htmlFor="input-name">Nome</label>
          <input
            id="input-name"
            maxlength="40"
            onChange={this.toUpperCase}
            required
          />
          <label htmlFor="input-email">Email</label>
          <input
            id="input-email"
            maxlength="50"
            required
          />
          <label htmlFor="input-cpf">CPF</label>
          <input
            id="input-cpf"
            maxlength="11"
            required
          />
          <label htmlFor="input-adress">Endereço</label>
          <input
            id="input-adress"
            maxlength="200"
            required
          />
          <label htmlFor="input-city">Cidade</label>
          <input
            id="input-city"
            maxlength="28"
            onBlur={this.checkFirstLetter}
            required
          />
          <select>

          </select>
          <label>Casa</label>
          <input type="radio" name="type" />
          <label>Apartamento</label>
          <input type="radio" name="type" checked/>
        </fieldset>
        <fieldset>
          <label>resumo do currículo</label>
          <textarea maxlength="1000" required></textarea>
          <label>Cargo</label>
          <textarea onMouseOver={this.warningAlert} maxlength="40" required></textarea>
          <label>Descrição do cargo</label>
          <textarea maxlength="500" required></textarea>
        </fieldset>
      </section>
    );
  }
}

export default Forms;