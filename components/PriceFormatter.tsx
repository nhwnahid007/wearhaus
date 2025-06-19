import React from 'react';
import { cn } from '../lib/utils';

interface Props {
  amount: number | undefined;
  className?: string;
}

const PriceFormatter = ({ amount, className }: Props) => {
  const formattedPrice = new Number(amount).toLocaleString('en-US', {
    currency: 'USD',
    style: 'currency',
    minimumFractionDigits: 2,
  });
  return (
    <div>
      <span className={cn('text-sm font-semibold text-darkColor', className)}>
        {formattedPrice}
      </span>
    </div>
  );
};

export default PriceFormatter;
