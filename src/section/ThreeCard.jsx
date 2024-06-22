const ThreeCard = () => {
  return (
    <div className="my-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-5">
        <div className="card lg:w-96 mx-5 lg:mx-0 bg-[#FBF6FF] shadow-xl py-10">
          <figure className="px-10 pt-10">
            <img
              src="	https://themewant.com/products/wordpress/landing/kester/assets/images/footer-icon/1.png"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Regular Update</h2>
            <p>Enjoy free lifetime reliable updates going with purchase</p>
          </div>
        </div>
        <div className="card lg:w-96 mx-5 lg:mx-0 bg-[#F6FFF4] shadow-xl py-10">
          <figure className="px-10 pt-10">
            <img
              src="	https://themewant.com/products/wordpress/landing/kester/assets/images/footer-icon/2.png"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Proficient Support</h2>
            <p>Enjoy free lifetime reliable updates going with purchase</p>
          </div>
        </div>
        <div className="card lg:w-96 mx-5 lg:mx-0 bg-[#F2F7FF] shadow-xl py-10">
          <figure className="px-10 pt-10">
            <img
              src="	https://themewant.com/products/wordpress/landing/kester/assets/images/footer-icon/3.png"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Regular Update</h2>
            <p>Enjoy free lifetime reliable updates going with purchase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeCard;
