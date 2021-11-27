import React from 'react';

const Quote = ({ text, author }) => {
    return (
        <div className="text-green-600 italic">
            {text} -{author}
        </div>
    );
};

export default Quote;