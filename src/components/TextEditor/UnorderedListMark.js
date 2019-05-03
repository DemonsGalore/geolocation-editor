import React from 'react';

const UnorderedListMark = props => (
  <ul {...props.attributes}>
    <li>{props.children}</li>
  </ul>
);

export default UnorderedListMark;
