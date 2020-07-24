const defaultText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

function Preview({ input }) {
  return React.createElement("div", { id: "preview" },
  React.createElement(ReactMarkdown, { source: input }));

}

function App() {
  let [input, setInput] = React.useState(defaultText);
  function handleInputChange(event) {
    setInput(event.target.value);
  }
  return React.createElement(React.Fragment, null,
  React.createElement(Editor, { input: input, handleInputChange: handleInputChange }),
  React.createElement(Preview, { input: input }));

}

function Editor({ handleInputChange, input }) {
  return React.createElement("textarea", { value: input, onChange: handleInputChange, placeholder: "Enter the content for the markdown", id: "editor", rows: 10 });
}

ReactDOM.render(React.createElement(App, null), document.getElementById("content"));