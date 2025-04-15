import React from "react";
import CoursesGrid from "../componentes/CoursesGrid/CoursesGrid";
import TrainersGrid from "../componentes/TrainersGrid/TrainersGrid";

export default function Home() {
  return (
    <> 
<section className="px-4 sm:px-6 lg:px-10 py-10">
  <div className="max-w-7xl mx-auto py-8">
    <div className="mb-6">
      <div className="flex flex-col gap-4 lg:flex-row justify-between items-start lg:items-center">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900">
            Featured Quran Courses
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-2xl">
            Master the Holy Quran with our expert-led courses. Perfect for all levels - from beginners to advanced memorization.
          </p>
        </div>

        <div className="w-full sm:w-auto">
          <a 
            href="#" 
            className="block text-center text-teal-700 hover:text-teal-600 border-2 border-teal-700 hover:border-teal-600 px-5 py-2 rounded-lg font-medium text-sm w-full sm:w-auto"
          >
            View all courses →
          </a>
        </div>
      </div>
    </div>
  </div>

  <CoursesGrid />  
</section>

   <section className="px-4 sm:px-6 lg:px-10 py-10">
  <div className="max-w-7xl mx-auto py-8">
    <div className="mb-6">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Quran Instructors
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-2xl">
            Learn from certified scholars and Huffaz. Personalized guidance for perfecting your recitation and memorization.
          </p>
        </div>
        
        <div className="w-full sm:w-auto">
          <a 
            href="#" 
            className="block text-center text-teal-700 hover:text-teal-600 border-2 border-teal-700 hover:border-teal-600 px-5 py-2 rounded-lg font-medium text-sm w-full sm:w-auto"
          >
            View all courses →
          </a>
        </div>
      </div>
    </div>
  </div>

  <TrainersGrid />  
</section>
    </>

  );
}
