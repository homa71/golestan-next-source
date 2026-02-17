"use client"
import { useContext } from "react";
import AboutSection from "../Tea/AboutSections";
import ProductBanners from "../Tea/ProductBanners";
import { MyContext } from "../MyContext/MyContext";

const Pistachio = () => {
       const {data}=useContext(MyContext)
        const pistachio=data?.pistachio
    return ( 
        <>
        <ProductBanners  pro={pistachio}  />
        <AboutSection  pro={pistachio} />
        </>
     );
}
 
export default Pistachio;