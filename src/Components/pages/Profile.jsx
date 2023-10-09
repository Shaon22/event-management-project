import { useContext } from "react";
import { myContext } from "../provider/AuthProvider";
import Navbar from "../Others/Navbar";

const Profile = () => {
    const {user}=useContext(myContext)
    return (
        <div className="bg-gray-300 h-screen">
            <Navbar></Navbar>
            <h1 className="text-4xl my-5 font-bold text-center">YOUR PROFILE</h1>
            {
                user &&
                <div className="text-center mt-20">
                    <img className="mx-auto rounded-full my-5"  src={user.photoURL} alt="" />
                    <h1>{user.displayName}</h1>

                </div>
            }
        </div>
    );
};

export default Profile;