import React from 'react';

const Link = (props) => {
    const { name, link } = props.route
    return (
        <div className='mr-12'>
            <li><a href={link}>{name}</a></li>
        </div>
    );
};

export default Link;