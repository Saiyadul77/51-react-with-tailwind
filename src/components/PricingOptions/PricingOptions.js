import React from 'react';

const PricingOptions = (props) => {
    const { name, price } = props.options
    return (
        <div className='bg-white m-3'>
            <h3 className='bg-indigo-300 p-3 text-5xl rounded'>{name}</h3>
            <p className='rounded p-5'>
                <span className='text-6xl font-bold'>{price}</span>
                <span className='font-bold text-gray-500'>/mo</span>
            </p>
            <h4>Benefits:</h4>
        </div>
    );
};

export default PricingOptions;