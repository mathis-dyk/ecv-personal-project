import { fetchAPI } from '../tools/api'
import blocList from "./blocList"
import './page.scss'
import Link from 'next/link'
import cn from 'classnames'
import Head from 'next/head'
import Header from '../components/Header'

const Page = ({ data, theme, pages }) => {

  console.log(pages)
  return (
    <>
      <Head>
        <title>{ data[0].name }</title>
      </Head>
      <div className={`page ${theme.colors} ${theme.typos}`}>
        <Header data={pages} />
        {data && data[0].blocks.map((bloc, index) => {
          const TypeComponent = blocList[bloc.__component || null];
          return <TypeComponent data={bloc} key={index} />;
        })}
      </div>
      </>
  );
};

export const getStaticPaths = async () => {
  const api = await fetchAPI(
    `${process.env.NEXT_PUBLIC_API_PATH}/pages`
  )
  const data = await api.json();

  // Must return the list (array) of ALL possible value for "pid", else : 404 on reload
  const paths = data.map((page) => ({
    params: { pid: page.slug.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const api = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/pages?slug=${params.pid}`)
  const data = await api.json();

  const pagesFetch = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/pages`)
  const pages = await pagesFetch.json();

  const fetchTheme = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/theme`)
  const theme = await fetchTheme.json()

  return {
    props: {
      data,
      theme,
      pages
    },
  };
}

export default Page;
