import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";

const Login = () => {
    const { signIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
    }

    return (
        <div className="bg-third mb-16 w-full">
            {/* <Helmet>
            <title>Blood Doners | Register</title>
        </Helmet> */}
            <div className="flex-col max-w-6xl bg-white p-24  mx-auto">
                <div className="text-center">
                    <h1 className="text-5xl font-poppins font-bold">Create Your Account</h1>
                </div>
                <div className="flex-shrink-0 w-full">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Email*</span>
                            </label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Your Email"
                                className="input input-bordered"
                                {...register("email", { required: true })}
                            />
                        </div>

                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Password*</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Your Password"
                                className="input input-bordered"
                                {...register("password", { required: true })}
                                required />
                        </div>



                        <div className="form-control mt-6">
                            <button className="btn text-white hover:text-gray-800 btn-block bg-main">Register</button>
                        </div>
                    </form>
                    <p className="text-center text-red-700 text-base mb-6"></p>

                    <div className="flex justify-center gap-3 items-center">
                        <p className="font-bold text-lg">Signin With</p>
                        {/* <button onClick={handleGoogleLogin} className="btn bg-white border-main hover:bg-main px-16 border hover:shadow-md text-main hover:text-white"><img className="h-5 w-5" src={goo} alt="" /> Google</button> */}
                    </div>
                    <h2 className="text-center mt-4 font-semibold">New here? <Link className="text-main font-bold" to="/register">Register</Link></h2>
                </div>
            </div>
        </div>
    );
};

export default Login;