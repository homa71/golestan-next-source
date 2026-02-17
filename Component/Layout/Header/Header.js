

import Menu from "./Menu";
async function fetchData() {
  try {
    let data = await fetch("https://homa71.github.io/golestan-api/db.json");
    let res = await data.json();
    return res;
  } catch (error) {
    console.log(error);
  }
}
 async function Header(){
    const data = await fetchData();
    const menu= data?.menu
  
    return ( 
       <Menu menu={menu} /> 
     );
}
 
export default Header;