import React, { Component } from 'react';

class SearchWord extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }
  render() {
    const { onChange } = this.props;
    return (
      <div className="searchDiv">
        <span>Buscar palabra</span>
        <input ref={this.input} onChange={onChange} />
      </div>
    );
  }
}

export default SearchWord;
