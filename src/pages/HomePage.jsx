import { Link } from "react-router-dom";
import backgroundImage from '../assets/backgroundImage.jpg'

const HomePage = () => {
  //   const { userInfo } = useSelector((state) => state.userLogin);
  // const userInfo = null;

  return (
    <div className="flex items-center justify-center min-h-screen "
       style={{backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full max-w-md py-6 px-12 bg-white/65 rounded-lg shadow-lg">
        <div className="flex flex-col items-center text-center text-4xl p-4">
          <h1 className="text-4xl font-semibold text-blue-700 mb-4">Welcome!</h1>
          <h6 className="text-white font-light text-lg max-w-xl">
            Project Manager is an app that helps you with productivity and
            maintaining order in your project
          </h6>
          <Link to="/register" className="mt-2 rounded-md text-lg text-white bg-blue-600 hover:bg-transparent hover:text-white py-1 px-4 border-2 border-blue-600"> 
              Get Started
          </Link>
          {/* <p className="text-white text-sm">
            Already a user?{" "}
            <Link to="/register" className="text-blue-500">
              Sign in
            </Link>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
