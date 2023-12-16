 const Title=()=>(
    <a href="/"> 
      <img className="logo" alt="Logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNx76pUGIu1KXqWiqRHteqox-vTDYnsMp6PQ&usqp=CAU"/>
    
      </a>
    ) ;  


 const Header =()=>{
        return(
             <div className="header">
                < Title />
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Cart</li>
                    </ul>
    
                </div>
             </div>
        )
    }

export default Header;