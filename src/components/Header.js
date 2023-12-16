import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Title=()=>(
    <a href="/"> 
      <img className="logo" alt="Logo" src="https://cdn.octopix.in/uploads/company-logo/2020/11/19/food-villa-pSJVhwoN8KxgwV9jtuB1MlosJ0ejoKfiBiVO1jJPLM61shyarbxVvjIFy3DVpbUML8eBxcUo7BOWXQcd-350x350.jpg"></img>
    
      </a>
    ) ;  


 const Header =()=>{

    const {user}=useContext(UserContext);
    const cartItems=useSelector((store)=>store.cart.items);

        return(
             <div className="header">
                <Title />
                <div className="nav-items">
                    <ul>
                        <li> <Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/instamart">Instamart</Link></li>
                        <li>Cart-{cartItems.length}</li>
                        <li>{user.name }:- {user.email}</li>
                    </ul>
    
                </div>
             </div>
        )
    }

export default Header;