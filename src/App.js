import React from 'react';
import './css/reset.css';
import './css/style.css';
import './css/responsive.css';
import marked from 'marked';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <h1 id="title">Markdown Machine</h1>
        <Input />
      </div>
    );
  }
}

class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      input:
        '# Markdown Syntax Guide\n---\n\nMarkdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.\n\n# This is a H1 Heading\n## This is a H2 Heading\n### This is a H3 Heading\nAnd so on...\n\n## Emphasis\n*This text will be italic.*\n\n_This text will also be italic._\n\n**This text will be bold.**\n\n__This text will also be bold.__\n\n~~You can also use strikethrough.~~\n\n## Lists\n### Unordered\n* Item A\n* Item B\n* Item C\n\n### Ordered\n1. Item I\n2. Item II\n3. Item III\n\n## Images\n![Alt text goes here.](https://upload.wikimedia.org/wikipedia/commons/9/93/Wikipedia-2nd-logo.png "Wikipedia Logo - Sample Image")\n\n## Blockquotes\n> Markdown is often used for formatting readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.\n\n## Links\nDesigned & Developed with 💛 by [__Andrei Racasan__](https://github.com/AndreiRacasan).\n\n## Code\nBuilt with `React` & `Marked.js`',
    };
  }

  updateInput(text) {
    this.setState({
      input: text.target.value,
      length: text.target.value.length,
    });
  }

  render() {
    return (
      <div className="holder">
        <div className="panel">
          <h3 id="subtitle">Input</h3>
          <textarea
            type="text"
            className="input in-out"
            value={this.state.input}
            onChange={this.updateInput.bind(this)}
          />
        </div>
        <div className="panel">
          <h3 id="subtitle">Output</h3>
          <Output markdown={this.state.input} />
        </div>
      </div>
    );
  }
}

class Output extends React.Component {
  renderOutput() {
    return { __html: marked(this.props.markdown) };
  }

  render() {
    return (
      <div
        className="output in-out"
        dangerouslySetInnerHTML={this.renderOutput()}
      ></div>
    );
  }
}

export default App;
