import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-600 to-purple-800">
      <div className="text-center text-white px-6 py-12 rounded-lg shadow-lg bg-opacity-80 max-w-lg mx-auto">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Oops! Page Not Found</h2>
        <p className="text-lg mb-6">
          We couldn't find the page you were looking for. It may have been moved or deleted.
        </p>
        <Link href="/" className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md shadow-lg transform hover:scale-105 transition duration-300">
    
            Go to Homepage
          
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
