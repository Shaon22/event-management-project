import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useContext } from "react";
import { myContext } from "../provider/AuthProvider";
import { FiLogIn, FiLogOut } from "react-icons/fi";



const Navbar = () => {
    const { user, logOut } = useContext(myContext)
    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.error(error)
            })
    }
    const navlinks =
        <div className="text-xl text-white font-bold space-x-5">
            <>
                <NavLink className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-white')} to={'/'}>HOME</NavLink>

                <NavLink className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-white')} to={'/profile'}>PROFILE</NavLink>

                <NavLink className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-white')} to={'/about'}>ABOUT US</NavLink>

                <NavLink className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-white')} to={'/feedback'}>FEEDBACK</NavLink>
            </>
        </div>

    return (
        <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" color="white" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shado bg-gray-400 rounded-box w-cover">
                        {
                            navlinks
                        }
                    </ul>
                </div>
                <a className="btn text-white btn-ghost normal-case text-3xl">EVENTO</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navlinks
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <h1 className="text-white mr-5">{user.displayName}</h1>
                            <img className="w-6 h-6 text-center rounded-full mr-4" src={user.photoURL} alt="" />
                            <NavLink onClick={handleLogOut} className={({ isActive }) => (isActive ? 'text-white text-xl font-medium outline rounded px-2 py-1 mr-4' : 'text-xl text-white font-medium outline rounded px-2 py-1 mr-4')} to={'/'}>Log out <FiLogOut className="text-red-600 inline-block"></FiLogOut></NavLink>
                        </>
                        :
                        <>
                            <div className="mr-4 bg-gray-400 w-6 h-6 text-center rounded-full text-white"> <FontAwesomeIcon icon={faUser} />
                            </div>
                            <NavLink className={({ isActive }) => (isActive ? 'text-xl text-blue-500 font-medium outline rounded px-2 py-1 mr-4' : 'text-xl text-white font-medium outline rounded px-2 py-1 mr-4')} to={'/login'}>Log In <FiLogIn className="inline-block"></FiLogIn> </NavLink>
                            <div className="mx-2 text-white ">

                            </div>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;