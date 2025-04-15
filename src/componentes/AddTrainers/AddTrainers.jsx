import React, { useState, useContext } from "react";
import { TrainersContext } from "../../context/TrainersContext";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddTrainerForm = () => {
  const { addTrainer } = useContext(TrainersContext);

  const [trainer, setTrainer] = useState({
    name: "",
    specialization: "",
    experience: "",
    rating: "",
    students: "",
    image: "",
    courses: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    specialization: "",
    experience: "",
    rating: "",
    students: "",
    image: "",
    courses: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrainer((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!trainer.name.trim()) newErrors.name = "Please enter the trainer's name!";
    if (!trainer.specialization.trim()) newErrors.specialization = "Please enter the trainer's specialization!";
    if (!trainer.image.trim()) newErrors.image = "Please provide a profile image URL!";

    if (trainer.rating && (isNaN(trainer.rating) || trainer.rating < 0 || trainer.rating > 5)) {
      newErrors.rating = "Rating must be a number between 0 and 5.";
    }

    if (trainer.students && (isNaN(trainer.students) || trainer.students < 0)) {
      newErrors.students = "Students must be a non-negative number.";
    }

    if (trainer.experience && trainer.experience.trim().length < 3) {
      newErrors.experience = "Experience must be at least 3 characters.";
    }

    if (trainer.courses && !/^[0-9, ]*$/.test(trainer.courses)) {
      newErrors.courses = "Courses must be comma-separated numbers.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the errors in the form.");
    } else {
      addTrainer({
        ...trainer,
        rating: trainer.rating || 0,
        students: trainer.students || 0,
        courses: trainer.courses ? trainer.courses.split(',').map((id) => id.trim()) : [],
      });

      setTrainer({
        name: "",
        specialization: "",
        experience: "",
        rating: "",
        students: "",
        image: "",
        courses: ""
      });

      setErrors({});
      toast.success("Trainer added successfully!");
    }
  };

  return (
    <>
      <ToastContainer />

      <form onSubmit={handleSubmit} className="p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Add New Trainer</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name*</label>
            <input
              type="text"
              name="name"
              value={trainer.name}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.name ? 'border-red-600' : 'border-gray-300'} rounded`}
              placeholder="Trainer name"
            />
            {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
          </div>

          {/* Specialization */}
          <div>
            <label className="block text-sm font-medium mb-1">Specialization*</label>
            <input
              type="text"
              name="specialization"
              value={trainer.specialization}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.specialization ? 'border-red-600' : 'border-gray-300'} rounded`}
              placeholder="Teaching specialization"
            />
            {errors.specialization && <p className="text-red-600 text-sm">{errors.specialization}</p>}
          </div>

          {/* Experience */}
          <div>
            <label className="block text-sm font-medium mb-1">Experience</label>
            <input
              type="text"
              name="experience"
              value={trainer.experience}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.experience ? 'border-red-600' : 'border-gray-300'} rounded`}
              placeholder="Teaching experience"
            />
            {errors.experience && <p className="text-red-600 text-sm">{errors.experience}</p>}
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium mb-1">Rating</label>
            <input
              type="number"
              name="rating"
              min="0"
              max="5"
              step="0.1"
              value={trainer.rating}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.rating ? 'border-red-600' : 'border-gray-300'} rounded`}
              placeholder="0-5"
            />
            {errors.rating && <p className="text-red-600 text-sm">{errors.rating}</p>}
          </div>

          {/* Students */}
          <div>
            <label className="block text-sm font-medium mb-1">Students</label>
            <input
              type="number"
              name="students"
              min="0"
              value={trainer.students}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.students ? 'border-red-600' : 'border-gray-300'} rounded`}
              placeholder="Number"
            />
            {errors.students && <p className="text-red-600 text-sm">{errors.students}</p>}
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium mb-1">Image URL*</label>
            <input
              type="text"
              name="image"
              value={trainer.image}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.image ? 'border-red-600' : 'border-gray-300'} rounded`}
              placeholder="Profile image URL"
            />
            {errors.image && <p className="text-red-600 text-sm">{errors.image}</p>}
          </div>

          {/* Courses */}
          <div className="sm:col-span-2 lg:col-span-3">
            <label className="block text-sm font-medium mb-1">Courses (IDs)</label>
            <input
              type="text"
              name="courses"
              value={trainer.courses}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.courses ? 'border-red-600' : 'border-gray-300'} rounded`}
              placeholder="Course IDs (comma separated)"
            />
            {errors.courses && <p className="text-red-600 text-sm">{errors.courses}</p>}
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2 lg:col-span-3 flex justify-end">
            <button
              type="submit"
              className="p-2 px-4 bg-teal-700 text-white rounded hover:bg-teal-600"
            >
              Add Trainer
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddTrainerForm;
