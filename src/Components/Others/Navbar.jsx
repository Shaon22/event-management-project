import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock,faUser } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const navlinks =
        <div className="text-xl text-white font-bold space-x-5">
            <>
                <NavLink className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-gray-400')} to={'/'}>HOME</NavLink>

                <NavLink className={({ isActive }) => (isActive ? 'bg-blue-500' : 'text-gray-400')} to={'gallery'}>GALLERY</NavLink>

                <NavLink className={({ isActive }) => (isActive ? 'bg-blue-500' :'text-gray-400')} to={'/dashboard'}>DASHBOARD</NavLink>
            </>
        </div>

    return (
        <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shado bg-base-100 rounded-box w-52">
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
           <div className="mr-4 bg-gray-400 w-6 h-6 text-center rounded-full text-white"> <FontAwesomeIcon icon={faUser}/></div>
                <NavLink className={({ isActive }) => (isActive ? ' text-blue-500 text-xl font-bold' : 'text-xl text-gray-400 font-bold')} to={'/login'}>LOG IN</NavLink>
                <div className="mx-2 text-gray-400">
                    <FontAwesomeIcon icon={faLock}/>
                </div>

                {/* <a className="btn bg-red-500 text-white">Log out</a> */}
            </div>
        </div>
    );
};

export default Navbar;