const Profile = ({Data}) => {
  //const { Data } = props;
  const users = Data.map((obj) => {
    const {
      name,
      posts,
      followers,
      key,
      following,
      img,
      adress,
      live,
      hobby,
      job,
      link,
    } = obj;
    return (
      <div className="profil">
        <div className="rightProfil">
          <img src={img} alt="profilphoto" id="img"></img>
        </div>

        <div className="leftProfil" key={key}>
          <div className="profilTop">
            <h1 className="profilName">{name}</h1>
            <button>Edit Profile</button>
            <span className="parameter">⚙️</span>
          </div>
          <div className="spans">
            <div><span>{posts}</span> posts</div>
            <div><span>{followers}</span> followers</div> 
            <div><span>{following}</span> following</div> 
          </div>
          <div className="profilText">
            <span>📍 {adress}</span>
            <span>🏘️ {live}</span>
            <span>👽 {hobby}</span>
            <span>👨🏻‍💻 {job}</span>
            <a href="url"> {link} </a>
          </div>
        </div>
      </div>
    );
  });
  return <div>{users}</div>;
};
export default Profile;