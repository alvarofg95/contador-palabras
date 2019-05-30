import React, { Component } from 'react';
import TextArea from '../components/TextArea';
import { processText } from '../utils';
import Counter from '../components/Counter';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numCharacters: 0,
      paragraph: 0,
      numWords: 0,
      numSpaces: 0
    };
    this.textArea = React.createRef();
    this.onChangeText = this.onChangeText.bind(this);
  }

  componentDidMount() {
    this.textArea.current.input.current.focus();
  }

  onChangeText() {
    const text = this.textArea.current.input.current.value;
    const result = processText(text);
    this.setState({
      ...result
    });
  }

  render() {
    return (
      <div className="container">
        <div className="counterDiv">
          <Counter text="Caracteres" value={this.state.numCharacters} />
          <Counter text="Párrafos" value={this.state.paragraph} />
          <Counter text="Palabras" value={this.state.numWords} />
          <Counter text="Espacios" value={this.state.numSpaces} />
        </div>
        <TextArea ref={this.textArea} className="textareaHome" onChange={this.onChangeText} />
      </div>
    );
  }
}

export default Home;
