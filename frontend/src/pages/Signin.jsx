import React from 'react';

const Signin = () => {
  return (
    // The main container needs to be 'relative' to anchor the absolute children.
    <div className="relative min-h-screen w-full bg-white">
      
      {/* Layer 1: The form content. This layer is on the bottom. */}
      {/* We use flexbox to push the form to the right side of the screen. */}
      <div className="absolute inset-0 flex items-center justify-end">
        <div className="w-full max-w-md p-8 lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Sign In</h2>
          <form className="space-y-6">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm"
                placeholder="you@example.com"
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm"
                placeholder="••••••••"
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            {/* Sign In Button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Layer 2: The blue overlay. This is clipped into a diagonal shape. */}
      <div
        className="absolute inset-0 flex items-center bg-blue-600 p-12 text-white"
        style={{ clipPath: 'polygon(0 0, 60% 0, 40% 100%, 0% 100%)' }}
      >
        {/* We position the company name within the visible part of the clipped shape */}
        <div className="w-1/3">
          <h1 className="text-5xl font-bold text-center">Your Company Name</h1>
        </div>
      </div>

    </div>
  );
};

export default Signin;