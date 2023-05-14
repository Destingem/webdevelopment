import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const CodeSnippet = () => {
  const codeString = `class Developer {
  constructor(name, age, ic, address, skills) {
    this.name = name;
    this.age = age;
    this.ic = ic;
    this.address = address;
    this.skills = skills;
  }


}

const ondrej = new Developer(
  "Ondřej Zaplatílek",
  18,
  17538408,
  "Moravské Bránice 119, Dolní Kounice 664 64",
  [
    "Next.js",
    "React.js",
    "Node.js",
    "Electron.js",
    "MongoDB",
    "SQL",
    "Python",
    "Pentesting",
  ]
);

ondrej.displayBio();`;

 

  return (
    <SyntaxHighlighter showLineNumbers language="javascript" style={solarizedDark}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default CodeSnippet;
