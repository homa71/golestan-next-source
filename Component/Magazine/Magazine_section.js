import Magazine_card from "./Magazine_card";

const Magazine_section = ({magazine}) => {
    return ( 
        <>
          <h4 className="font-iransans font-bold text-2xl text-red-600 mr-8.75 mb-12.5 ">
        {magazine.title}
      </h4>
      <div className="w-full mx-auto max-w-[1800px] h-[775px] py-0 bg-[#cde4b0]  flex flex-row gap-3 justify-center items-center ">
        {magazine.items?.map((item) => {
          return (
           <Magazine_card  item={item} key={item.id}  />
          );
        })}
      </div>
      </>
     );
}
 
export default Magazine_section;