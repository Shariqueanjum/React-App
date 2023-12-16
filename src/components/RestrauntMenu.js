import { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import { restaurantsData } from "../config";
import Shimmer from "./Shimmer";


const RestrauntMenu =()=>{
     const {resId} = useParams();
     console.log(resId);
   const [restraunt , setRestraunt]=useState(null);
    

   useEffect(()=>{
       setRestraunt(restaurantsData[resId])
       console.log(restaurantsData);
   },[resId])


   // async function getRestrauntInfo(){
   //    const data = await fetch("https://www.swiggy.com/restaurants/starbucks-coffee-m-block-greater-kailash-2-delhi-69466");
   //    const json = await data.json();
   //    console.log(json.data);

   // }
  if(!restraunt){
   return(
      <Shimmer/>
   )
  }
  

   return (
     <h1>{restraunt.name}</h1>


   )




}

export default RestrauntMenu ;