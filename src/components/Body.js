import { restrauntList } from "../config";
import RestrauntCard from "./RestrauntCard";


const Body =()=>{
    return(
        <div className="restraunt-list">
          {
            restrauntList.map((restraunt)=>{
                return <RestrauntCard {...restraunt.info} key={restraunt.info.id}/>
            })
          }
          

        </div>
       
    )
};

export default Body