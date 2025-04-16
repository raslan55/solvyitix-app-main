import React, { createContext, useState, useEffect } from "react";

export const CoursesContext = createContext();

const defaultCourses = [
  {
    id: "a",
    title: "Intro to Programming",
    description: "Perfect for beginners. Learn programming fundamentals using Python.",
    price: 15,
    image: "https://www.edynamiclearning.com/wp-content/uploads/2019/09/EDL221-Intro_to_Programming_1a.jpg",
  },
  {
    id: "b",
    title: "Frontend Web Development",
    description: "Master HTML, CSS, and JavaScript to build stunning websites.",
    price: 25,
    image: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*92LYJgZ83xWUeFw3vicEDw.jpeg",
  },
  {
    id: "c",
    title: "Data Structures & Algorithms",
    description: "Boost your problem-solving skills with in-depth DSA training.",
    price: 20,
    image: "https://img.freepik.com/free-photo/computer-program-coding-screen_53876-138060.jpg",
  },
  {
    id: "d",
    title: "Full Stack Developer Bootcamp",
    description: "End-to-end web development: frontend, backend, and deployment.",
    price: 30,
    image: "https://media.licdn.com/dms/image/v2/D4D12AQGA3GBKnm_-mg/article-cover_image-shrink_720_1280/B4DZUSNc38HkAI-/0/1739767271832?e=2147483647&v=beta&t=GorMw7VAVieZjk1DLbqDLNJZqWXJieF5pUrAdqq35Zg",
  }
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
