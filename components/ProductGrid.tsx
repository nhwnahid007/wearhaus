'use client'
import React, { useState } from 'react';
import HomeTabbar from './HomeTabbar';
import { productType } from '../constants';

const ProductGrid = () => {
    const [selected,isSelected] = useState(productType[0]?.title || '')
    return (
        <div className='mt-10 flex flex-col items-center'>
            <HomeTabbar selectedTab={selected} onTabSelect={isSelected} />
        </div>
    );
};

export default ProductGrid;