import cn from 'classnames'
import './index.scss'
import CTA from '../CTA'

const ImageText = ({ data }) => {
  const { cta, image, text, mode, imgSize, title, revert } = data

  let className = cn("imageText", {
    ["vertical"]: mode === false,
    ["horizontal"]: mode === true,
    ["revert"]: revert === true,
    ["unrevert"]: revert === false,
  });

  return (
    <section className={className}>
      <div className="textPart">
        <h2>{ title }</h2>
        <p>{text}</p>
        { cta && <CTA link={cta.link} text={cta.text} />}
      </div>
      {
        image && (
          <img
            style={{ width: imgSize + "%" }}
            src={`${process.env.NEXT_PUBLIC_API_PATH}${image.formats.medium.url}`}
            alt="Some descriptive text"
          />
        )
      }
    </section>
  );
}

export default ImageText;
