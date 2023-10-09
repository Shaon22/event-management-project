import { Link } from "react-router-dom";

const Services = ({service}) => {
    const {id,title,image,short_description,price}=service
    return (
        <div style={{
            backgroundImage: `url(${image})`,
          }} className="rounded p-5 bg-no-repeat w-[100%] h-[400px]  bg-[#0000008c] bg-blend-darken mx-auto shadow-2xl">
            <div className="my-5">
              <h2 className="card-title text-2xl text-white">{title}</h2>
              <p className="text-white mt-8">{short_description}</p>
              <div className="mt-24">
                <h1 className="text-white font-bold my-4 text-left">{price}</h1>
                <Link className="w-full " to={`/serviceDetails/${id}`}>
                  <button className="btn w-full bg-gray-200">Details</button>
                </Link>
              </div>
            </div>
          </div>
    );
};

export default Services;