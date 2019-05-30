import React, { Component } from 'react';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

class Contacto extends Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
    this.email = React.createRef();
    this.textArea = React.createRef();
    this.sendContactData = this.sendContactData.bind(this);
  }

  sendContactData() {
    const name = this.name.current.value;
    const email = this.email.current.value;
    const message = this.textArea.current.value;
    console.log({ name, email });

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', name, email, message })
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Formulario de contacto</h1>
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.sendContactData}
        >
          <input type="hidden" name="form-name" value="contact" />
          <span>Name</span>
          <input ref={this.name} type="text" name="name" />
          <span>Email</span> <input ref={this.email} type="email" name="email" />
          <span>Mensaje</span> <textarea ref={this.textArea} name="message" />
          <button onClick={this.sendContactData}>Send</button>
        </form>
      </div>
    );
  }
}
export default Contacto;
