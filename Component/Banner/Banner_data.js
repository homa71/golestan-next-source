import Link from "next/link";

const Banner_data = ({ banner }) => {
  return (
    <>
      <div className=" h-[458px] bg-linear-[190deg] from-[#FBFBFB] to-[#D2D2D2] py-9 px-8">
        <div className="  flex items-center gap-x-36 flex-row">
          <div className="flex flex-col gap-y-6 justify-start mr-[200px] mt-8 ">
            <h1 className="text-[30px] font-light text-[#FF0000]  font-iransans">
              {banner.title}
            </h1>

            <h2 className="text-[20px] font-light text-[#58595B] font-iransans">
              {banner.subtitle}
            </h2>

            <p className=" w-[452px]  text-[#898989] font-[100] leading-[33px] font-iransans text-[16px] relative top-[-1000px] animate-texts">
              {banner.description}
            </p>

            <div className="btn  w-[135px] h-[40px] rounded-[8px] bg-[#FFFFFF] border border-[lightgray]  flex justify-center  items-center   hover:bg-red-600">
              <Link
                href=""
                className="text-[#898989] font-iransans text-[15px] font-normal  "
              >
                {banner.buttonText}
              </Link>
            </div>
          </div>

          <div className="relative top-[-1000px] animate-tea ">
            <img src={banner.image} alt="" className="" />
          </div>
        </div>
      </div>

      {/* <div className="w-[97%] h-[1px] bg-[#BABABA] mt-5 mx-auto"></div> */}
    </>
  );
};

export default Banner_data;
