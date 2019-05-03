import React from 'react';

const UnorderedListMark = props => (
  <ol {...props.attributes}>
    <li>{props.children}</li>
  </ol>
);

export default UnorderedListMark;
