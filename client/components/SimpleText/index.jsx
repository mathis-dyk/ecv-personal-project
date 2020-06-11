import Link from 'next/link'
import './index.scss'
import showdown from 'showdown'
const converter = new showdown.Converter()

const SimpleText = ({ data }) => {
  const { content, position } = data

  return (
  <div className={`simpleText ${position}`}
    dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }}
  />
  )
}

export default SimpleText;
