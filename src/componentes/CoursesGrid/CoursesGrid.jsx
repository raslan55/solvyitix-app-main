import React , { useContext } from "react";
import CourseCard from "../CourseCard/CourseCard";


import { CoursesContext } from "../../context/CoursesContext";

const CoursesGrid = () => {
  const { courses } = useContext(CoursesContext);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          id={course.id}
          title={course.title}
          description={course.description}
          price={course.price}
          image={course.image}
        />
      ))}
    </div>
  );
};

export default CoursesGrid;
