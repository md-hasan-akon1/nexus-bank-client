import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const JobList = ({ job }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardClasses = `bg-white rounded-lg shadow-lg p-4 mb-4 ${isHovered ? 'transform scale-105 shadow-xl border-[#004F70]' : ''
    }`;

  return (
    <div
      className={cardClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-2xl font-semibold text-[#004F70]">{job.title}</h2>
      <p className="text-gray-600">Vacancy: {job.vacancy}</p>
      <p className="text-gray-600">Salary Range: {job.salaryRange}</p>
      <p className="text-gray-600">Experience : {job.experience}</p>
      <p className="mt-4 text-gray-800">{job.description}</p>
      <div className="mt-4">

        <Link to={`/apply/${job._id}`} job={job}>
          <button
            className="bg-gradient-to-r from-[#004F70] to-[#007C9C] rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-white mb-5"
          >
            Apply Now
          </button>
        </Link>

      </div>
    </div>
  );
};

export default JobList;
