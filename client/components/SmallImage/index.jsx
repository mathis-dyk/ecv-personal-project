import styles from './index.module.scss'
import cn from 'classnames'

const SmallImage = ({ data }) => {
  const { img, percent, side } = data

  let className = cn(styles.SmallImage, {
    [styles.right]: side === 1,
    [styles.left]: side === 0,
  });

  return (
    <div className={className}>
      <img
        src={`${process.env.NEXT_PUBLIC_API_PATH}${img.url}`}
        alt=""
        style={{ width: percent + "%" }}
      />
    </div>
  );
}

export default SmallImage;
