
const ShopFeature = () => {
    return (
        <div>
            <div className=" lg:py-32 py-16">
            <div className="flex flex-col lg:flex-row gap-5  max-w-5xl mx-auto">
            <div className=" w-full lg:w-[50%] flex items-center ">
                <div className="px-10 lg:px-0 pr-0 lg:pr-10 py-10 text-center lg:text-left">
                <h1 className="text-3xl lg:text-5xl font-bold ">SHOP FEATURES</h1>
                <h3 className="font-bold text-xl my-5">PRODUCT MANAGEMENT:</h3>
                
                <p className="mb-5">Easily create, manage, and showcase your products
                on your online store. Add product details.</p>
                <h3 className="font-bold text-xl my-5">SHOPPING CART:</h3>
                
                <p className="mb-5">Shop e-Commerce provides a built-in shopping cart
                functionality that allows customers.</p>
                </div>
            </div>
            <div className=" w-full lg:w-[50%] ">
                <img className="w-full h-full" src="https://themewant.com/products/wordpress/landing/kester/assets/images/featured/shop.png" alt="" />
            </div>
        </div>
        </div>
        </div>
    );
};

export default ShopFeature;