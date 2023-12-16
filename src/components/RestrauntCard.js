import { IMG_CDN_URL } from "../config"


const RestrauntCard =({name,cuisines,cloudinaryImageId,avgRating})=>{
    //const {name,cuisines,cloudinaryImageId,avgRating}=restraunt.info
      return(
        <div className="card">
          <img src={IMG_CDN_URL+cloudinaryImageId} />
          <h2>{name}</h2>
          <h4>{cuisines.join(',')}</h4>
          <h4>{avgRating}</h4>
        </div>
      )
   };

export default RestrauntCard