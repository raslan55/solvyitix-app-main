import React from "react";
import CoursesGrid from "../componentes/CoursesGrid/CoursesGrid";
import TrainersGrid from "../componentes/TrainersGrid/TrainersGrid";

export default function Home() {
  return (
    <> 
        {/* Featured Courses Section */}
        <section className="px-4 sm:px-6 lg:px-10 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                 Featured Quran Courses
              </h2>
              <p className="text-gray-600 text-sm sm:text-base max-w-2xl">
                Master the Holy Quran with our expert-led courses. Suitable for all levels – from beginner to advanced memorization.
              </p>
            </div>

            <a
              href="#"
              className="inline-block text-center text-white bg-[#008080] hover:bg-teal-600 transition px-6 py-2 rounded-lg font-medium text-sm shadow-md"
            >
              View all courses →
            </a>
          </div>

          <CoursesGrid />
        </div>
      </section>

      {/* Quran Instructors Section */}
      <section className="px-4 sm:px-6 lg:px-10 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                 Quran Instructors
              </h2>
              <p className="text-gray-600 text-sm sm:text-base max-w-2xl">
                Learn from certified scholars and Huffaz. Get personalized guidance to perfect your recitation and memorization.
              </p>
            </div>

            <a
              href="#"
              className="inline-block text-center text-white bg-[#008080] hover:bg-teal-600 transition px-6 py-2 rounded-lg font-medium text-sm shadow-md"
            >
              Meet the instructors →
            </a>
          </div>

          <TrainersGrid />
        </div>
      </section>

    </>

  );
}
