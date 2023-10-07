import { Link } from "react-router-dom";

const Services = ({service}) => {
    const {id,title,image,short_description}=service
    return (
        <div style={{
            backgroundImage: `url(${image})`,
          }} className="rounded card w-full h-[400px] bg-[#0000008c] bg-blend-darken mx-auto shadow-2xl">
            <div className="card-body">
              <h2 className="card-title text-2xl text-white">{title}</h2>
              <p className="text-white">{short_description}</p>
              <div className="card-actions justify-center">
                <Link className="w-full " to={`/serviceDetails/${id}`}>
                  <button className="btn w-full bg-gray-200">Details</button>
                </Link>
              </div>
            </div>
          </div>
    );
};

export default Services;