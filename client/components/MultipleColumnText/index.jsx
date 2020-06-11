import React, { useState } from 'react'
import './index.scss'
import showdown from 'showdown'
const converter = new showdown.Converter()

const MultipleColumnText = ({ data }) => {
  const { columns, content } = data

  return (
    <div
      className="MultipleColumnText"
      style={{ columnCount: columns }}
      dangerouslySetInnerHTML={{__html: converter.makeHtml(content) }}
    />
  );
};

export default MultipleColumnText;
