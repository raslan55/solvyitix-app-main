import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";
import { CoursesContext } from "../context/CoursesContext";
import { RiVisaFill } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";




const Checkout = () => {
  const { id } = useParams();
  const { courses } = useContext(CoursesContext);
  const navigate = useNavigate();

  const course = courses.find((c) => c.id === id);
  const handleSubmit = (e) => {
    e.preventDefault();
  
    navigate("/success"); 
  };
  
  if (!course) return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-teal-600 p-6 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Course Not Available</h2>
          <p className="text-gray-600 mb-6">
            The course you're looking for doesn't exist or may have been removed. 
            Explore our available courses below.
          </p>
          <div className="space-y-4">
         
            <a
              href="/Home"
              className="block w-full border border-gray-300 text-gray-700 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition duration-200"
            >
              Return to Homepage
            </a>
          </div>
        </div>
      </div>
    </div>)

  return (
    <div className="py-8 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Complete Your Purchase</h1>
        <p className="text-gray-600">Secure checkout for: {course.title}</p>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2 p-6">
          <img 
            src={course.image} 
            alt={course.title} 
            className="w-full h-auto rounded-lg object-cover"
          />
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Course Details</h2>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-indigo-600">Price: ${course.price}</span>
              <span className="text-sm text-gray-500">Instant access after payment</span>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 bg-gray-50 p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Payment Information</h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="childName" className="block text-sm font-medium text-gray-700 mb-1">
                Child's Name
              </label>
              <input
                id="childName"
                type="text"
                placeholder="Enter child's full name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 transition duration-200 shadow-md hover:shadow-lg"
              >
                Complete Payment - ${course.price}
              </button>
            </div>
            
            <div className="flex items-center justify-center space-x-2">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="text-sm text-gray-500">Secure payment</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>
            
            <div className="flex justify-center gap-4">
            <RiVisaFill  />

            <FaCcMastercard />

            <FaCcPaypal />

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;