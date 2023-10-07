import { Link } from "react-router-dom";
import Navbar from "../Others/Navbar";

const Register = () => {
    return (
        <div className="text-cente bg-slate-200 h-screen">
            <Navbar></Navbar>
            <div className="flex justify-center bg-gray-100 p-10 w-1/3 mx-auto shadow-2xl rounded mt-5">
                <form className="space-y-5">
                    <h1 className="mb-16 text-2xl font-bold">Register Account</h1>
                    <input className="block border w-80 px-5 py-2 border-none" type="text"  name="name" placeholder="NAME" id="" />
                    <input className="block border w-80 px-5 py-2 border-none" type="text"  name="PhotoURL" placeholder="PHOTO URL" id="" />
    
                    <input className="block border w-80 px-5 py-2 border-none" type="email"  name="email" placeholder="EMAIL" id="" />
                    <input className="block w-80 px-5 py-2" type="password"  name="password" placeholder="PASSWORD" id="" />
                    <input className="btn bg-blue-600 text-white" type="submit" value="REGISTER" />
                    <h1 className="font-medium">Already have an account ? <Link className="text-blue-500 font-bold" to={'/login'}>LOG IN</Link> </h1>
                </form>
            </div>
        </div>
    );
};

export default Register;