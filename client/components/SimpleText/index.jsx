import Link from 'next/link'
import styles from './index.module.scss'

const SimpleText = ({ data }) => {
  const { content } = data

  return <p className={styles.simpleText}>{content}</p>;
}

export default SimpleText;
