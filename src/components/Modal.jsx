export default function Modal({ isOpen, onClose, children }) {
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
          relative
          bg-white rounded-2xl p-6 w-full max-w-md shadow-xl
          border border-purple-200
          animate-fadeIn
        "
      >
        {/* Top-Right Close Button */}
        <button
          onClick={onClose}
          className="
            absolute top-0 right-3
            hover:text-red-500 
            text-gray-500
            font-bold text-xl
            cursor-pointer
          "
        >
          x
        </button>

        {children}
      </div>
    </div>
  );
}
