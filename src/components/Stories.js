const Stories =({storiesData})=>{
    //const {storiesData}=props;
    const storie=storiesData.map((obj)=>{
        const{img}=obj;

    
    
    return (
        
<div class="storie"><img src={img} alt="stories" className="storieImg"></img></div>


    )
    }) 
    return <div className="stories">{storie}</div>;
};

export default Stories;