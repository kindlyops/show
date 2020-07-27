import React from 'react';

const Error = props => (
    <div>
        {Object.entries(props).map(([err, val]) => (
            <pre err={err}>
            {JSON.stringify(val, '', ' ')}
            <br/>
            </pre>
        ))}
    </div>
);

export default Error;