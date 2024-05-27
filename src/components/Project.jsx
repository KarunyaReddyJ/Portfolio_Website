import React from 'react';

function Project({ title, img, createdOn, language, projectURL }) {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      {/* <img src={img} alt="project-img" className="w-full h-48 object-cover" /> */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">
          <a href={projectURL} target='_blank' className="text-black hover:text-gray-700">
            {title}
          </a>
        </h2>
        <p className="text-black mb-4">{createdOn}</p>
        <p className="text-gray-800 bg-gray-200 inline-block px-2 py-1 rounded-full">
          {language}
        </p>
      </div>
    </div>
  );
}

export default Project;
