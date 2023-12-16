import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const About =()=>{
    const dispatch=useDispatch();

    const handleAddItem=()=>{
         dispatch(addItem("Grapes"));
    }
   
    const handleRemoveItem=()=>{
        dispatch(removeItem());
    }

    return(
        <>
        <h1>About us</h1>
        <button onClick={() => handleAddItem()}>Add item</button>
        <button onClick={()=>handleRemoveItem()}>Remove Itmes</button>
        <Outlet/>
        </>
    )
}

export default About ;