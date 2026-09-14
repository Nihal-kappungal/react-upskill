import React from "react";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const courseDetails = [
    {
      id: 1,
      name: "frontend",
    },
    {
      id: 2,
      name: "backend",
    },
    {
      id: 3,
      name: "javascript",
    },
    {
      id: 4,
      name: "react",
    },
    {
      id: 5,
      name: "node",
    },
    {
      id: 6,
      name: "database",
    },
    {
      id: 7,
      name: "typescript",
    },
    {
      id: 8,
      name: "git",
    },
  ];

  const param = useParams();
  console.log(param);
  return (
    <div className="text-2xl font-bold capitalize bg-teal-400 text-white grid grid-cols-4 gap-4 min-h-screen w-full p-20">
      {courseDetails.map((course) => (
        <div
          key={course.id}
          className="bg-violet-400 w-full h-full rounded-2xl p-4 flex flex-col items-start justify-between capitalize"
        >
          <span className="text-4xl leading-none tracking-tighter">
            {course.id}
          </span>
          <span className="leading-none tracking-tighter">{course.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CourseDetails;
