"use client";
import { useContext } from "react";
import Magazine_card from "../Magazine/Magazine_card";
import { MyContext } from "../MyContext/MyContext";

const Magazine_video = () => {
  const { data } = useContext(MyContext);
  const magazineVideo = data?.magazineVideo;
  return (
    <div className="w-full h-[602px] my-[60px]  flex flex-row gap-3 justify-center items-center">
      {magazineVideo.items?.map((item) => {
        return <Magazine_card item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Magazine_video;
