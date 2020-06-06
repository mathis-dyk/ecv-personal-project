import cn from 'classnames'
import styles from './index.module.scss'
import CTA from '../CTA'

const ImageText = ({ data }) => {
  const { cta, image, text, mode } = data

  let className = cn(styles.imageText, {
    [styles.vertical]: mode === false,
    [styles.horizontal]: mode === true,
  });

  return (
    <section className={className}>
      <div className={styles.textPart}>
        <p>{text}</p>
        <CTA link={cta.link} text={cta.text} />
      </div>
      <img
        src={`${process.env.NEXT_PUBLIC_API_PATH}${image.url}`}
        alt="Some descriptive text"
      />
    </section>
  );
}

export default ImageText;
