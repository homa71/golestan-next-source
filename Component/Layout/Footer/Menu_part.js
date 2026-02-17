import Link from "next/link";
const Menu_part = ({ menu }) => {
  return (
    <>
      {menu?.map((part) => {
        return (
          <div
            key={part.id}
            className="menu-part w-[327px] h-full flex flex-col gap-y-2 items-center   "
          >
            <img src={part.image} alt="" />
            <div className="w-full h-px bg-gray-400"></div>
            <h4 className="font-iransans font-bold text-gray-300">
              {part.title}
            </h4>
            <div className="w-full h-px bg-gray-400"></div>
            <div className="menu-items  w-full h-fit pt-3 flex flex-col gap-y-2 items-start justify-start ">
              {part.items?.map((item) => {
                return (
                  <div className="font-iransans  text-gray-400  font-normal text-[14px]    hover:text-white">
                    <Link key={item.id} href="">
                      {item.title}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Menu_part;
