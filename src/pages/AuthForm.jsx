// components/AuthForm.js
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const AuthForm = () => {
  const [isRegister, setIsRegister] = useState(true); // Track form type
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    if (isRegister) {
      // Handle registration logic here
      console.log('Registering:', data);
    } else {
      // Handle login logic here
      console.log('Logging in:', data);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-teal-600 mb-8">
          {isRegister ? 'Register' : 'Login'}
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {isRegister && (
            <div className="flex flex-col gap-1">
              <input
                {...register('username', { required: 'Username is required' })}
                placeholder="Username"
                className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
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
              className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
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
              className="p-3 w-full border rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 font-semibold text-white bg-teal-600 rounded hover:bg-teal-700 disabled:bg-teal-300"
            disabled={isSubmitting}
          >
            {isRegister ? 'Sign Up' : 'Log In'}
            {isSubmitting}
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          {isRegister ? (
            <>
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => setIsRegister(false)}
                className="text-teal-600 hover:underline"
              >
                Login
              </button>
            </>
          ) : (
            <>
              Dont have an account?{' '}
              <button
                type="button"
                onClick={() => setIsRegister(true)}
                className="text-teal-600 hover:underline"
              >
                Sign Up
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
