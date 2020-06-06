import styles from './index.module.scss'

const FullImage = ({ data }) => {
  const { img } = data

  return (
    <img
      src={`${process.env.NEXT_PUBLIC_API_PATH}${img.url}`}
      alt={`${img.alternativeText}`}
      className={styles.FullImage}
    />
  );
}

export default FullImage;
