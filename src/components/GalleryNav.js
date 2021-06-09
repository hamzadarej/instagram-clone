import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTh,
  faFileVideo,
  faBookmark,
  faUserTag,
} from "@fortawesome/free-solid-svg-icons";
const GalleryNav = () => {
  return (
    <div className="galleryNav">
      <span>
        <span>
          <FontAwesomeIcon className="icon" icon={faTh} /> 
        </span> POSTS
      </span>
      <span>
        <FontAwesomeIcon className="icon" icon={faFileVideo} /> IGTV
      </span>
      <span>
        {" "}
        <FontAwesomeIcon className="icon" icon={faBookmark} /> SAVED
      </span>
      <span>
        <FontAwesomeIcon className="icon" icon={faUserTag} /> TAGGED
      </span>
    </div>
  );
};
export default GalleryNav;
