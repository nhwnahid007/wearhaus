import React from 'react';
import { Product } from '../sanity.types';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '../sanity/lib/image';
import PriceView from './PriceView';
import AddToCartButton from './AddToCartButton';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const isOutOfStock = product?.stock === 0;

  return (
    <div className="group text-sm rounded-lg overflow-hidden">
      <div className="relative bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-200 overflow-hidden">
        {product.images && (
          <Link href={'product'}>
            <Image
              src={urlFor(product.images[0]).url()}
              alt="productImage"
              width={500}
              height={500}
              priority
              className={`w-full h-72 object-contain overflow-hidden  transition-transform duration-500 hoverEffect ${!isOutOfStock && 'group-hover:scale-105'}`}
            />
          </Link>
        )}
        {isOutOfStock && (
          <div className="absolute top-0 left-0 w-full h-full bg-darkColor/40 flex items-center justify-center">
            <p className="text-base text-white font-semibold text-center">
              Out of stock
            </p>
          </div>
        )}
      </div>
      <div className="py-3 px-2 flex flex-col gap-1.5 bg-zinc-50 border border-t-0 rounded-lg rounded-tl-none rounded-tr-none">
        <h2 className="font-semibold line-clamp-1">{product?.name}</h2>
        <p>{product?.intro}</p>
        <PriceView
          className="text-lg"
          price={product?.price}
          discount={product?.discount}
        />
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
