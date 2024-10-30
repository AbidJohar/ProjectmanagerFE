const NotFoundPage = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-700">
        <div className="flex flex-col items-center gap-4 p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-6xl font-bold text-teal-500">404</h1>
          <h2 className="text-2xl font-semibold">Page Not Found</h2>
          <p className="text-center text-gray-500">
            Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
          </p>
          <a 
            href="/" 
            className="mt-6 px-6 py-3 font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors"
          >
            Go to Homepage
          </a>
        </div>
      </div>
    );
  };
  
  export default NotFoundPage;
  