import Link from "next/link";

const Social = ({ footer }) => {
  const social = footer?.social;

  return (
    <>
      <div className="bg-gray-200 py-8">
        <div className="flex justify-center items-center gap-1.5">
          {social.icons?.map((item) => {
            return (
              <Link
                key={item.id}
                href={item.link}
                className={`w-14 h-14 bg-gray-300  rounded-full flex items-center justify-center text-gray-600 "
        ${item.name === "Facebook" ? "hover:bg-blue-800" : item.name === "LinkedIn" ? "hover:bg-blue-600" : item.name === "Telegram" ? "hover:bg-blue-600" : item.name === "Instagram" ? "hover:bg-red-600" : item.name === "Aparat" ? "hover:bg-rose-700" : item.name === "گلستان" ? "hover:bg-green-600" : null}  `}
              >
                <img src={item.image} className="w-8 h-8" alt="" />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="h-6 bg-red-600"></div>
    </>
  );
};

export default Social;
