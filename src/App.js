
import './App.css';
import { useState, useEffect } from 'react';
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";

function App() {
    const [products, setProducts] = useState([]);

    const handleProductAdded = (newProduct) => {
        setProducts((prev) => [...prev, newProduct]);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(
                    "https://stocktrack-backend-xx57.onrender.com/api/products"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }

                const data = await response.json();
                setProducts(data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchProducts();
    }, []);

    return (
      <div className="min-h-screen bg-gray-100 text-gray-900">
          {/* Header */}
          <header className="bg-blue-600 text-white p-4">
            <h1 className="text-2xl font-semibold">
                    StockTrack
            </h1>
          </header>

          {/* Main Content */}
          <main className="max-w-6xl mx-auto px-6 py-8 space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-semibold mb-4">
                    Add Products
                </h2>


                <ProductForm onProductAdded={handleProductAdded} />
            </div>

            <div className='bg-white rounded-lg shadow p-6'>
                <h2 className='text-xl font-semibold mb-4'>
                    Products
                </h2>

                <ProductList products={products} />
            </div>
          </main>
      </div>

  );
}

export default App;
