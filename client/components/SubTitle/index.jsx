import styles from './index.module.scss'

const SubTitle = ({ data }) => {
  const { text } = data

  return <h2 className={styles.SubTitle}>{ text }</h2>;
}

export default SubTitle
