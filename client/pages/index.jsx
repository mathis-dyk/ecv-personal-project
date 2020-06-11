import blocList from './blocList'
import { fetchAPI } from '../tools/api'
import './page.scss'
import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/Header'

export default function Home({ data, theme, pages }) {
  const pageDatas = data

  return (
      <>
        <Head>
          <title>{ data[0].name }</title>
        </Head>
        <div className={`container page ${theme.colors} ${theme.typos}`}>
          <Header data={pages} />
          {
            pageDatas[0].blocks.map((bloc, index) => {
              const TypeComponent = blocList[bloc.__component || null];
              return (
                <TypeComponent data={bloc} key={index} />
              )
            })
          }
        </div>
      </>
  );
}

export async function getStaticProps() {
  const api = await fetchAPI(`${process.env.NEXT_PUBLIC_API_PATH}/pages?slug=`)
  const data = await api.json()

  const pagesFetch = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/pages`)
  const pages = await pagesFetch.json();

  const themeFetch = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/theme`)
  const theme = await themeFetch.json();

  return {
    props: {
      data,
      theme,
      pages
    },
  };
}
