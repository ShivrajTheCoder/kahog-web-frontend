import React, { useState, useEffect } from 'react';

export default function ShopContainer() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Dummy data for demonstration
    const dummyData = [
      {
        id: 1,
        serialNumber: "SN001",
        product: "Product A",
        phoneNumber: "123-456-7890",
        price: "$100",
        date: "2024-04-13"
      },
      {
        id: 2,
        serialNumber: "SN002",
        product: "Product B",
        phoneNumber: "456-789-0123",
        price: "$150",
        date: "2024-04-12"
      },
      // Add more dummy data as needed
    ];

    // Simulate API call by setting state with dummy data
    setOrders(dummyData);
  }, []);

  return (
    <div className='w-full mt-4'>
      {/* <h1>Orders</h1> */}
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">Serial Number</th>
            <th className="border px-4 py-2">Product</th>
            <th className="border px-4 py-2">Phone Number</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Date of Application</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td className="border px-4 py-2 align-middle">{order.serialNumber}</td>
              <td className="border px-4 py-2 align-middle">{order.product}</td>
              <td className="border px-4 py-2 align-middle">{order.phoneNumber}</td>
              <td className="border px-4 py-2 align-middle">{order.price}</td>
              <td className="border px-4 py-2 align-middle">{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
