import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import InventoryApp from "./InventoryApp"; // your old App content

// Private route to protect dashboard
const PrivateRoute = ({ children }) => {
  return localStorage.getItem("loggedIn") === "true" ? (
    children
  ) : (
    <Navigate to="/" />
  );
};

export default function App() {
  return (
    <Routes>
      {/* Login page */}
      <Route path="/" element={<Login />} />

      {/* Inventory dashboard */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <InventoryApp />
          </PrivateRoute>
        }
      />

      {/* Catch-all redirect to login */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
