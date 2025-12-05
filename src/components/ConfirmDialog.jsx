export default function ConfirmDialog({ isOpen, onClose, onConfirm, message }) {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0 bg-black/40 backdrop-blur-sm
        flex items-center justify-center p-4
      "
    >
      <div
        className="
          bg-linear-to-br from-red-50 to-white
          border border-red-300/40
          rounded-xl p-6 shadow-xl max-w-sm w-full
        "
      >
        <h3 className="text-xl font-bold text-red-700 mb-3">Confirm Delete</h3>
        <p className="text-gray-700 mb-5">{message}</p>

        <div className="flex gap-3">
          <button
            onClick={onConfirm}
            className="
              flex-1 py-2 rounded-lg bg-red-600 text-white
              hover:bg-red-700 shadow transition
            "
          >
            Delete
          </button>

          <button
            onClick={onClose}
            className="
              flex-1 py-2 rounded-lg bg-gray-300
              hover:bg-gray-400 shadow transition
            "
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
