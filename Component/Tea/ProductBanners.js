const ProductBanners = ({ pro }) => {
    const productBanners=pro?.productBanners
  return (
    <div className="w-full bg-white  mt-14">
      <div className="relative w-full h-[420px] overflow-hidden">
        <img
          src={productBanners.image}
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-0 right-[150px] bg-red-600 text-white px-10 py-6">
          <h1 className="text-2xl md:text-3xl font-light font-iransans">{productBanners.title}</h1>
          <p className="text-sm mt-2   font-iransans">{productBanners.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductBanners;
