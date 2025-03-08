// import React, { useState } from 'react';
// import ReactDOM from 'react-dom/client';

// function Dashboard() {
//   const [tasks, setTasks] = useState([
//     { id: 1, title: 'Buy groceries', completed: false },
//     { id: 2, title: 'Finish homework', completed: true },
//     { id: 3, title: 'Read a book', completed: false },
//   ]);

// //   Function to toggle the completion status of a task
//   const toggleTaskCompletion = (taskId) => {
//     setTasks((prevTasks) =>
//       prevTasks.map((task) =>
//         task.id === taskId ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   return (
//     <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif' }}>
//       <h1>Task Manager</h1>
//       <ul style={{ listStyleType: 'none', padding: 0 }}>
//         {tasks.map((task) => (
//           <li key={task.id} style={{ marginBottom: '10px' }}>
//             <label style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
//               <input
//                 type="checkbox"
//                 checked={task.completed}
//                 onChange={() => toggleTaskCompletion(task.id)}
//                 style={{ marginRight: '10px' }}
//               />
//               {task.title}
//             </label>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Dashboard



import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// Sample product data
const productsData = [
  { id: 1, name: 'Apple iPhone 13', category: 'Electronics' },
  { id: 2, name: 'Nike Running Shoes', category: 'Footwear' },
  { id: 3, name: 'Levi\'s Jeans', category: 'Clothing' },
  { id: 4, name: 'Samsung Galaxy S21', category: 'Electronics' },
  { id: 5, name: 'Adidas Sneakers', category: 'Footwear' },
];

function Dashboard() {
  const [categoryFilter, setCategoryFilter] = useState('All');

  // Function to handle category selection
  const handleCategoryChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  // Filter products based on selected category
  const filteredProducts = categoryFilter === 'All'
    ? productsData
    : productsData.filter(product => product.category === categoryFilter);

  return (
    <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Product List</h1>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="categoryFilter" style={{ marginRight: '10px' }}>Filter by Category:</label>
        <select id="categoryFilter" value={categoryFilter} onChange={handleCategoryChange}>
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Footwear">Footwear</option>
          <option value="Clothing">Clothing</option>
        </select>
      </div>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {filteredProducts.map(product => (
          <li key={product.id} style={{ marginBottom: '10px' }}>
            {product.name} - <em>{product.category}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard