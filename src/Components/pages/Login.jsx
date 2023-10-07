import { Link } from "react-router-dom";
import Navbar from "../Others/Navbar";

const Login = () => {
    return (
        <div className="text-center bg-slate-200 h-screen">
           <div>
           <Navbar></Navbar>
           </div>
            <div className="flex justify-center bg-gray-100 p-10 w-1/3 mx-auto shadow-lg rounded my-20">
                <form className="space-y-5">
                    <h1 className="mb-20 text-2xl font-bold">Login your account</h1>
                    <input className="block border w-80 px-5 py-2 border-none" type="email"  name="email" placeholder="EMAIL" id="" />
                    <input className="block border w-80 px-5 py-2" type="password"  name="password" placeholder="PASSWORD" id="" />
                    <input className="btn bg-blue-500 text-white" type="submit" value="LOG IN" />
                    <h1 className="font-medium">Do not have account ? <Link className="text-blue-500 font-semibold" to={'/register'}>Register</Link> </h1>
                </form>
            </div>
        </div>
    );
};

export default Login;