import './index.scss'

const SubTitle = ({ data }) => {
  const { text } = data

  return <h2 className="SubTitle">{ text }</h2>;
}

export default SubTitle
