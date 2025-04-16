import React, { createContext, useState, useEffect } from "react";

export const TrainersContext = createContext();

const defaultTrainers = [
  {
    id: "1",
    name: "Eng. Ahmed ",
    specialization: "Full Stack Web Development",
    experience: "15+ years building and teaching modern web apps",
    rating: 4.9,
    students: 1200,
    image: "https://img.freepik.com/free-photo/medium-shot-young-man-looking-camera-vinyl-store_23-2148237235.jpg",
    courses: ["a", "b"]
  },
  {
    id: "2",
    name: "Eng. Fatima ",
    specialization: "Python & Data Structures",
    experience: "10 years mentoring beginners and CS students",
    rating: 4.8,
    students: 850,
    image: "https://images.pexels.com/photos/8154930/pexels-photo-8154930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    courses: ["c", "d"]
  },
  {
    id: "3",
    name: "Dr. Ibrahim Ali",
    specialization: "Algorithms & System Design",
    experience: "20+ years in academia and industry",
    rating: 5.0,
    students: 2000,
    image: "https://img.freepik.com/free-photo/smiling-showing-thumb-up-male-teacher-wearing-glasses-holding-abacus-sitting-table-with-school-tools-classroom_141793-113949.jpg",
    courses: ["b"]
  },
  {
    id: "4",
    name: "Eng. Mohamed ",
    specialization: "Intro to Programming",
    experience: "5 years helping absolute beginners get started",
    rating: 4.7,
    students: 500,
    image: "https://img.freepik.com/free-photo/happy-smiling-young-male-teacher-sitting-school-desk-with-books-notes-holding-pencil-front-blackboard-classroom_141793-98933.jpg",
    courses: ["a"]
  }
];

const TrainersProvider = ({ children }) => {
  const [trainers, setTrainers] = useState(() => {
    const stored = localStorage.getItem("trainers");
    return stored ? JSON.parse(stored) : defaultTrainers;
  });

  
  useEffect(() => {
    localStorage.setItem("trainers", JSON.stringify(trainers));
  }, [trainers]);

  const addTrainer = (trainer) => {
    setTrainers((prevTrainers) => [
      ...prevTrainers,
      { ...trainer, id: Date.now().toString() },
    ]);
  };

  const removeTrainer = (id) => {
    setTrainers(trainers.filter(trainer => trainer.id !== id));
  };

  const updateTrainer = (id, updatedData) => {
    setTrainers(
      trainers.map(trainer =>
        trainer.id === id ? { ...trainer, ...updatedData } : trainer
      )
    );
  };

  return (
    <TrainersContext.Provider value={{ trainers, addTrainer, removeTrainer, updateTrainer }}>
      {children}
    </TrainersContext.Provider>
  );
};

export default TrainersProvider;