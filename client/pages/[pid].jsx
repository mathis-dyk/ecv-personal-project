import { fetchAPI } from '../tools/api'
import blocList from "./blocList";

const Page = ({ data }) => {
  return (
    <div className="container">
      { data && data[0].blocks.map((bloc, index) => {
        const TypeComponent = blocList[bloc.__component || null];
        return <TypeComponent data={bloc} key={index} />;
      })}
    </div>
  );
};

export const getStaticPaths = async () => {
  const api = await fetchAPI(
    `${process.env.NEXT_PUBLIC_API_PATH}/pages`
  )
  const data = await api.json();

  const paths = data.map((page) => ({
    params: { pid: page.slug.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const api = await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/pages?slug=${params.pid}`)
  const data = await api.json();

  return {
    props: {
      data
    },
  };
}

export default Page;
