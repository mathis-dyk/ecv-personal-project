import blocList from './blocList'
import { fetchAPI } from '../tools/api'
import './page.scss'

export default function Home({ data, theme }) {
  const pageDatas = data

  return (
      <div className={`container page ${theme.colors} ${theme.typos}`}>
        {
          pageDatas[0].blocks.map((bloc, index) => {
            const TypeComponent = blocList[bloc.__component || null];
            return (
              <TypeComponent data={bloc} key={index} />
            )
          })
        }
      </div>
  );
}

export async function getStaticProps() {
  const api = await fetchAPI(`${process.env.NEXT_PUBLIC_API_PATH}/pages?slug=`)
  const data = await api.json()

  const themeFetch = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/theme`)
  const theme = await themeFetch.json();

  return {
    props: {
      data,
      theme
    },
  };
}
