import Link from 'next/link'

const Header = ({ data }) => {
  return (
    <header>
      <ul>
        {
          data && data.filter(bloc => bloc.inHeader).map(page => (
            <li key={page.id}>
              <Link href={`/`} as={`${page.slug}`} >
                <a>{page.name}</a>
              </Link>
            </li>
          ))
        }
      </ul>
    </header>
  )
}

export default Header
