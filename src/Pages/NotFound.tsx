import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | International Institute of Foreign Languages & Hospitality Management</title>
        <meta name="description" content="The page you are looking for could not be found. Please return to our homepage or contact us for assistance." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div>
            <h1 className="text-9xl font-bold text-primary-500">404</h1>
            <h2 className="mt-6 text-3xl font-bold text-gray-900">Page Not Found</h2>
            <p className="mt-2 text-sm text-gray-600">
              The page you are looking for could not be found. Please check the URL or return to our homepage.
            </p>
          </div>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 transition-colors duration-200"
            >
              <Home className="w-5 h-5 mr-2" />
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound; 