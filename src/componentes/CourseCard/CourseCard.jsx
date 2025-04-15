import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const CourseCard = ({ id, title, description, price, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-teal-700">
            ${price} / session
          </span>
          <Link to={`/checkout/${id}`}>
          <button className="text-white bg-teal-700 hover:bg-teal-600 font-medium rounded-lg text-sm px-4 py-2">
            Enroll
          </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

// Optional: Prop types for validation
CourseCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default CourseCard;
