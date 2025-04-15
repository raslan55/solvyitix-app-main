import React, { useState, useContext } from "react";
import { CoursesContext } from "../../context/CoursesContext"; // Importing the context
import { toast, ToastContainer } from 'react-toastify'; // Correct import for toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Importing styles for toastify

const AddCourseForm = () => {
  const { addCourse } = useContext(CoursesContext); // Using addCourse from the context
  const [course, setCourse] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: value,
    }));

    // Reset the error for the specific field on change
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!course.title) newErrors.title = "Please enter the course title!";
    if (!course.description) newErrors.description = "Please enter the course description!";
    if (!course.price) newErrors.price = "Please enter the course price!";
    if (!course.image) newErrors.image = "Please enter the image URL!";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set errors if there are validation issues
   
    } else {
      addCourse(course); // Add the course using the function
      setCourse({ title: "", description: "", price: "", image: "" }); // Clear the form data after submission
      setErrors({ title: "", description: "", price: "", image: "" }); // Clear the errors
      toast.success("Course added successfully!"); // Show success toast
    }
  };

  return (
    <>
      {/* Toast container to display notifications */}
      <ToastContainer />

      <form onSubmit={handleSubmit} className="p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Add New Course</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={course.title}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.title ? 'border-red-600' : 'border-gray-300'} rounded`}
              placeholder="Add course title"
            />
            {errors.title && <p className="text-red-600 text-sm">{errors.title}</p>}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <input
              type="text"
              name="description"
              value={course.description}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.description ? 'border-red-600' : 'border-gray-300'} rounded`}
              placeholder="Type course description"
            />
            {errors.description && <p className="text-red-600 text-sm">{errors.description}</p>}
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium mb-1">Price</label>
            <input
              type="text"
              name="price"
              value={course.price}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.price ? 'border-red-600' : 'border-gray-300'} rounded`}
              placeholder="Price"
            />
            {errors.price && <p className="text-red-600 text-sm">{errors.price}</p>}
          </div>

          {/* Image URL */}
          <div className="md:col-span-2 lg:col-span-1">
            <label className="block text-sm font-medium mb-1">Image URL</label>
            <input
              type="text"
              name="image"
              value={course.image}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.image ? 'border-red-600' : 'border-gray-300'} rounded`}
              placeholder="Image URL"
            />
            {errors.image && <p className="text-red-600 text-sm">{errors.image}</p>}
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 lg:col-span-3 flex justify-end">
            <button
              type="submit"
              className="p-2 px-4 bg-[#008080] text-white rounded hover:bg-teal-600"
            >
              Add Course
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddCourseForm;
