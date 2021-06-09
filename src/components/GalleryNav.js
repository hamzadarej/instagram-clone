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
      <div className="gallerySpans">
      
          <span>
            <FontAwesomeIcon className="icon" icon={faTh} />&nbsp;<p>POSTS</p>
          </span>
      
        <span>
          <FontAwesomeIcon className="icon" icon={faFileVideo} />&nbsp;<p>IGTV</p>
        </span>
        <span>
          {" "}
          <FontAwesomeIcon className="icon" icon={faBookmark} />&nbsp;<p>SAVED</p>
        </span>
        <span>
          <FontAwesomeIcon className="icon" icon={faUserTag} />&nbsp;<p>TAGGED</p>
        </span>
      </div>
    </div>
  );
};
export default GalleryNav;
