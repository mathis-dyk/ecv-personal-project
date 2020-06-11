import Link from 'next/link'
import './index.scss'

/**
 * @link
 * @text
 */

const CTA = ({ link, text, basePath = "/" }) => {
  return (
    <Link scroll={true} href={`${basePath}[pid]`} as={`${link}`}>
      <a className="cta">{text}</a>
    </Link>
  );
}

export default CTA
