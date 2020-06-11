import './index.scss'

const PresentBlock = ({ data }) => {
  const { title, introduction, OnePresentBlock } = data
  console.log(data)
  return (
    <section className="present-block">
      <h2>{ title }</h2>
      <p>{ introduction }</p>
      <div className="presentBlockElements">
        {
          OnePresentBlock.map(block => (
            <div key={block.id} className="presentBlockElement">
              <img src={`${process.env.NEXT_PUBLIC_API_PATH}${block.logo.url}`} />
              <h3>{ block.title}</h3>
              <p>{ block.text }</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default PresentBlock
