import Navbar from "./Navbar";

const Banner = () => {
    return (
        <div className="h-screen bg-[#0000008c] bg-blend-darken bg-cover bg-no-repeat w-full" style={{ backgroundImage: 'url(bg-img-3.jpg)' }}>
            <div>
                <Navbar></Navbar>
                <div className="w-2/4 mx-auto">
                <h1 className="text-white text-5xl font-bold text-center mt-52">
                     Your Event, Our Expertise.
                </h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;