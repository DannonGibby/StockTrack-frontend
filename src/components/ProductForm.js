import { useState } from "react";

function ProductForm({ onProductAdded }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (!name || quantity === "") {
            setError("Name and quantity are required.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(
                "https://stocktrack-backend-xx57.onrender.com/api/products",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        quantity: Number(quantity),
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to add product");
            }

            const newProduct = await response.json();

            setName("");
            setQuantity("");
            onProductAdded(newProduct);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium mb-1">
                    Product Name
                </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                />  
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">
                    Quantity
                </label>
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                />
            </div>

            {error && (
                <p className="text-sm text-red-600">{error}</p>
            )}

            <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            >
                {loading ? "Adding..." : "Add Product"}
            </button>
        </form>
    );
}

export default ProductForm;