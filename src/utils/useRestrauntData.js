import {useState , useEffect} from "react";
const useRestrauntData=()=>{
    const[filteredRestraunts , setFilteredRestraunts]=useState([])
    const[allRestraunts , setAllRestraunts]=useState([]);

    useEffect(()=>{
        getRestaurants();
     
      }, []);

      async function getRestaurants(){
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.52432568813728&lng=77.25242036749513&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
        const json= await data.json();
    
        console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         setAllRestraunts(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         setFilteredRestraunts(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
      } 

      return {allRestraunts , filteredRestraunts}

}

export default useRestrauntData ;