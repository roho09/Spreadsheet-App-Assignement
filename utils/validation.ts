import React, { useState } from 'react';
const [content, setContent] = useState('');

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();

    // Enhanced validation: Allow numeric values, letters, or specific formats
    const isNumeric = !isNaN(Number(value));
    const isAlpha = /^[a-zA-Z]*$/.test(value); // Only letters
    const isAllowedFormat = /^[a-zA-Z0-9]*$/.test(value); // Alphanumeric only

    if ((isNumeric || isAlpha || isAllowedFormat) || value === '') {
        setContent(value);
      
    } else {
        // Optional: Handle invalid input
        console.error("Invalid input format. Only alphanumeric characters are allowed.");
    }
};
