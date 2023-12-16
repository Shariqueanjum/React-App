import { createContext } from "react";

const UserContext =createContext({
    user:{
        name:"ABCD",
        email:"abcd@gmail.com"
    }
});

export default UserContext ;