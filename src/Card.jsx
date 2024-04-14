import React from 'react';

const Card = ({ label, value, setText }) => {
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div class="card">
      <div className="label">{label}</div>
      <input className='inputBox' value={value} onChange={handleChange} />
    </div>
  );
};

export default Card;
