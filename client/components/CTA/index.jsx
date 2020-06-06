import Link from 'next/link'
import styles from './index.module.scss'

/**
 * @link
 * @text
 */

const CTA = ({ link, text, basePath = "/" }) => {
  return (
    <Link scroll={true} href={`${basePath}[pid]`} as={`${link}`}>
      <a className={styles.cta}>{text}</a>
    </Link>
  );
}

export default CTA
