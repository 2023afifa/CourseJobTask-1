import { useContext, useState } from "react";
import Navbar from "../HomePage/Navbar/Navbar";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const { logInUser, logInUserGoogle, logInUserGithub } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const location = useLocation();


    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setErrorMessage("");

        logInUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location?.state : "/dashboard");
            })
            .catch(error => {
                console.error(error);
                setErrorMessage(error.message);
            })
    }

    const handleGoogleLogIn = () => {
        logInUserGoogle()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleGithubLogIn = () => {
        logInUserGithub()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-blue-300 h-screen">
                <h2 className="text-center text-3xl font-medium pt-10 mb-10">Log In</h2>
                <div className="card shrink-0 w-full max-w-sm bg-blue-100 rounded-sm mx-auto">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        {
                            errorMessage && <p className="text-center text-red-500">{errorMessage}</p>
                        }
                        <div className="form-control mt-6">
                            <button className="btn bg-blue-500 text-white">Login</button>
                        </div>
                    </form>
                    <p className="text-center mb-2">Login with <a onClick={handleGoogleLogIn} className="text-blue-500 font-semibold">Google</a> / <a onClick={handleGithubLogIn} className="text-blue-500 font-semibold">Github</a></p>
                    <p className="text-center mb-5">If you do not have any account <Link to="/signup"><span className="text-blue-500 font-semibold">Sign up</span></Link> here</p>
                </div>
            </div>
        </div>
    );
};

export default Login;