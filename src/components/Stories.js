const Stories =(props)=>{
    const {storiesData}=props;
    const storie=storiesData.map((obj)=>{
        const{img}=obj;

    
    
    return (
        
<div class="storie"><img src={img} className="storieImg"></img></div>


    )
    }) 
    return <div class="stories">{storie}</div>;
};

export default Stories;