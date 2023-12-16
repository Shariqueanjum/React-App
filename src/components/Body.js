import { restrauntList } from "../config";
import RestrauntCard from "./RestrauntCard";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import { SWIGGY_API_URL } from "../config";





const Body =()=>{
  //let searchTxt="KFC";

  //useState is Hook provided by react use to create local state variable
  const[searchText, setSearchText]=useState("");
  const[filteredRestraunts , setFilteredRestraunts]=useState([])
  const[allRestraunts , setAllRestraunts]=useState([]);
 
  
  useEffect(()=>{
    getRestaurants();
 
  }, []);

  async function getRestaurants(){
    const data= await fetch(SWIGGY_API_URL);

    const json= await data.json();

    console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     setAllRestraunts(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     setFilteredRestraunts(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  } 

    // As there is some problems in fetching swiggy Api , we are faking our data just for now :)

 //console.log(restraunts)

   // making an online /offline features
    const isOnline=useOnline();
    if(!isOnline){
      return(
      <h1> you are offline</h1>
      )
    }

    return allRestraunts.length ===0 ? (
            <Shimmer/>
    ) : (
      <>
      <div className="search-container">
        <input type="text"
         className="search-input" 
        placeholder="search" 
        value={searchText}
        onChange={(e)=>{
          setSearchText(e.target.value)
          }
        } 
        />

        <button 
        className="search-btn"
        onClick={()=>{
           const data= filterData(searchText , allRestraunts);
          setFilteredRestraunts(data);
           
        }} 
        >
          Search
        </button>

      </div>
        <div className="restraunt-list">
          {
            filteredRestraunts.map((restraunt)=>{
                return <RestrauntCard {...restraunt.info} key={restraunt.info.id}/>
            })
          }
          

        </div>
      </> 
    )
        
};

export default Body ;