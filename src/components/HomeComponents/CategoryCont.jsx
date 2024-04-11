import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function CategoryCont() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    setError(null);

    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${apiUrl}/category/getallcategories`);
        console.log(response.data.categories, 'here are categories');
        if (response.status === 200) {
          setCategories(response.data.categories);
        }
      } catch (error) {
        console.error(error);
        setError('Failed to fetch categories'); // Provide a more informative error message
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const generateRandomColor = () => {
    // Improved random color generation (excluding white)
    const notWhite = () => {
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      return randomColor !== '#ffffff' ? randomColor : notWhite(); // Recursively ensure non-white color
    };

    return notWhite();
  };

  return (
    <section className="podcast-category-container">
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {categories.length > 0 && (
        <div className="podcast-categories overflow-x-auto flex flex-nowrap space-x-4">
          {categories.map((category) => (
            <div
              key={category.id || category.category_name} // Use a unique key if available
              className="podcast-category-card w-48 h-24 rounded-lg shadow-md px-4 py-2 flex items-center justify-center text-white font-bold"
              style={{ backgroundColor: generateRandomColor() }}
            >
              {category.category_name}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
