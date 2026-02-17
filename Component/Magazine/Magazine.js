"use client";
import { useContext } from "react";
import { MyContext } from "../MyContext/MyContext";
import Magazine_section from "./Magazine_section";


const Magazine = () => {
  const { data} = useContext(MyContext);
  const magazine = data?.magazine;


  return (
    <div className="w-full h-fit my-12.5">
    <Magazine_section  magazine={magazine} />
    </div>
  );
};

export default  Magazine;
