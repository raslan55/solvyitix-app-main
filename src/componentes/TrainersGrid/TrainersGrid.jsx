import React, { useContext } from "react";
import TrainerCard from "../TrainerCard/TrainerCard";
import { TrainersContext } from "../../context/TrainersContext";

const TrainersGrid = () => {
  const { trainers } = useContext(TrainersContext);
  
  if (!trainers) {
    return <div>Loading trainers...</div>;
  }

  if (trainers.length === 0) {
    return <div>No trainers available</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {trainers.map((trainer) => ( 
        <TrainerCard
          key={trainer.id}
          name={trainer.name}
          specialization={trainer.specialization}
          experience={trainer.experience}
          rating={trainer.rating}
          students={trainer.students}
          image={trainer.image}
          courses={trainer.courses}
        />
      ))}
    </div>
  );
};

export default TrainersGrid;