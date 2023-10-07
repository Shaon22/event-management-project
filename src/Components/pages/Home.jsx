import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Others/banner";
import Services from "../Others/Services";

const Home = () => {
  const services = useLoaderData()
  return (
    <div>
      <Banner></Banner>
      <div>
        <h1 className="text-4xl my-5 font-bold text-center">OUR SERVICES</h1>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 p-10">

          {
            services.map(service => <Services key={service.id} service={service}></Services>
              
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Home;