import React, { Component } from 'react';

class TextArea extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  render() {
    const { className, onChange } = this.props;
    return <textarea ref={this.input} className={className} onChange={onChange} />;
  }
}

export default TextArea;
