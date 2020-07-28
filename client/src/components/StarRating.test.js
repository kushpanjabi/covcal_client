import React from 'react';
import ReactDOM from 'react-dom';
import StarRating from './StarRating';

// this is the test case
it('renders component without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');

  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<StarRating />, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});