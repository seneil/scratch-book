import React from 'react';
import ReactDOM from 'react-dom';

const Application = () => <div>Hello World!</div>;

const render = Body => {
  ReactDOM.render(
    <Body/>,
    window.document.getElementById('root'),
  );
};

render(Application);
