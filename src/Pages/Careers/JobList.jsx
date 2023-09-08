import React, { useState } from 'react';

const JobList = ({ job }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardClasses = `bg-white rounded-lg shadow-lg p-6 mb-6 ${
    isHovered ? 'transform scale-105 shadow-xl border-blue-500 border-4' : ''
  }`;

  return (
    <div
      className={cardClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-2xl font-semibold text-blue-600">{job.title}</h2>
      <p className="text-gray-600">Vacancy: {job.vacancy}</p>
      <p className="text-gray-600">Salary Range: {job.salaryRange}</p>
      <p className="text-gray-600">Experience Required: {job.experience}</p>
      <p className="mt-4 text-gray-800">{job.description}</p>
      <div className="mt-4">
        <a
          href={job.applyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-full font-semibold hover:shadow-md transition duration-300 ease-in-out"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default JobList;
