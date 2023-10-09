import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Others/Navbar";
import { useContext, useState } from "react";
import { myContext } from "../provider/AuthProvider"
import { updateProfile } from "firebase/auth";

const Register = () => {
    const { createUser } = useContext(myContext)
    const [registerError, setRegisterError] = useState('')
    const navigate = useNavigate()
    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photoURL = form.get('PhotoURL')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photoURL, email, password)
        setRegisterError('')
        if(password.length<6){
            setRegisterError('Password must be 6 character or more...')
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setRegisterError('Please provide at least one uppercase character in your password')
            return;
        }
        else if(!/[!@#$%^&*]/.test(password)){
            setRegisterError('Please provide at least one special character in your password')
            return;
        }
        
            createUser(email, password)
            .then(result => {
                updateProfile(result.user,{
                    displayName:name,
                    photoURL:photoURL
                })
                console.log(result.user)
                navigate('/')
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="text-center bg-gray-300 pb-5">
            <Navbar></Navbar>
            <div className=" bg-gray-100 p-10 w-full lg:w-1/3 mx-auto shadow-lg rounded my-10">
                <form onSubmit={handleRegister} className="space-y-5">
                    <h1 className="mb-16 text-2xl text-center font-bold">Register Account</h1>
                    <input className="block border w-[100%] px-5 py-2 border-none" type="text" name="name" placeholder="NAME" id="" required />
                    <input className="block border w-[100%] px-5 py-2 border-none" type="text" name="PhotoURL" placeholder="PHOTO URL" id="" required />

                    <input className="block border w-[100%] px-5 py-2 border-none" type="email" name="email" placeholder="EMAIL" id="" required/>
                    <input className="block w-[100%] px-5 py-2" type="password" name="password" placeholder="PASSWORD" id="" required />
                    <input className="btn mx-auto block bg-blue-600 text-white" type="submit" value="REGISTER" />
                    <h1 className="font-medium text-center">Already have an account ? <Link className="text-blue-500 font-bold" to={'/login'}>LOG IN</Link> </h1>
                </form>
                {
                    registerError && <p className="text-center mt-2 text-red-500">{registerError}</p>
                }
            </div>

        </div>
    );
};

export default Register;