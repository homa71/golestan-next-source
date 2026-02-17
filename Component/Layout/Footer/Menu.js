import Menu_part from "./Menu_part";

const Menu = ({ footer }) => {
  const menu = footer?.menu;
  return (
    <div className=" w-full h-fit bg-[#2b2b2b] pt-[35px] ">
      <div className=" menu-center  w-[720px] h-[325px] mx-auto flex flex-row justify-start items-center mb-[35px] gap-x-4  ">
        <Menu_part menu={menu} />
      </div>
      <div className="rule  w-full h-[140px]  flex flex-col gap-y-0.5 justify-center items-center  ">
        <p className="font-sans text-[16px] text-gray-400 font-medium">
          {footer.rule.copyright}
        </p>
        <p className="font-sans text-[13px] text-gray-400 font-normal">
          {footer.rule.design}
        </p>
      </div>
    </div>
  );
};

export default Menu;
