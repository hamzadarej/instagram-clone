const Gallery=({storiesData})=>{
    const gallery=storiesData.map((obj)=>{
        const{img}=obj;

    
    
    return (
       
        
<div className="imageG"><img src={img} className="galleryImg"></img></div>


    )
    }) 
    return <div className="galleries">{gallery}</div>;
};
export default Gallery;