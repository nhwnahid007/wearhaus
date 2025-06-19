'use client';
import React, { useEffect, useState } from 'react';
import HomeTabbar from './HomeTabbar';
import { productType } from '../constants';
import { client } from '../sanity/lib/client';
import { Product } from '../sanity.types';

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
        setProducts(await response);
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
        <p>Loading</p>
      ) : (
        products.map((item: Product) => <p key={item._id}>
            {item.name}
        </p>)
      )}
    </div>
  );
};

export default ProductGrid;
