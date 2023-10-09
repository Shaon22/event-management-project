import Navbar from "../Others/Navbar";
import { useContext, useState } from "react";
import { myContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";

const Login = () => {

  const { signIn, googleLogIn } = useContext(myContext)
  const location=useLocation()
  const navigate = useNavigate()
  const [loginError, setLoginError] = useState('')
  const handleLogin = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')

    signIn(email, password)
      .then(result => {
        console.log(result)
        navigate(location?.state? location.state:'/')
      })
      .catch(error => {
        console.error(error)
        setLoginError('Email or password not matched !')
      })
  }
  const handleGoogle = () => {
    googleLogIn()
      .then(result => {
        console.log(result.user)
        navigate(location?.state? location.state:'/')

      })
      .catch(error => {
        console.error(error)

      })
  }
  return (
    <div className="text-center bg-gray-300 h-screen">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="bg-gray-100 p-10 w-full lg:w-1/3 mx-auto shadow-lg rounded my-10">
        <form onSubmit={handleLogin} className="space-y-5">
          <h1 className="mb-20 text-2xl font-bold">Login your account</h1>
          <input className="block border w-[100%] px-5 py-2 border-none" type="email" name="email" placeholder="EMAIL" id="" />
          <input className="block border w-[100%] px-5 py-2" type="password" name="password" placeholder="PASSWORD" id="" />
          <input className="btn bg-blue-500 text-white" type="submit" value="LOG IN" />
          <h1>OR</h1>
          <hr className="text-black" />
          <div className="btn btn-outline">
          <input onClick={handleGoogle} className=" block mx-auto  text-black " type="submit" value="LOG IN WITH" />
          <FcGoogle></FcGoogle>
          </div>
          <h1 className="font-medium">Do not have account ? <Link className="text-blue-500 font-semibold" to={'/register'}>Register</Link> </h1>
        </form>
        {
          loginError && <p className="text-center mt-2 text-red-500">{loginError}</p>
        }
      </div>
    </div>
  );
};

export default Login;