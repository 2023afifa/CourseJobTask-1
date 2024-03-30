import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/1LGdrr0/banner2.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-3xl">
                        <h1 className="mb-5 text-5xl font-bold">TaskMagnet: Your Ultimate Task Management Companion</h1>
                        <p className="mb-5">
                            Welcome to TaskMagnet, where task management becomes a breeze. Empower your productivity with our intuitive features that simplify organization, collaboration, and deadline tracking. TaskMagnet is your go-to platform for streamlining tasks and minimizing stress. Experience the ease of efficient task management—your personal command center for a more productive you. Unlock the power of productivity with TaskMagnet today!</p>
                        <Link to={location?.state ? "/login" : "/dashboard"}><button className="btn bg-slate-50">Let's Explore</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;