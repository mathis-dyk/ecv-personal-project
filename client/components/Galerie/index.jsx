import styles from './index.module.scss'

const Galerie = ({ data }) => {
  const { picture } = data
  
  return (
    <section className={styles.Galerie}>
      {
        picture.map((picture, index) => (
          <div key={index}
            style={{
              backgroundImage: `url(${process.env.NEXT_PUBLIC_API_PATH}${picture.img.url})`,
            }}
            className={styles.picture}
          ></div>
        ))
      }
    </section>
  );
}

export default Galerie;