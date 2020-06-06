import Link from 'next/link'
import styles from './index.module.scss'

/**
 * @link
 * @text
 */

const CTA = ({ link, text }) => {
  return (
    <Link href="/[pid]" as={`${link}`}>
      <a className={styles.cta}>{text}</a>
    </Link>
  );
}

export default CTA
