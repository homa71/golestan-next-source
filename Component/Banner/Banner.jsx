"use client";
import { useContext } from "react";
import { MyContext } from "../MyContext/MyContext";
import Banner_data from "./Banner_data";

const Banner = () => {
  const { data } = useContext(MyContext);
  const banner = data?.banner;
  return (
 <Banner_data   banner={banner}  />
    
  );
};

export default Banner;
