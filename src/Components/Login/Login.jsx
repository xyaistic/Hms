import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>

            <div className=" bg-cover bg-white  flex flex-col justify-center relative overflow-hidden items-center sm:py-12">

                <img src="https://t3.ftcdn.net/jpg/03/24/58/44/360_F_324584485_qtdluDzmBNkJvmntEPlNeG1htwPktgCa.jpg" className=' w-64' alt="" />
                <span className=" text-4xl text-blue-400 px-6 text-center pb-10 bg-white w-1/2 max-w-md mx-auto rounded-t-md sm:px-10">Our Hospital </span>
                <div className="border relative px-4 pt-7 pb-8 bg-white shadow-xl w-1/2 max-w-md mx-auto sm:px-10 rounded-b-md h-fit">
                    <form action="">
                        <label for="" className="block">Username or Email</label>
                        <input type="Email" className="border w-full h-10 px-3 mb-5 rounded-md" placeholder="Username or Email" />
                        <label for="" className="block">Password</label>
                        <input type="password" className="border w-full h-10 px-3 mb-5 rounded-md" placeholder="password" />
                        <div className="flex items-center align-middle justify-between">

                            <button className="mx-3 bg-green-500 hover:bg-blue-700 shadow-xl text-white w-60 uppercase text-sm font-semibold px-14 py-3 rounded">Login</button>
                            <Link to={'#'} className="text-sm text-blue-700 hover:underline ml-auto dark:text-blue-500">Lost
                                Password?</Link>
                        </div>


                        <div className="flex items-center my-10 align-middle flex-col justify-between">
                        <span className=" text-1xl text-black px-6 my-5 text-center  w-full  rounded-t-md sm:px-10">Or </span>

                            <button className="mx-3 bg-blue-500 hover:bg-blue-700 shadow-xl text-white w-full uppercase text-sm font-semibold px-14 py-3 rounded">Sign in</button>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
