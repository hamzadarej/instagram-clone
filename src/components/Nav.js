import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHeart,
  faLocationArrow,
  faCompass,
  
  
} from "@fortawesome/free-solid-svg-icons";

const Nav = ({Data}) => {
  //const { Data }=props;
  const imgPic =Data.map((obj)=>{
    const { img } = obj;
    
 
  return (
    <div className="nav">
      <h1 className="content">ⁱⁿˢᵗᵃᵍʳᵃᵐ</h1>
      <div className="content"> <input placeholder="search" type="search"></input></div>
      <div className="content">
        <FontAwesomeIcon icon={faHome} />
        <FontAwesomeIcon icon={faLocationArrow} />
        <FontAwesomeIcon icon={faCompass} />
        <FontAwesomeIcon icon={faHeart} />
        <span  ></span>
        <img src={img} alt="profilphoto" className="pic"></img>
      </div>
     
    </div>
  ); } )
  return <div>{imgPic}</div>
  
};
export default Nav;
