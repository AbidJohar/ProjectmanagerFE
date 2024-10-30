import { Link } from "react-router-dom";
// import { useSelector } from 'react-redux';
import { Button } from "@mui/material";

const HomePage = () => {
  //   const { userInfo } = useSelector((state) => state.userLogin);
  const userInfo = null;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center text-center text-4xl p-4">
          <h1 className="text-4xl font-semibold text-teal-600">Welcome!</h1>
          <h6 className="text-gray-400 font-light text-lg max-w-xl">
            Project Manager is an app that helps you with productivity and
            maintaining order in your project
          </h6>
          <Link to="/register" className="mt-2">
            <Button
              className="text-teal-600 border-teal-600 hover:bg-teal-600 hover:text-white"
              variant="outlined"
              size="large"
            >
              Get Started
            </Button>
          </Link>
          {/* <p className="text-white text-sm">
            Already a user?{" "}
            <Link to="/register" className="text-teal-500">
              Sign in
            </Link>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
