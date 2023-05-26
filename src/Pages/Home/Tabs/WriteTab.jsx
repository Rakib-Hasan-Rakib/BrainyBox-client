import React from 'react';
import ToyProvider from './ToyProvider';

const WriteTab = ({toys}) => {
    return (
        ToyProvider(toys)
    );
};

export default WriteTab;