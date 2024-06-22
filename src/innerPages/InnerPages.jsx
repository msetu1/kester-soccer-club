const InnerPages = () => {
  return (
    <div className="pt-2">
      <div className="bg-[#1C1C1C] flex flex-col lg:flex-row gap-3 py-32 px-5">
        <div className=" w-full lg:w-[50%]">
          <div className="lg:px-36 text-center lg:text-left text-white ">
            <h3 className="text-red-800 font-bold text-xl ">INNER PAGES</h3>
            <h1 className="text-4xl lg:text-6xl font-bold my-5">
              INCLUDES A COLLECTION OF PRE-MADE INNER PAGES
            </h1>
            <p className="mb-10">
              Save valuable time and kickstart your sports website with our
              meticulously designed collection of pre-made inner pages and user
              interface (UI) elements.
            </p>
            <a className="px-6 py-2 bg-red-800 hover:bg-white hover:text-red-900 font-bold text-xl text-white">
              VIEW ALL
            </a>
          </div>
        </div>
        <div className=" w-full lg:w-[50%] ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative">
              <img className="lg:w-[245px] lg:h-[277px] w-full "
                src="https://themewant.com/products/wordpress/landing/kester/assets/images/inner/01.webp"
                alt=""
              />
              <div className="absolute top-1/2 left-16">
                <button className="px-6 py-2 bg-red-700 hover:bg-white hover:text-black font-bold text-xl text-white">
                  ABOUT
                </button>
              </div>
            </div>

            <div className="relative">
              <img className="lg:w-[245px] lg:h-[277px] w-full "
                src="	https://themewant.com/products/wordpress/landing/kester/assets/images/inner/03.webp"
                alt=""
              />
              <div className="absolute top-1/2 left-16">
                <button className="px-6 py-2 bg-red-700 hover:bg-white hover:text-black font-bold text-xl text-white">
                  SCHEDULES
                </button>
              </div>
            </div>

            <div className="relative">
              <img className="lg:w-[245px] lg:h-[277px] w-full "
                src="	https://themewant.com/products/wordpress/landing/kester/assets/images/inner/04.webp"
                alt=""
              />
              <div className="absolute top-1/2 left-16">
                <button className="px-6 py-2 bg-red-700 hover:bg-white hover:text-black font-bold text-xl text-white">
                  TEAM
                </button>
              </div>
            </div>

            <div className="relative">
              <img className="lg:w-[245px] lg:h-[277px] w-full "
                src="https://themewant.com/products/wordpress/landing/kester/assets/images/inner/08.webp"
                alt=""
              />
              <div className="absolute top-1/2 left-16">
                <button className="px-6 py-2 bg-red-700 hover:bg-white hover:text-black font-bold text-xl text-white">
                  CONTACT
                </button>
              </div>
            </div>

            <div className="relative">
              <img className="lg:w-[245px] lg:h-[277px] w-full "
                src="	https://themewant.com/products/wordpress/landing/kester/assets/images/inner/09.webp"
                alt=""
              />
              <div className="absolute top-1/2 left-16">
                <button className="px-6 py-2 bg-red-700 hover:bg-white hover:text-black font-bold text-xl text-white">
                  SHOP
                </button>
              </div>
            </div>

            <div className="relative">
              <img className="lg:w-[245px] lg:h-[277px] w-full "
                src="	https://themewant.com/products/wordpress/landing/kester/assets/images/inner/02.webp"
                alt=""
              />
              <div className="absolute top-1/2 left-16">
                <button className="px-6 py-2 bg-red-700 hover:bg-white hover:text-black font-bold text-xl text-white">
                 POINT TABLE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerPages;
