import React from 'react';
import './customButton.css';

const CustomButton =({children}) => (
    <button className="custom-button">
        {children}
    </button>
);

export default CustomButton;