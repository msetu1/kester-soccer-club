const SoccerClub = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/g4t6kR0/images-3.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-9xl font-bold">07</h1>
            <h1 className="mb-5 lg:text-6xl text-3xl font-bold py-4">
              SOCCER CLUB & SPORTS NEWS DEMO
            </h1>
            <p className="mb-10 text-xl font-bold">
              Welcome to <span className="text-red-600">KESTER</span>, where sports enthusiasts and athletes come together
              to showcase <br /> their passion and skill. With the dynamic SportPress
              WordPress theme
            </p>
            <a className="px-6 py-3 bg-red-700 hover:bg-white hover:text-black font-bold text-2xl text-white">OUR DEMOS</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoccerClub;
