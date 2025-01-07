import React from 'react';
import { CONTACT } from '../constants';

const Contact = () => {
  return (
    <div className="py-8 px-4 border-t border-stone-900">
      {/* Title with Animation from Top */}
      <h2 className="text-center text-4xl mb-4 animate__animated animate__fadeInDown">
        Feel Free to Contact
      </h2>
      <div className="text-center">
        {/* Phone Number with Animation from Left */}
        <p className="mb-2 text-lg animate__animated animate__fadeInLeft animate__delay-1s">
          <strong>Phone Number:</strong> {CONTACT.phoneNo}
        </p>
        {/* Email with Animation from Right */}
        <p className="mb-2 text-lg animate__animated animate__fadeInRight animate__delay-1.5s">
          <strong>Email:</strong>{' '}
          <a href={`mailto:${CONTACT.email}`} className="text-blue-500">
            {CONTACT.email}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
