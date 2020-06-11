import './index.scss'

const FullImage = ({ data }) => {
  const { img } = data

  if (img) {
    return (
    <img
        src={`${process.env.NEXT_PUBLIC_API_PATH}${img.url}`}
        alt={`${img.alternativeText}`}
        className="FullImage"
      />
    );
  } else {
    return null
  }
}

export default FullImage;
