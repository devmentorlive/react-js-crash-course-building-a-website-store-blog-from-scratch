import React from 'react';

export default function Options({
  label,
  options,
  selectedOption,
  setSelectedOption,
}) {
  return (
    <div className='options'>
      {label}
      {options.map((option) => (
        <span
          className={`option ${
            selectedOption === option ? 'selected' : null
          }`}
          onClick={() => setSelectedOption(option)}>
          {option.name}
        </span>
      ))}
    </div>
  );
}
