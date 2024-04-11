import React from 'react';
import { FaTshirt, FaPencilAlt } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { IoBookSharp } from "react-icons/io5";
import { IoWalletSharp } from "react-icons/io5";

const data = [
  { id: 1, icon: <FaTshirt />, name: "T shirts" },
  { id: 2, icon: <FaBasketShopping />, name: "Jute Basket" },
  { id: 3, icon: <FaPencilAlt />, name: "Pencils" },
  { id: 4, icon: <IoBookSharp />, name: "Books" },
  { id: 5, icon: <IoWalletSharp />, name: "Wallets" },
];

export default function ShopCategories() {
  return (
    <div className="grid grid-cols-5 gap-4 px-4 py-4">
      {data.map((category) => (
        <div key={category.id} className="shadow rounded overflow-hidden bg-white">
          <div className="flex justify-center items-center p-4">
            {category.icon}
          </div>
          <div className="text-center text-gray-700 font-medium pb-2">
            {category.name}
          </div>
        </div>
      ))}
    </div>
  );
}
