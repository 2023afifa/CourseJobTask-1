import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import CreateTask from "../CreateTask/CreateTask";


const Dashboard = () => {
    const { user, loading } = useContext(AuthContext);
    console.log(user);

    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    return (
        <div className="lg:flex">
            <div className="lg:w-64 min-h-screen text-white bg-blue-400">
                <h1 className="text-2xl font-medium text-center my-5">Task Magnet</h1>
                <ul className="menu lg:text-lg">
                    <li>
                        <NavLink to="/dashboard/createtask">Create Tasks</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/mytask">My Tasks</NavLink>
                    </li>
                </ul>
                <div className="divider"></div>
                <ul className="menu lg:text-lg">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                </ul>
            </div>


            <div className="flex-1 p-5">
                <h1 className="text-4xl text-center font-bold">WelCome to Dashboard</h1>
                <Outlet></Outlet>
            </div>


            <div className="lg:w-72 p-3">
                <h1 className="text-2xl font-medium text-center my-3">My Profile</h1>
                <img className="w-52 rounded mx-auto" src={user.photoURL} alt="" />
                <div className="font-semibold my-5 px-10">
                    <p>Name: {user.displayName}</p>
                    <p>Email: {user.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;