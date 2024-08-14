"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

const Homepage = () => {
  const [show, setShow] = useState(false);

  // Example effect
  useEffect(() => {
    // This effect will run on the client
    console.log('Component mounted');
    setShow(true); // Trigger the animation when the component mounts
  }, []);

  return (
    <div className={`h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white transition-opacity duration-1000 ${show ? 'opacity-100' : 'opacity-0'}`}>
      <h1 className="text-6xl font-bold mb-6 transition-transform duration-1000 transform ${show ? 'translate-y-0' : '-translate-y-12'}">
        Welcome to Spreadsheet App
      </h1>
      <p className="text-xl mb-12 transition-opacity duration-1000 ${show ? 'opacity-100' : 'opacity-0'}">
        The best way to manage your data efficiently and effectively.
      </p>
      <Link href="/spreadsheet">
        <button className="bg-blue-600 px-6 py-3 text-lg font-semibold rounded-md shadow-md hover:bg-blue-700 transition-transform duration-300 hover:scale-105">
          Go to Spreadsheet
        </button>
      </Link>
    </div>
  );
};

export default Homepage;
