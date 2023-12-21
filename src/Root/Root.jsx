import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="font-ubuntu">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;