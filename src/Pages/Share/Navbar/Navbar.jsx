import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider/AuthProvider';
import useCart from '../../../hooks/useCart';
import axios from 'axios';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [active,setActive] = useState(false)
    const [cart] = useCart()
  const total = cart.reduce((sum, item) => parseFloat(item.Price) + sum, 0);

  const roundedTotal = total.toFixed(2);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

    const navOptions = <div className='flex items-center space-x-7'>

        <Link><li className='text-base hover:text-white'>Home</li></Link>
        <Link><li className='text-base hover:text-white'>Hakatons</li></Link>
        <Link><li className='text-base hover:text-white'>Projects</li></Link>
        <Link><li className='text-base hover:text-white'>Exercise</li></Link> 
        <Link><li className='text-base hover:text-white'>About Us</li></Link> 
    </div>

axios.get("https://warrior-beta.vercel.app/user").then(() => {
  
})

    return (
        <div>
            <div className={` navbar text-white  font-bold bg-[rgb(0,6,26)] ${
          active === true ? "z-40 shadow-sm fixed top-0 left-0" : null
        }`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Hakatons</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                   
                   

                <div className="flex md:mx-5 ">
          {user &&   <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">
                    {cart?.length}
                  </span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-white shadow-2xl"
              >
                <div className="card-body">
                  <span className="font-bold text-lg text-black">
                    Quantity: {cart?.length}
                  </span>
                  <span className="font-extrabold text-black">Subtotal: ${roundedTotal}</span>
                  <div className="card-actions">
                    <Link to="/dashboard/myCart">
                      {" "}
                      <button className="green-btn">
                        View cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>}
            {user && (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-white text-black rounded-box w-52"
                >
                  <li>
                    <button className="green-btn shadow-2xl" onClick={() => logOut()}>Logout</button>
                  </li>
                </ul>
              </div>
            )}
            {!user && (
              <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                Login
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt- z-[1] p-2 shadow-2xl bg-white text-black rounded-box w-52"
              >
                <li>
                <Link to="/login/participant">
                <button className="green-btn w-full mx-2">Login as Participant</button>
              </Link>
                </li>
                <li>
                <Link to="/login/mentor">
                <button className="green-btn w-full mx-2">Login as Mentor</button>
              </Link>
                </li>
              </ul>
            </div>
            )}
          </div>



                </div>
            </div>
        </div>
    );
};

export default Navbar;