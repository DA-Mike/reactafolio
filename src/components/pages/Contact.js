import React, { useState } from 'react';
import '../styles/pages.css';

// const FORM_ENDPOINT = ""; // TODO - fill later

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="thanks">
          <div className="text-2xl">Thank you!</div>
          <div className="text-md">We'll be in touch soon.</div>
        </div>
      </>
    );
  }

  return (
    <div>
        <div className='contact-container' bg='light'>
            <div className='form-container card col-md-4 bg-light'>
                <form
                // action={FORM_ENDPOINT}
                onSubmit={handleSubmit}
                // method="POST"
                method="GET"
                target="/" 
                >
                <h2 id='contact-title'>Contact Me</h2>
                <div className="mb-3 pt-0">
                    <input
                    type="text"
                    placeholder="Your name"
                    name="name"
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required
                    />
                </div>
                <div className="mb-3 pt-0">
                    <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required
                    />
                </div>
                <div className="mb-3 pt-0">
                    <textarea
                    placeholder="Your message"
                    name="message"
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required
                    />
                </div>
                <div className="mb-3 pt-0">
                    <button
                    className=" btn contact-btn"
                    type="submit"
                    >
                    Send a message
                    </button>
                </div>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Contact;