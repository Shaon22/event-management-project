import { useParams } from "react-router-dom";
import Navbar from "../Others/Navbar";

const ServiceDetails = () => {
    const {image,title} =useParams()
    return (
        <div>
            <Navbar></Navbar>
            <p></p>
            <h1>{title}</h1>
            <img src={image} alt="" />
        </div>
    );
};

export default ServiceDetails;