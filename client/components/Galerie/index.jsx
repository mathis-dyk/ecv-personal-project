import './index.scss'

const Galerie = ({ data }) => {
  const { picture } = data
  
  return (
    <section className="Galerie">
      {
        picture.map((picture, index) => (
          <div key={index}
            style={{
              backgroundImage: `url(${process.env.NEXT_PUBLIC_API_PATH}${picture.img.formats.small.url})`,
            }}
            className="picture"
          ></div>
        ))
      }
    </section>
  );
}

export default Galerie;
