import blocList from './blocList'
import { fetchAPI } from '../tools/api'

export default function Home({ data }) {
  const pageDatas = data

  return (
    <div className="container">
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
  const api = await fetchAPI(`${process.env.NEXT_PUBLIC_API_PATH}/pages`)
  const data = await api.json()

    return {
      props: {
        data
      },
    };
}
