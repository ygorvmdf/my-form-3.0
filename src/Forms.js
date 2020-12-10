import React from 'react';

class Forms extends React.Component {
  constructor(props){
    super(props);

    this.toUpperCase = this.toUpperCase.bind(this);

    this.state = {
      validated: true,
    }
  }

  toUpperCase({target}) {
    target.value = target.value.toUpperCase();
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
        </fieldset>
      </section>
    );
  }
}

export default Forms;