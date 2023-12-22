import { Link, useNavigate } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet";

const Signup = () => {

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
                navigate("/");

                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo,
                })
                    .then(() => {
                        console.log("Profile updated");
                    })
                    .catch()
                const user = { email, name, photo };
                fetch("https://food-share-server-three.vercel.app/user", {
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
            <Helmet>
                <title>ShareWithHeart | Sign Up</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="card max-w-xl shadow-xl bg-rose-100 mt-20 mx-auto">
                <h2 className="text-center text-2xl text-rose-700 font-semibold pt-10">Register</h2>
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
                    <div className="form-control mt-4">
                        <button className="btn bg-rose-200 text-rose-700">Register</button>
                    </div>
                </form>
            </div>
            <p className="my-10 text-center">If you already have an account <Link to="/login"><span className="text-rose-700 font-semibold">Login</span></Link> here</p>
            <Footer></Footer>
        </div>
    );
};

export default Signup;