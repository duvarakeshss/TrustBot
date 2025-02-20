import React from 'react';

function Homepage() {
  return (
    <div className="min-h-screen flex flex-col">
      { }
      <header className="bg-gray-100 py-4 px-6 flex justify-between items-center border-b border-gray-200">
        <nav className="flex space-x-6">
          <a href="/" className="text-gray-800 font-bold hover:text-blue-600">HOME</a>
          <a href="/blog" className="text-gray-800 font-bold hover:text-blue-600">BLOG</a>
          <a href="/contacts" className="text-gray-800 font-bold hover:text-blue-600">CONTACTS</a>
        </nav>
        <div className="flex space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Login</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">Sign Up</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-grow bg-gray-50 flex flex-col items-center justify-center py-12 px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">CHAT BOT</h1>
        <p className="text-gray-600 text-lg text-center max-w-2xl mb-8">
          Lorem ipsum dolor sit amet, consectetur elit. Etiam rhoncus, velit vel lacinia commo
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <p className="text-gray-700 font-semibold">Royalty Free Vectors &gt; Bot Vectors</p>
          <p className="text-gray-600 mt-2">Website landing home page with robot chatbot vector image</p>
          <div className="mt-4 space-x-4">
            <button className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-md hover:bg-yellow-500">LICENSE</button>
            <button className="bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-600">LEARN MORE</button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4 px-6 text-center">
        <p className="text-sm text-gray-300">IMAGE ID: 41445248 | COLOR MODE: RGB | ARTIST: HobbitFoot</p>
        <div className="mt-2 space-x-4">
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">Like</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">Cart</button>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;