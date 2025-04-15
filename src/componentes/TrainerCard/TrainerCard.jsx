import React from "react";
import PropTypes from "prop-types";

const TrainerCard = ({ name, specialization, experience, rating,students,image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    {/* Trainer Image */}
    <div className="h-48 overflow-hidden">
      <img 
        src={image} 
        alt={name}
        className="w-full h-full object-cover"
      />
    </div>
    
    {/* Trainer Info */}
    <div className="p-4">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-bold text-[#008080]">{name}</h3>
        <span className="flex items-center bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm font-medium">
          ⭐ {rating}
        </span>
      </div>
      
      <p className="text-[#008080] font-medium mt-1">{specialization}</p>
      
      <p className="text-gray-600 text-sm mt-2 line-clamp-2">
        {experience}
      </p>
      
      <div className="mt-4 flex justify-between items-center">
        <span className="text-gray-500 text-sm">
          📚 {students}+ students
        </span>
        <button className="bg-[#008080] hover:bg-teal-600 text-white px-3 py-1 rounded text-sm font-medium transition-colors">
          View Profile
        </button>
      </div>
    </div>
  </div>
  );
};


TrainerCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    specialization: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    students: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    courses: PropTypes.arrayOf(PropTypes.string).isRequired,
  };
export default TrainerCard;
