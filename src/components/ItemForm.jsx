import { useState, useEffect } from "react";

export default function ItemForm({ addItem, updateItem, editingItem, setEditingItem }) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    quantity: "",
    price: "",
  });

  useEffect(() => {
    if (editingItem) {
      setForm(editingItem);
    }
  }, [editingItem]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingItem) {
      updateItem(form);
      setEditingItem(null);
    } else {
      addItem(form);
    }

    setForm({
      name: "",
      category: "",
      quantity: "",
      price: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        space-y-4 p-6 rounded-2xl shadow-xl 
        bg-linear-to-br from-purple-50 to-blue-50
        border border-purple-200/50
        backdrop-blur-sm
        transition-all duration-300
      "
    >
      <h2 className="text-2xl font-bold text-purple-700 mb-3">
        {editingItem ? "Edit Item" : "Add New Item"}
      </h2>

      {/* Input fields */}
      {["name", "category", "quantity", "price"].map((field) => (
        <input
          key={field}
          required
          type={field === "quantity" || field === "price" ? "number" : "text"}
          placeholder={
            field.charAt(0).toUpperCase() + field.slice(1)
          }
          value={form[field]}
          onChange={(e) =>
            setForm({ ...form, [field]: field === "quantity" || field === "price"
              ? Number(e.target.value)
              : e.target.value
            })
          }
          className="
            w-full p-3 rounded-lg
            border border-purple-300 
            bg-white shadow-sm
            focus:outline-none
            focus:ring-2 focus:ring-purple-500
            transition
          "
        />
      ))}

      {/* Button */}
      <button
        className="
          w-full py-3 text-white font-semibold rounded-lg
          bg-linear-to-r from-purple-600 to-blue-600
          hover:from-purple-700 hover:to-blue-700
          shadow-md hover:shadow-lg
          transition-all duration-300
          active:scale-95
        "
      >
        {editingItem ? "Update Item" : "Add Item"}
      </button>
    </form>
  );
}
