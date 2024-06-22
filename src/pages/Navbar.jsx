import { NavLink } from "react-router-dom";

const Navbar = () => {
    const links=<>
    
    <li><NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-xl font-bold hover:text-red-600" : ""
  }
>
  DEMO
</NavLink></li>
    <li><NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-xl font-bold hover:text-red-600" : ""
  }
>
 DOCUMENTATION
</NavLink></li>
    <li><NavLink
  to="/features"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-xl font-bold hover:text-red-600" : ""
  }
>
 FEATURE
</NavLink></li>
    </>
    return (
        <div className="">
            <div className="navbar bg-black bg-opacity-30 fixed z-10 lg:px-20 md:px-20 py-7">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu  dropdown-content ">
        {links}
      </ul>
    </div>
    <div className="lg:block  hidden">
    <div className="flex items-center justify-center gap-3">
        <img className="w-[80px] h-[80px] rounded-xl" src="https://themewant.com/products/wordpress/landing/kester/assets/images/logo.svg" alt="" />
        <h2 className="text-3xl font-bold text-white">rf <span className="text-red-700">Soccer Club</span></h2>
    </div>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex space-x-5 items-center text-white text-xl font-bold ">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="px-6 py-2 bg-red-700 hover:bg-white hover:text-black font-bold text-xl text-white">BUY NOW</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;