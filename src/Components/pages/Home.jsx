import {  useLoaderData } from "react-router-dom";
import Banner from "../Others/banner";
import Services from "../Others/Services";
import Gallery from "../Others/Gallery";
import Equipments from "../Others/Equipments";

const Home = () => {
  const services = useLoaderData()
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-[90%] mx-auto"> 
        <h1 className="text-4xl my-5 font-bold text-center">OUR SERVICES</h1>
        <div className="grid gap-5  grid-cols-1 md:grid-cols-3 ">

          {
            services.map(service => <Services key={service.id} service={service}></Services>
              
            )
          }
        </div>
      </div>
      <Gallery></Gallery>
      <Equipments></Equipments>
    </div>
  );
};

export default Home;