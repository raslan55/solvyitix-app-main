import React, { createContext, useState, useEffect } from "react";

export const TrainersContext = createContext();

const defaultTrainers = [
  {
    id: "1",
    name: "Sheikh Ahmed Al-Misn",
    specialization: "Quran Recitation & Tajweed",
    experience: "15+ years teaching Quranic studies",
    rating: 4.9,
    students: 1200,
    image: "https://img.freepik.com/free-photo/medium-shot-young-man-looking-camera-vinyl-store_23-2148237235.jpg?t=st=1744556095~exp=1744559695~hmac=6834467b9f1a2af17641b03200d75f1e1cfffc972dc58539eaf293d95249d062&w=740",
    courses: ["a", "b"]
  },
  {
    id: "2",
    name: "Ustadha Fatima Khan",
    specialization: "Quran Memorization (Hifz)",
    experience: "10 years specializing in children's education",
    rating: 4.8,
    students: 850,
    image: "https://img.freepik.com/free-photo/medium-shot-man-holding-notebook_23-2149204749.jpg?t=st=1744556141~exp=1744559741~hmac=d2eeda8181e05f09833965d111f15374cd1c6d62c5af15142d99dcea1f4a277f&w=740",
    courses: ["c", "d"]
  },
  {
    id: "3",
    name: "Mufti Ibrahim Ali",
    specialization: "Advanced Tajweed & Qira'at",
    experience: "Imam with 20+ years of teaching experience",
    rating: 5.0,
    students: 2000,
    image: "https://img.freepik.com/free-photo/smiling-showing-thumb-up-male-teacher-wearing-glasses-holding-abacus-sitting-table-with-school-tools-classroom_141793-113949.jpg?t=st=1744556177~exp=1744559777~hmac=7205ede73a07cc9185672d8053c2ae89c002e95c53ae9442300330f5375ddcbf&w=740",
    courses: ["b"]
  },
  {
    id: "4",
    name: "Ustadha Aisha Rahman",
    specialization: "Quran Basics for Beginners",
    experience: "5 years teaching new Muslims",
    rating: 4.7,
    students: 500,
    image: "https://img.freepik.com/free-photo/happy-smiling-young-male-teacher-sitting-school-desk-with-books-notes-holding-pencil-front-blackboard-classroom_141793-98933.jpg?t=st=1744556232~exp=1744559832~hmac=5066fd9e25dbce95b5a718acd6ba81e7ee1920cfe128b16c6c25c5da2cbb38c5&w=740",
    courses: ["a"]
  }
];

const TrainersProvider = ({ children }) => {
  const [trainers, setTrainers] = useState(() => {
    const stored = localStorage.getItem("trainers");
    return stored ? JSON.parse(stored) : defaultTrainers;
  });

  // كل ما تتغير قائمة المدربين، خزّنها
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