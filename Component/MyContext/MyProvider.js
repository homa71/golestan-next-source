
"use client"

import { MyContext } from "./MyContext";

const MyProvider = ({children,data}) => {
  
  
    return ( 
        <MyContext.Provider  value={{data}}>
            {children}
        </MyContext.Provider>
     );
}
 
export default MyProvider;