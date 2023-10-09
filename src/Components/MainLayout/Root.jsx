import { Outlet } from "react-router-dom";
import Header from "../Others/Header";
import Banner from "../Others/banner";
import Footer from "../Others/Footer";

const Root = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;