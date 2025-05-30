import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-8 bg-white rounded-2xl shadow-sm border border-gray-100 mt-10 mb-10">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          New Languages Coming Soon
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We're expanding our language offerings! While you wait, check out our{' '}
          <span className="font-semibold text-primary-600">German</span> course.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Column - CTA */}
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border border-primary-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary-100 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Available Now</h2>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">German Course 🇩🇪</h3>
          <Link
            to="/courses/german"
            className="group flex items-center text-primary-600 font-medium hover:text-primary-800 transition-colors"
          >
            Start learning today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Right Column - Email Signup */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Stay Updated</h2>
          <p className="text-gray-600">
            Get notified when we launch new language courses and receive early access benefits.
          </p>

          <div className="space-y-3">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
              />
            </div>
            <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-4 rounded-lg transition-colors shadow-sm hover:shadow-md">
              Notify me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
