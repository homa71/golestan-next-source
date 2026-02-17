import Banner from "@/Component/Banner/Banner";
import Magazine from "@/Component/Magazine/Magazine";
import Magazine_video from "@/Component/Magazine_video/Magazine_video";
import MyProvider from "@/Component/MyContext/MyProvider";
import Pistachio from "@/Component/Pistachio/Pistachio";
import Rice from "@/Component/Rice/Rice";
import Tea from "@/Component/Tea/Tea";


async function fetchData() {
  try {
    let data = await fetch("https://homa71.github.io/golestan-api/db.json");
    let res = await data.json();
    return res;
  } catch (error) {
    console.log(error);
  }
}

export default async function page() {
  const data = await fetchData();
  return (
    <MyProvider data={data}>
      <Banner/>
      <Tea/>
      <Rice/>
      <Pistachio/>
      <Magazine />
      <Magazine_video />
    </MyProvider>
  );
}
