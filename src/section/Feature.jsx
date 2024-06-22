
const Feature = () => {
    return (
        <div className="bg-[#fef2f2] py-20">
            <div className="flex flex-col lg:flex-row gap-5  max-w-7xl mx-auto">
            <div className=" w-full lg:w-[50%] flex items-center lg:mb-0 mb-10">
                <div className="px-10 lg:px-0 text-center lg:text-left">
                <h3 className="text-red-800 font-bold text-xl ">FEATURE</h3>
                <h1 className="text-4xl lg:text-5xl font-bold my-5">MATCHES & RESULTS</h1>
                <p className="mb-5">Save valuable time and kickstart your sports website with our meticulously
                designed collection of pre-made inner pages and user interface (UI) elements.</p>
                <a className="px-6 py-2 bg-red-800 hover:bg-white hover:text-red-900 font-bold text-xl text-white">View More</a>
                </div>
            </div>
            <div className=" w-full lg:w-[50%]">
                <img src="	https://themewant.com/products/wordpress/landing/kester/assets/images/featured/feature.png" alt="" />
            </div>
        </div>
        </div>
    );
};

export default Feature;