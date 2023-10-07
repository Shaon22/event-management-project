import { Outlet } from "react-router-dom";
import Header from "../Others/Header";
import Banner from "../Others/banner";

const Root = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;