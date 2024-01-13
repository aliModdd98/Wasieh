
import React, { useState } from 'react';

export const Accord = ({ description, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='container'>
      <div className="accordion my-3" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className={`accordion-button ${isOpen ? '' : 'collapsed'}`} type="button" onClick={handleToggle} aria-expanded={isOpen} aria-controls="flush-collapseOne">
              {title}
            </button>
          </h2>
          <div className={`accordion-collapse ${isOpen ? 'show' : 'collapse'}`} aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};


