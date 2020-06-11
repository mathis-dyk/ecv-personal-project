import './index.scss'
import CTA from '../CTA'

const IntroBlock = ({ data }) => {
  const { title, img, introduction, cta } = data

  return (
    <section
      className="intro-block"
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_API_PATH}${img.url})`
      }}>
      <h1>{ title }</h1>
      <p>{ introduction }</p>
      { cta && <CTA link={cta.link} text={cta.text} />}
    </section>
  )
}

export default IntroBlock
