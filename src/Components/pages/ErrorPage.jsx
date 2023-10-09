import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center my-20">
            <img className="mx-auto w-[50%] my-5" src="../../../public/resourses/000-404.png" alt="" />
           <Link to={'/'}>
           <button className="btn btn-primary">GO BACK TO HOME</button>
           </Link>
        </div>
    );
};

export default ErrorPage;