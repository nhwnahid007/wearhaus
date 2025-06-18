import React from 'react';
import { requiredUser } from '../../../hooks/requiredUser';

const OrdersPage = async () => {
  await requiredUser();
  return <div className="">Orders</div>;
};

export default OrdersPage;
