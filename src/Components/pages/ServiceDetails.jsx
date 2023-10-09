import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Others/Navbar";
import { AiOutlineTag } from "react-icons/ai";
const ServiceDetails = () => {
    const details = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const detail = details.find(detail => detail.id === idInt)
    return (
        <div className="bg-gray-300 h-screen">
            <div>
            <Navbar></Navbar>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 p-5 mt-10">
                <img className="w-[50%]" src={detail.image} alt="" />
               <div className="space-y-10">
               <h1 className="text-2xl font-bold">{detail.title}</h1>
                <p>{detail.full_description}</p>
               <div className="px-4 py-2 bg-contain lg:w-[30%] text-center rounded outline bg-white">
               <h1 className=""><AiOutlineTag className="inline-block"></AiOutlineTag> {detail.price}</h1>
               </div>
               </div>
            </div>
        </div>
    );
};

export default ServiceDetails;