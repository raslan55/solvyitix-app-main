import React, { useContext, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { MdOutlineCloudDone } from "react-icons/md";

import { CoursesContext } from "../../context/CoursesContext";

const CoursesTable = () => {
  const { courses, removeCourse } = useContext(CoursesContext);
  const [editingId, setEditingId] = useState(null);
  const [editedCourse, setEditedCourse] = useState({});

  const handleEdit = (course) => {
    setEditingId(course.id);
    setEditedCourse(course);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedCourse((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    
    setEditingId(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
    <h2 className="text-2xl font-bold mb-6 text-gray-800">Courses Table</h2>
    
    <div className="overflow-x-auto shadow rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200 bg-white">
        <thead className="bg-gray-50 text-gray-700 text-sm">
          <tr>
            <th className="px-6 py-3 text-left font-semibold">Title</th>
            <th className="px-6 py-3 text-left font-semibold">Description</th>
            <th className="px-6 py-3 text-left font-semibold">Price</th>
            <th className="px-6 py-3 text-left font-semibold">Image</th>
            <th className="px-6 py-3 text-left font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm">
          {courses.map((course) => (
            <tr key={course.id} className="hover:bg-gray-50 transition">
              <td className="px-6 py-4 font-medium text-gray-800">
                {editingId === course.id ? (
                  <input
                    name="title"
                    value={editedCourse.title}
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-2 py-1 w-full"
                  />
                ) : (
                  course.title
                )}
              </td>
              <td className="px-6 py-4 text-gray-700">
                {editingId === course.id ? (
                  <input
                    name="description"
                    value={editedCourse.description}
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-2 py-1 w-full"
                  />
                ) : (
                  course.description
                )}
              </td>
              <td className="px-6 py-4 text-gray-700">
                {editingId === course.id ? (
                  <input
                    name="price"
                    value={editedCourse.price}
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-2 py-1 w-full"
                  />
                ) : (
                  `$${course.price}`
                )}
              </td>
              <td className="px-6 py-4">
                {editingId === course.id ? (
                  <input
                    name="image"
                    value={editedCourse.image}
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-2 py-1 w-full"
                  />
                ) : (
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-16 h-16 object-cover rounded shadow"
                  />
                )}
              </td>
              <td className="px-6 py-4 space-x-2">
                {editingId === course.id ? (
                  <button
                    onClick={handleSave}
                    className="px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
                  >
                   <MdOutlineCloudDone />
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => handleEdit(course)}
                      className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                      <FaRegEdit />
                    </button>
                    <button
                      onClick={() => removeCourse(course.id)}
                      className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
                    >
                   <FaRegTrashCan />
                    
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  </div>
  );
};

export default CoursesTable;