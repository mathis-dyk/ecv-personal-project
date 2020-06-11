import './index.scss'
import cn from 'classnames'

const SmallImage = ({ data }) => {
  const { img, percent, side } = data

  let className = cn("SmallImage", {
    ["right"]: side === 1,
    ["left"]: side === 0,
  });

  return (
    <div className={className}>
      {
        img && (
          <img
            src={`${process.env.NEXT_PUBLIC_API_PATH}${img.url}`}
            alt=""
            style={{ width: percent + "%" }}
          />
        )
      }
    </div>
  );
}

export default SmallImage;
