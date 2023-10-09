import Navbar from "../Others/Navbar";

const Feedback = () => {
    return (
        <div className="space-y-5 bg-gray-300 py-5">
            <Navbar></Navbar>
            <div className="hero w-[60%] mx-auto bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="../../../public/resourses/images.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <p className="py-6">
                            Review by Sarah G. (5/5):
                            <br />
                            I've been using this event management website for my company's annual conferences for the past three years, and I couldn't be happier. The platform is incredibly user-friendly, and it streamlines the entire event planning process. The customizable registration forms, ticketing options, and attendee tracking features have saved me countless hours. Plus, the customer support team is top-notch and always ready to assist. Highly recommended!
                        </p>
                    </div>
                </div>
            </div>
            <div className="hero w-[60%] mx-auto bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="../../../public/resourses/images.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <p className="py-6">
                            Review by John D. (4/5):
                            <br />

                            Overall, this event management website has been a great tool for our nonprofit organization. It's helped us manage our fundraisers and volunteer events efficiently. The interface is intuitive, and the event promotion tools are excellent. My only minor gripe is that the reporting and analytics could be more robust. But aside from that, it's a reliable platform that has made our event planning much more organized.
                        </p>
                    </div>
                </div>
            </div>
            <div className="hero w-[60%] mx-auto bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="../../../public/resourses/images.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <p className="py-6">
                            Review by Emily T. (5/5):
                            <br />
                            I recently used this event management website for my wedding, and it exceeded all my expectations. From sending out beautiful digital invitations to managing RSVPs and meal preferences, it made the entire process seamless. The seating chart feature was a lifesaver! It's also great for keeping track of all the vendor contracts and payments. I can't thank the creators of this website enough for making my special day stress-free.
                        </p>
                    </div>
                </div>
            </div>
            <div className="hero w-[60%] mx-auto bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="../../../public/resourses/images.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <p className="py-6">
                            Review by Mark S. (3/5):
                            <br />
                            I've been using this event management website for my small business events, and it's decent for the price. It offers basic event planning tools, but I've found some limitations in terms of customization and design options. It's suitable for straightforward events, but if you're looking for more complex features or a high level of branding control, you might need to explore other options.
                        </p>
                    </div>
                </div>
            </div>
            <div className="hero w-[60%] mx-auto bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="../../../public/resourses/images.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <p className="py-6">
                            Review by Jennifer M. (4/5):
                            <br />
                            I've used several event management websites in the past, and this one stands out for its simplicity and affordability. It's a great solution for smaller businesses and organizations on a budget. The event registration and payment processing work smoothly. I've had a positive experience overall, but I would love to see more integrations with third-party tools in the future to enhance its functionality.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Feedback;