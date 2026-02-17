import Menu from "./Menu";
import Social from "./Social";

async function fetchData() {
  try {
    let data = await fetch("https://homa71.github.io/golestan-api/db.json");
    let res = await data.json();
    return res;
  } catch (error) {
    console.log(error);
  }
}

async function Footer() {
  const data = await fetchData();
  const footer = data?.footer;
  return (
    <>
    
      <Social footer={footer} />
      <Menu   footer={footer} />
    </>
  );
}

export default Footer;
