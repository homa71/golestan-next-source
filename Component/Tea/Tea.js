"use client"
import { useContext } from "react";
import { MyContext } from "../MyContext/MyContext";
import ProductBanners from "./ProductBanners";
import AboutSection from "./AboutSections";

const Tea = () => {
    const {data}=useContext(MyContext)
    const tea=data?.tea
    return ( 
        <>
        <ProductBanners pro ={tea}  />
        <AboutSection   pro={tea}  />
        </>
       
     );
}
 
export default Tea;