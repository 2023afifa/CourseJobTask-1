import { Link, useNavigate } from "react-router-dom";
import Navbar from "../HomePage/Navbar/Navbar";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;
        console.log(name, photo, email, password);

        setErrorMessage("");

        if (password.length < 6) {
            setErrorMessage("Password should be at least 6 characters");
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                // navigate("/");

                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo,
                })
                    .then(() => {
                        console.log("Profile updated");
                    })
                    .catch()
                const user = { email, name, photo };
                fetch("https://task-management-server-xi-ashy.vercel.app/user", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            console.log("User added to database");
                            navigate(location?.state ? location?.state : "/dashboard");
                        }
                    })
            })

            .catch(error => {
                console.error(error);
                setErrorMessage(error.message);
            })

    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-blue-300 h-screen">
                <h2 className="text-center text-3xl font-medium pt-10 mb-5">Sign Up</h2>
                <div className="card shrink-0 w-full max-w-sm bg-blue-100 rounded-sm mx-auto">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo" className="input input-bordered" required />
                        </div>
                        {
                            errorMessage && <p className="text-center text-red-500">{errorMessage}</p>
                        }
                        <div className="form-control mt-6">
                            <button className="btn bg-blue-500 text-white">Sign Up</button>
                        </div>
                    </form>
                    <p className="text-center mb-5">If you already have an account <Link to="/login"><span className="text-blue-500 font-semibold">Login</span></Link> here</p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;