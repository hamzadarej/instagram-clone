import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHeart,
  faLocationArrow,
  faCompass,
  
} from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
  return (
    <div className="nav">
      <h2 class="content">𝕴𝖓𝖘𝖙𝖆𝖌𝖗𝖆𝖒</h2>
      <div class="content"><input placeholder="search" type="search"/></div>
      <div class="content">
        <FontAwesomeIcon icon={faHome} />
        <FontAwesomeIcon icon={faLocationArrow} />
        <FontAwesomeIcon icon={faCompass} />
        <FontAwesomeIcon icon={faHeart} />
        <span className="pic" ></span>
      </div>
     
    </div>
  );
};
export default Nav;
