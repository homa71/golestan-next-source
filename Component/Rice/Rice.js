"use client"
import { useContext } from "react";
import AboutSection from "../Tea/AboutSections";
import ProductBanners from "../Tea/ProductBanners";
import { MyContext } from "../MyContext/MyContext";

const Rice = () => {
    const {data}=useContext(MyContext)
    const rice=data?.rice
  return (
    <>
      
      <ProductBanners   pro={rice} />
      <AboutSection    pro={rice} />
    </>
  );
};

export default Rice;
