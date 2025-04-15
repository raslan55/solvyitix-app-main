import React, { useContext, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { MdOutlineCloudDone } from "react-icons/md";


import { TrainersContext } from "../../context/TrainersContext";

const TrainersTable = () => {
  const { trainers, removeTrainer, updateTrainer } = useContext(TrainersContext);
  const [editingId, setEditingId] = useState(null);
  const [editedTrainer, setEditedTrainer] = useState({});

  const handleEdit = (trainer) => {
    setEditingId(trainer.id);
    setEditedTrainer({ ...trainer });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTrainer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    updateTrainer(editedTrainer.id, editedTrainer);
    setEditingId(null);
  };


  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Trainers Table</h2>
      
      <div className="overflow-x-auto shadow rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 bg-white">
          <thead className="bg-gray-50 text-gray-700 text-sm">
            <tr>
              <th className="px-6 py-3 text-left font-semibold">Name</th>
              <th className="px-6 py-3 text-left font-semibold">Specialization</th>
              <th className="px-6 py-3 text-left font-semibold">Experience</th>
              <th className="px-6 py-3 text-left font-semibold">Rating</th>
              <th className="px-6 py-3 text-left font-semibold">Students</th>
              <th className="px-6 py-3 text-left font-semibold">Image</th>
              <th className="px-6 py-3 text-left font-semibold">Courses</th>
              <th className="px-6 py-3 text-left font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {trainers.map((trainer) => (
              <tr key={trainer.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium text-gray-800">
                  {editingId === trainer.id ? (
                    <input
                      name="name"
                      value={editedTrainer.name}
                      onChange={handleChange}
                      className="border border-gray-300 rounded px-2 py-1 w-full"
                    />
                  ) : (
                    trainer.name
                  )}
                </td>
                <td className="px-6 py-4 text-gray-700">
                  {editingId === trainer.id ? (
                    <input
                      name="specialization"
                      value={editedTrainer.specialization}
                      onChange={handleChange}
                      className="border border-gray-300 rounded px-2 py-1 w-full"
                    />
                  ) : (
                    trainer.specialization
                  )}
                </td>
                <td className="px-6 py-4 text-gray-700">
                  {editingId === trainer.id ? (
                    <input
                      name="experience"
                      value={editedTrainer.experience}
                      onChange={handleChange}
                      className="border border-gray-300 rounded px-2 py-1 w-full"
                    />
                  ) : (
                    trainer.experience
                  )}
                </td>
                <td className="px-6 py-4 text-gray-700">
                  {editingId === trainer.id ? (
                    <input
                      type="number"
                      name="rating"
                      value={editedTrainer.rating}
                      onChange={handleChange}
                      min="0"
                      max="5"
                      step="0.1"
                      className="border border-gray-300 rounded px-2 py-1 w-full"
                    />
                  ) : (
                    trainer.rating
                  )}
                </td>
                <td className="px-6 py-4 text-gray-700">
                  {editingId === trainer.id ? (
                    <input
                      type="number"
                      name="students"
                      value={editedTrainer.students}
                      onChange={handleChange}
                      min="0"
                      className="border border-gray-300 rounded px-2 py-1 w-full"
                    />
                  ) : (
                    trainer.students
                  )}
                </td>
                <td className="px-6 py-4">
                  {editingId === trainer.id ? (
                    <input
                      name="image"
                      value={editedTrainer.image}
                      onChange={handleChange}
                      className="border border-gray-300 rounded px-2 py-1 w-full"
                    />
                  ) : (
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-16 h-16 object-cover rounded shadow"
                    />
                  )}
                </td>
                <td className="px-6 py-4 text-gray-700">
                  {editingId === trainer.id ? (
                    <input
                      name="courses"
                      value={editedTrainer.courses?.join(',') || ''}
                      onChange={(e) => setEditedTrainer({
                        ...editedTrainer,
                        courses: e.target.value.split(',')
                      })}
                      className="border border-gray-300 rounded px-2 py-1 w-full"
                    />
                  ) : (
                    trainer.courses?.join(', ') || 'None'
                  )}
                </td>
                <td className="px-6 py-4 space-x-2 flex justify-center items-center">
                  {editingId === trainer.id ? (
                    <>
                      <button
                        onClick={handleSave}
                        className="px-4 py-1 bg-[#008080] text-white rounded hover:bg-teal-600 transition"
                      >
                        <MdOutlineCloudDone />

                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-500 transition"
                      >
                        <MdOutlineCancel />

                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEdit(trainer)}
                        className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                      >
                        <FaRegEdit />

                      </button>
                      <button
                        onClick={() => removeTrainer(trainer.id)}
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

export default TrainersTable;