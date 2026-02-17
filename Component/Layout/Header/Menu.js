import Link from "next/link";

const Menu = ({ menu }) => {
  return (
    <header className="w-full h-[100px] bg-[#272727] sticky top-0 z-[1000] flex justify-start items-center ">
      <img
        src={menu?.logo.src}
        alt=""
        className="absolute right-[150px] top-[50px]"
      />
      <nav className=" w-fit h-[40px] flex items-center mr-[370px] ">
        {menu?.items.map((item) => {
          return (
            <div
              key={item.id}
              className="w-fit h-full  flex flex-col relative group"
            >
              <Link
                href=""
                className="text-[#A5ACB0] no-underline px-5 text-base font-iransans h-full flex items-center hover:text-white"
              >
                {item.title}
              </Link>
              {item.submenu?.length > 0 ? (
                <div className=" submenu w-[185px] h-fit absolute right-0 top-[40px] flex flex-col gap-y-1 bg-[#272727] invisible opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100  ">
                  {item.submenu.map((item,index)  => {
                    return (
                      <Link key={index}
                        href=""
                        className="text-[#A5ACB0] no-underline px-5 text-base font-iransans w-full h-[40px]  flex items-center hover:text-white"
                      >
                        {item.title}
                      </Link>
                    );
                  })}
                </div>
              ) : null}
            </div>
          );
        })}
      </nav>
    </header>
  );
};

export default Menu;
