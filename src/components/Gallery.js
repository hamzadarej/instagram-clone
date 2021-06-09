import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
const Gallery = ({ storiesData }) => {
  const gallery = storiesData.map((obj) => {
    const { img, comment, like } = obj;

    return (
      <div className="imageG">
        <img src={img} className="galleryImg"></img>
        <div className="image-hover">
          <span>
            <FontAwesomeIcon className="galleryIconHeart" icon={faHeart} /> 
            <p>{like}</p>
          </span>
          <span>
            <FontAwesomeIcon className="galleryIconComment" icon={faComment} />
            <p>{comment}</p>
          </span>
        </div>
      </div>
    );
  });
  return <div className="galleryContainer">
    <div className="galleries">{gallery}</div>
  </div>;
};
export default Gallery;
