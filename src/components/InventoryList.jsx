export default function InventoryList({ items, onEdit, onDelete }) {
  return (
    <div className="mt-6 grid gap-4">
      {items.map((item) => {
        const isLowStock = item.quantity <= 5;

        return (
          <div
            key={item.id}
            className={`
              p-5 rounded-xl shadow-md border transition hover:shadow-lg
              ${
                isLowStock
                  ? "border-red-300 bg-red-50"   /* LOW STOCK STYLE */
                  : "bg-linear-to-br from-purple-50 to-blue-50 border-purple-200/50"
              }
            `}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold text-purple-700">
                  {item.name}
                </h3>

                <p className="text-gray-600">Category: {item.category}</p>
                <p className="text-gray-600">Qty: {item.quantity}</p>
                <p className="text-gray-600">Price: ₹{item.price}</p>

                {/* Low Stock Tag */}
                {isLowStock && (
                  <p className="mt-2 text-red-600 font-semibold text-sm">
                    ⚠ Low Stock
                  </p>
                )}
              </div>

              <div className="space-x-3">
                <button
                  onClick={() => onEdit(item)}
                  className="
                    px-4 py-2 rounded-lg text-white 
                    bg-purple-600 hover:bg-purple-700
                    shadow hover:shadow-md transition
                  "
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(item)}
                  className="
                    px-4 py-2 rounded-lg text-white 
                    bg-red-500 hover:bg-red-600
                    shadow hover:shadow-md transition
                  "
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
