import React from 'react';

interface CommonButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

const CommonButton: React.FC<CommonButtonProps> = ({ text, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="
        px-6 py-3 bg-blue-500 text-white rounded-xl
        shadow-md hover:bg-blue-600 active:bg-blue-700
        disabled:bg-gray-400 disabled:cursor-not-allowed
        transition duration-200 ease-in-out
      "
    >
      {text}
    </button>
  );
};

export default CommonButton;
