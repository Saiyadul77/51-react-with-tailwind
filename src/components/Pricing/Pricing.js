import React from 'react';
import PricingOptions from '../PricingOptions/PricingOptions';

const Pricing = () => {
    const pricingOptions = [
        { id: 1, name: 'Free', price: 0 },
        { id: 2, name: 'Regular', price: 9.99 },
        { id: 3, name: 'Premium', price: 19.99 },
    ]
    return (
        <div className='bg-indigo-300 mt-8 p-5'>
            <h2 className='p-5 text-6xl font-mono text-white'>Best of the Deals</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta officia voluptatum quidem nulla alias culpa, itaque minima at reprehenderit? Iusto.</p>
            <div className='grid md:grid-cols-3 gap-5 bg-white rounded-lg'>
                {
                    pricingOptions.map(options => <PricingOptions
                        key={options.id}
                        options={options}
                    ></PricingOptions>)
                }
            </div>
        </div>
    );
};

export default Pricing;