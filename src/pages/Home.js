import React, { Component } from 'react';
import TextArea from '../components/TextArea';
import { processText, processWord } from '../utils';
import Counter from '../components/Counter';
import Button from '../components/Button';
import SearchWord from '../components/SearchWord';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numCharacters: 0,
      paragraph: 0,
      numWords: 0,
      numSpaces: 0,
      times: 0,
      percent: 0
    };
    this.textArea = React.createRef();
    this.textInput = React.createRef();
    this.onChangeText = this.onChangeText.bind(this);
    this.cleanTextArea = this.cleanTextArea.bind(this);
    this.onSearchWord = this.onSearchWord.bind(this);
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

  cleanTextArea() {
    this.textArea.current.input.current.value = '';
    this.textArea.current.input.current.focus();
    this.onChangeText();
  }

  onSearchWord() {
    const word = this.textInput.current.input.current.value;
    if (word && word.length) {
      const text = this.textArea.current.input.current.value;
      if (word.toLowerCase() === text.toLowerCase()) {
        this.setState({ times: 1, percent: 100 });
      } else {
        const result = processWord(text, word.toLowerCase());
        if (result) {
          this.setState({ ...result });
        }
      }
    } else {
      this.setState({ times: 0 });
    }
  }

  render() {
    const { numCharacters, paragraph, numWords, numSpaces, times, percent } = this.state;
    return (
      <div className="container">
        <h1>Contador de Palabras</h1>
        <div className="counterDiv">
          <Counter text="Caracteres" value={numCharacters} />
          <Counter text="Párrafos" value={paragraph} />
          <Counter text="Palabras" value={numWords} />
          <Counter text="Espacios" value={numSpaces} />
          <Button
            button
            height="30px"
            alt="Limpiar caja de texto"
            title="Limpiar caja de texto"
            src={require('../images/eraser.svg')}
            onClick={this.cleanTextArea}
          />
        </div>
        <div className="borderTextArea">
          <TextArea ref={this.textArea} className="textareaHome" onChange={this.onChangeText} />
        </div>
        <SearchWord ref={this.textInput} onChange={this.onSearchWord} />
        {times > 0 && (
          <div className="counterDiv">
            <Counter text="Repeticiones" value={times} />
            <Counter text="Porcentaje" value={`${percent}%`} />
          </div>
        )}
      </div>
    );
  }
}

export default Home;
