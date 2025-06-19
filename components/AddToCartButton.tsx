import React from 'react';
import { Product } from '../sanity.types';
import { Button } from './ui/button';
import { cn } from '../lib/utils';
interface Props {
    product: Product;
    className?: string
}
const AddToCartButton = ({product,className}:Props) => {
    
    return (
        <div>
            <Button className={cn('w-full bg-transparent text-darkColor shadow-none border border-darkColor/30 font-semibold tracking-wide hover:text-white hoverEffect')}>Add to cart</Button>
        </div>
    );
};

export default AddToCartButton;