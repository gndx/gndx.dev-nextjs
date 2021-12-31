import React from 'react';
import coursesData from '@/data/coursesData';
import random from '@/lib/random';

const Course = () => {
  const courses = random(coursesData);
  return (
    <>
      <h4 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400 mb-2">
        Curso Recomendado
      </h4>
      {courses?.map((course) => (
        <div
          className="w-full bg-gray rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center"
          key={`courses-${course.reviews}`}
        >
          <div>
            <img className="object-center object-fill h-32 w-full" src={course.badge} alt="photo" />
          </div>
          <div className="text-center py-8 sm:py-6">
            <a href={course.url} target="_blank" rel="referrer noreferrer">
              <p className="text-xl text-gray-700 font-bold mb-2">{course.title}</p>
              <p className="text-base text-gray-400 font-normal">{course.reviews} Opiniones</p>
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default Course;
