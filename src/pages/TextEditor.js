import React, { Fragment, useState, useRef } from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';

import BoldMark from '../components/TextEditor/BoldMark';
import ItalicMark from '../components/TextEditor/ItalicMark';
import UnderlineMark from '../components/TextEditor/UnderlineMark';
import UnorderedListMark from '../components/TextEditor/UnorderedListMark';
import OrderedListMark from '../components/TextEditor/OrderedListMark';
import CodeMark from '../components/TextEditor/CodeMark';
import QuoteMark from '../components/TextEditor/QuoteMark';
import FormatToolbar from '../components/TextEditor/FormatToolbar';

const TextEditor = props => {
  const editor = useRef(null);
  const initialValue = Value.fromJSON({
    document: {
      nodes: [
        {
          object: 'block',
          type: 'paragraph',
          nodes: [
            {
              object: 'text',
              text: 'A line of text in a paragraph.',
            },
          ],
        },
      ],
    },
  });
  const [value, setValue] = useState(initialValue);

  const onKeyDown = (e, editor, next) => {
    if (!e.ctrlKey) { return }
    e.preventDefault();

    switch (e.key) {
      case 'b':
        editor.toggleMark('bold');
        return next();
      case 'i':
        editor.toggleMark('italic');
        return next();
      case 'u':
        editor.toggleMark('underline');
        return next();
      case 'l':
        editor.toggleMark('list-ul');
        return next();
      case 'o':
        editor.toggleMark('list-ol');
        return next();
      case 'c':
        editor.toggleMark('code');
        return next();
      case 'q':
        editor.toggleMark('quote');
        return next();
      default:
        return next();
    }
  }

  const renderMark = props => {
    switch (props.mark.type) {
      case 'bold':
        return <BoldMark {...props} />
      case 'italic':
        return <ItalicMark {...props} />
      case 'underline':
        return <UnderlineMark {...props} />
      case 'list-ul':
        return <UnorderedListMark {...props} />
      case 'list-ol':
        return <OrderedListMark {...props} />
      case 'code':
        return <CodeMark {...props} />
      case 'quote':
        return <QuoteMark {...props} />
      default:
        break;
    }
  }

  const onMarkClick = (e, type) => {
    e.preventDefault();
    editor.current.toggleMark(type);
  }

  return (
    <Fragment>
      <h1>TextEditor</h1>
      <FormatToolbar>
        <button
          onPointerDown={e => onMarkClick(e, 'bold')}
        ><i className="fas fa-bold fa-lg"></i></button>
        <button
          onPointerDown={e => onMarkClick(e, 'italic')}
        ><i className="fas fa-italic fa-lg"></i></button>
        <button
          onPointerDown={e => onMarkClick(e, 'underline')}
        ><i className="fas fa-underline fa-lg"></i></button>
        <button
          onPointerDown={e => onMarkClick(e, 'list-ul')}
        ><i className="fas fa-list-ul fa-lg"></i></button>
        <button
          onPointerDown={e => onMarkClick(e, 'list-ol')}
        ><i className="fas fa-list-ol fa-lg"></i></button>
        <button
          onPointerDown={e => onMarkClick(e, 'code')}
        ><i className="fas fa-code fa-lg"></i></button>
        <button
          onPointerDown={e => onMarkClick(e, 'quote')}
        ><i className="fas fa-quote-right fa-lg"></i></button>
      </FormatToolbar>
      <Editor
        ref={editor}
        value={value}
        onChange={e => setValue(e.value)}
        onKeyDown={onKeyDown}
        renderMark={renderMark}
      />
    </Fragment>
  );
}

export default TextEditor;
