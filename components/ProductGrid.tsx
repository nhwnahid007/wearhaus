'use client';
import React, { useEffect, useState } from 'react';
import HomeTabbar from './HomeTabbar';
import { productType } from '../constants';
import { client } from '../sanity/lib/client';
import { Product } from '../sanity.types';
import ProductCard from './ProductCard';
import NoProductsAvailable from './NoProductsAvailable';
import { Loader2 } from 'lucide-react';

const ProductGrid = () => {
  const [selectedTab, setSelectedtab] = useState(productType[0]?.title || '');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const query = `*[_type == 'product' && variant == $variant ] | order(name asc)`;

  const params = { variant: selectedTab.toLocaleLowerCase() };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await client.fetch(query, params);
        setProducts(response);
      } catch (error) {
        console.log('Product fetching Error', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab]);
  return (
    <div className="mt-10 flex flex-col items-center">
      <HomeTabbar selectedTab={selectedTab} onTabSelect={setSelectedtab} />
      {loading ? (
        <div className="flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gray-100 rounded-lg w-full mt-10">
          <div className="flex items-center space-x-2 text-blue-600">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Product is loading...</span>
          </div>
        </div>
      ) : (
        <>
          {products?.length ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 w-full ">
              {products?.map((product: Product) => (
                <div key={product._id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <NoProductsAvailable className="" selectedTab={selectedTab} />
          )}
        </>
      )}
    </div>
  );
};

export default ProductGrid;
