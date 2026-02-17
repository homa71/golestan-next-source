import Link from "next/link";

const Magazine_card = ({ item }) => {
  return (
    <div
      key={item.id}
      className="  card w-[320px]  h-fit pb-8  bg-white rounded-md overflow-hidden shadow-md flex flex-col"
    >
      {item.video?(
        <iframe src={item.video.url}  allow="autoplay; fullscreen" allowFullScreen className="w-full h-[182px]" ></iframe>
      ):(
        <img src={item.image} alt="" className="w-full h-[310px] object-cover" />

      )
      }
      

      <div className="p-5 text-start">
        <h3 className="text-red-500 text-lg mb-3 font-iransans font-bold">
          {item.title}
        </h3>

        <p className=" h-[130px]    text-gray-500 text-sm font-iransans leading-8 mb-5">
          {item.description}
        </p>

        <Link
          href=""
          className="px-5 py-2 border border-gray-300 rounded-md font-iransans text-sm text-gray-500 transition hover:bg-red-500 hover:text-white hover:border-red-500"
        >
          {item.buttonText}
        </Link>
      </div>
    </div>
  );
};

export default Magazine_card;
