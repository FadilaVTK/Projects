export default function Dashboard({ items }) {
  const totalItems = items.length;
  const totalQty = items.reduce((sum, i) => sum + Number(i.quantity || 0), 0);
  const totalValue = items.reduce((sum, i) => sum + (i.quantity * i.price || 0), 0);
  const totalCategories = new Set(items.map((i) => i.category)).size;
  const lowStock = items.filter((i) => i.quantity <= 5).length;

  return (
    <div
      className="
        grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6
      "
    >
      <div className="
        p-5 rounded-xl text-center shadow-md 
        bg-linear-to-br from-purple-500 to-purple-700 
        text-white font-bold
      ">
        <h3 className="text-lg">Total Items</h3>
        <p className="text-3xl mt-2">{totalItems}</p>
      </div>

      <div className="
        p-5 rounded-xl text-center shadow-md 
        bg-linear-to-br from-blue-500 to-blue-700 
        text-white font-bold
      ">
        <h3 className="text-lg">Total Quantity</h3>
        <p className="text-3xl mt-2">{totalQty}</p>
      </div>

      <div className="
        p-5 rounded-xl text-center shadow-md 
        bg-linear-to-br from-pink-500 to-purple-600 
        text-white font-bold
      ">
        <h3 className="text-lg">Total Value</h3>
        <p className="text-2xl mt-2">₹{totalValue}</p>
      </div>
      <div className="
        p-5 rounded-xl text-center shadow-md 
        bg-linear-to-br from-pink-500 to-purple-600 
        text-white font-bold
      ">
        <h3 className="text-lg">Total Categories</h3>
        <p className="text-2xl mt-2">₹{totalCategories}</p>
      </div>
      <div className="
        p-5 rounded-xl text-center shadow-md 
        bg-linear-to-br from-pink-500 to-purple-600 
        text-white font-bold
      ">
        <h3 className="text-lg">Low Stock Items</h3>
        <p className="text-2xl mt-2">₹{lowStock}</p>
      </div>
    </div>
  );
}
