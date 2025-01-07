import React, { useEffect } from 'react';
import { EXPERIENCES } from '../constants';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const Education = () => {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Set animation duration
  }, []);

  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl" data-aos="fade-up">
        Education & Experience
      </h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
            data-aos="fade-up"
            data-aos-delay="300" // Delay animation to stagger the effect
          >
            {/* Year Section with Animation from Left */}
            <div className="w-full lg:w-1/4" data-aos="fade-left" data-aos-delay="500">
              <p className="mb-2 text-sm text-stone-400">{experience.year}</p>
            </div>

            {/* Role and Details Section with Animation from Right */}
            <div className="w-full max-w-xl lg:w-3/4" data-aos="fade-right" data-aos-delay="700">
              <h3 className="mb-2 font-semibold">
                {experience.role} -{' '}
                <span className="text-sm text-stone-500">{experience.company}</span>
              </h3>
              <p className="text-stone-400">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
