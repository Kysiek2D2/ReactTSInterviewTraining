import React, { useState } from 'react';
/*
1.	Implementacja funkcji handleIncreaseClick
2.	Dodać przycisk “-”, (0 to min)

Bonus:
●	Dodawanie nowych produktów
●	Usuwanie produktów
●	Filtrowanie produktów po tekście
●	Context API
*/

const initialProducts = [
  {
    id: 0,
    name: 'Baklava',
    count: 1,
  },
  {
    id: 1,
    name: 'Cheese',
    count: 5,
  },
  {
    id: 2,
    name: 'Spaghetti',
    count: 2,
  },
];

let newProdName : string ="";

export default function InterviewTask() {
  const [products, setProducts] = useState(initialProducts);
  const [newProduct, setNewProduct] = useState("");


  function handleIncreaseClick(productId) {
    const nextCounters = products.map((c, i) => {
      if (c.id === productId) {
        // Increment the clicked counter
        return {id: c.id, name: c.name, count: c.count + 1};
      } else {
        // The rest haven't changed
        return {id: c.id, name: c.name, count: c.count};
      }
    });
    setProducts(nextCounters);  
  }

  function handleDecreaseClick(productId) {
    const nextCounters = products.map((c, i) => {
      if (c.id === productId && c.count > 0) {
        // Increment the clicked counter
        return {id: c.id, name: c.name, count: c.count - 1};
      } else {
        // The rest haven't changed
        return {id: c.id, name: c.name, count: c.count};
      }
    });
    setProducts(nextCounters);  
  }

  return (
    <>
    <input
      defaultValue={newProduct}
      onChange={(e)=>setNewProduct(e.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          setProducts([...products,{id: 5, name: newProduct, count: 1}]);
        }}
      >
        Add new product
      </button>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} (<b>{product.count}</b>)
            <button
              type="button"
              onClick={() => {
                handleIncreaseClick(product.id);
              }}
            >
              +
            </button>

            <button
              type="button"
              onClick={() => {
                handleDecreaseClick(product.id);
              }}
            >
              -
            </button>

            <button
              type="button"
              onClick={() => {
                setProducts(products.filter(p => p.id != product.id));
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
