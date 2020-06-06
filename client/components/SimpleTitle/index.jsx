import styles from './index.module.scss'

const SimpleTitle = ({ data }) => {
  const { title, subtitle } = data
  
  return (
    <section className={styles.simpleTitle}>
      <h1>{ title }</h1>
      <p>{ subtitle }</p>
    </section>
  )
}

export default SimpleTitle
