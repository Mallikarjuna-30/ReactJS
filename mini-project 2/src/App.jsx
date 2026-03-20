import React from 'react'
import './App.css'
import './index.css'
import Card from '../Components/Card';
const App = () => {
  const products = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      title: "Air Force 1 Low Super",
      brand: "Nike",
      price: "$59"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      title: "Ultraboost 22",
      brand: "Adidas",
      price: "$120"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1528701800489-20be3c1c0c6f?w=500&auto=format&fit=crop&q=60",
      title: "RS-X Reinvention",
      brand: "Puma",
      price: "$95"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      title: "Classic Leather",
      brand: "Reebok",
      price: "$75"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
      title: "574 Core",
      brand: "New Balance",
      price: "$85"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1584735175315-9d5df23be620",
      title: "Chuck Taylor All Star",
      brand: "Converse",
      price: "$60"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      title: "Gel-Kayano 28",
      brand: "ASICS",
      price: "$110"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb",
      title: "ZoomX Vaporfly",
      brand: "Nike",
      price: "$150"
    }
  ];

  return (
    <>
      <div className="parent">
        {products.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </>
  )
}

export default App