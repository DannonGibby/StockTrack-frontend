
function ProductList({ products }) {

    if (products.length === 0) {
        return (
            <p className="text-gray-500 italic">
                No products yet. Add your first one.
            </p>
        );
    }

    return (
        <ul className="divide-y">
            {products.map((product) => (
                <li key={product.id} className="py-3">
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-gray-600">
                        Quantity: {product.quantity}
                    </p>
                </li>
            ))}
        </ul>
    );
}

export default ProductList;