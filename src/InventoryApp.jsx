import { useState, useEffect } from "react";
import data from "./data.json";
import InventoryList from "./components/InventoryList";
import ItemForm from "./components/ItemForm";
import SearchBar from "./components/SearchBar";
import Dashboard from "./pages/Dashboard";
import Modal from "./components/Modal";
import ConfirmDialog from "./components/ConfirmDialog";
import { loadItems, saveItems } from "./utils/localStorage";

export default function InventoryApp() {
  const [items, setItems] = useState(loadItems() || data);
  const [search, setSearch] = useState("");
  const [editingItem, setEditingItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteItem, setDeleteItem] = useState(null);

  useEffect(() => {
    saveItems(items);
  }, [items]);

  const addItem = (item) => {
    setItems([...items, { ...item, id: Date.now() }]);
    closeModal();
  };

  const updateItem = (updated) => {
    setItems(items.map((item) => (item.id === updated.id ? updated : item)));
    closeModal();
  };

  const openModal = (item) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditingItem(null);
    setIsModalOpen(false);
  };

  const handleDelete = (item) => {
    setDeleteItem(item);
  };

  const confirmDelete = () => {
    setItems(items.filter((i) => i.id !== deleteItem.id));
    setDeleteItem(null);
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    window.location.reload();
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl text-purple-900 font-bold">InventoryPro</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <Dashboard items={items} />

      <SearchBar search={search} setSearch={setSearch} />
      <div className="flex justify-end">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg text-xl hover:bg-purple-700 transition"
        >
          + Add Item
        </button>
      </div>
      <InventoryList
        items={filteredItems}
        onEdit={openModal}
        onDelete={handleDelete}
      />

      {/* Edit Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ItemForm
          addItem={addItem}
          updateItem={updateItem}
          editingItem={editingItem}
        />
      </Modal>

      {/* Delete Confirmation */}
      <ConfirmDialog
        isOpen={!!deleteItem}
        onClose={() => setDeleteItem(null)}
        onConfirm={confirmDelete}
        message={`Are you sure you want to delete "${deleteItem?.name}"?`}
      />
    </div>
  );
}
