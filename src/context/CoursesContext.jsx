import React, { createContext, useState, useEffect } from "react";

export const CoursesContext = createContext();

const defaultCourses = [
  {
    id: "a",
    title: "Learn Quran Basics",
    description: "Perfect for kids and beginners. Focus on letters, tajweed, and pronunciation.",
    price: 15,
    image: "https://img.freepik.com/free-photo/science-study-chemical-test-tube-experiment-laboratory-graphic_53876-123986.jpg?t=st=1744552782~exp=1744556382~hmac=f714282855bbc2990507b97f788d0e43a67c887136a6bf2c7aab7e4b9b1fc1c0&w=740",
  },
  {
    id: "b",
    title: "Tajweed Masterclass",
    description: "Advanced course covering all Tajweed rules with examples and practice.",
    price: 25,
    image: "https://img.freepik.com/free-photo/student-class-taking-notes_23-2148888811.jpg?t=st=1744552745~exp=1744556345~hmac=6fd660e8ebaee1b471ccc0a05be239e3e554dc13efd7cafd5df32f4df598ea3e&w=740",
  },
  {
    id: "c",
    title: "Memorization Journey",
    description: "Step-by-step memorization plan with personalized support and tracking.",
    price: 20,
    image: "https://img.freepik.com/free-vector/flat-background-with-different-learning-elements_23-2147596298.jpg?t=st=1744552711~exp=1744556311~hmac=746b66530a20da9c9b0ea1a5494cb08e774662b79376c9946fffed45ffd9b379&w=740",
  },
  {
    id: "d",
    title: "Memorization Journey",
    description: "Step-by-step memorization plan with personalized support and tracking.",
    price: 20,
    image: "https://img.freepik.com/free-vector/e-learning-online-flat-illustration_98292-3809.jpg?t=st=1744552675~exp=1744556275~hmac=3ba7ee2cef778b040d5e36aa9dd104e1ee7cfec6c6d3a83f74af92c41699e433&w=740",
  },
];

const CoursesProvider = ({ children }) => {
  const [courses, setCourses] = useState(() => {
    const stored = localStorage.getItem("courses");
    return stored ? JSON.parse(stored) : defaultCourses;
  });

  // Sync with localStorage
  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
  }, [courses]);

  const addCourse = (course) => {
    setCourses((prevCourses) => [
      ...prevCourses,
      { ...course, id: Date.now().toString() },
    ]);
  };

  const removeCourse = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  const updateCourse = (id, updatedData) => {
    setCourses(
      courses.map(course =>
        course.id === id ? { ...course, ...updatedData } : course
      )
    );
  };

  return (
    <CoursesContext.Provider value={{ courses, addCourse, removeCourse, updateCourse }}>
      {children}
    </CoursesContext.Provider>
  );
};

export default CoursesProvider;
