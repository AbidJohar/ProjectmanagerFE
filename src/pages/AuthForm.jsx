// components/AuthForm.js
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { motion } from 'framer-motion';
import loginImage from '../assets/login.png';
import backgroundImage from '../assets/backgroundImage.jpg';

const AuthForm = () => {
  const [isRegister, setIsRegister] = useState(true); // Track form type
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    if (isRegister) {
      console.log('Registering:', data);
    } else {
      console.log('Logging in:', data);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen"
    style={{backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg">
        
        {/* Left Side - Form */}
        <motion.div
          className={`w-full max-w-md p-8 ${isRegister ? 'order-1' : 'order-2'}`} // Order changes based on form type
          initial={{ opacity: 0, x: isRegister ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: isRegister ? 20 : -20 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl font-semibold text-center text-blue-500 mb-8">
            {isRegister ? 'Register' : 'Login'}
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            {isRegister && (
              <div className="flex flex-col gap-1">
                <input
                  {...register('username', { required: 'Username is required' })}
                  placeholder="Username"
                  className="p-3 border-[1px] border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.username && <p className="text-sm text-red-500">{errors.username.message}</p>}
              </div>
            )}
            <div className="flex flex-col gap-1">
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Enter a valid email address',
                  },
                })}
                placeholder="Email"
                className="p-3 border-[1px] border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            </div>
            <div className="flex flex-col gap-1 relative">
              <input
                {...register('password', {
                  required: 'Password is required',
                  minLength: { value: 7, message: 'Must be at least 7 characters long' },
                })}
                type="password"
                placeholder="Password"
                className="p-3 w-full border-[1px] border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-2 mt-4 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 disabled:bg-blue-300"
              disabled={isSubmitting}
            >
              {isRegister ? 'Sign Up' : 'Log In'}
            </button>
          </form>
          <p className="mt-4 text-sm text-center text-gray-600">
            {isRegister ? (
              <>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => setIsRegister(false)}
                  className="text-blue-600 hover:underline"
                >
                  Login
                </button>
              </>
            ) : (
              <>
                Don`t have an account?{' '}
                <button
                  type="button"
                  onClick={() => setIsRegister(true)}
                  className="text-blue-600 hover:underline"
                >
                  Sign Up
                </button>
              </>
            )}
          </p>
        </motion.div>

        {/* Right Side - Image with Animation */}
        <motion.div
          className={`hidden md:flex border-[1px] rounded-md  border-blue-600 w-full items-center justify-center ${isRegister ? 'order-2' : 'order-1'}`} // Order changes based on form type
          initial={{ opacity: 0, x: isRegister ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: isRegister ? -20 : 20 }}
          transition={{ duration: 0.7 }}
          key={isRegister ? 'register-image' : 'login-image'}
        >
          <img
            src={loginImage}
            alt="Auth Illustration"
            className="rounded-lg  w-80 h-auto object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AuthForm;
