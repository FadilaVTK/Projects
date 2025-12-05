import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "1234") {
      localStorage.setItem("loggedIn", "true");
      navigate("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen 
      bg-linear-to-br from-purple-300 via-blue-300 to-indigo-400 p-4">
      
      <form
        onSubmit={handleLogin}
        className="backdrop-blur-xl bg-white/40 border border-white/50 
        shadow-2xl p-8 rounded-2xl w-full max-w-sm transition-all"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center text-white drop-shadow-md">
          Sign In
        </h2>

        {error && (
          <p className="text-red-700 font-medium mb-4 text-center bg-red-100 py-2 rounded-lg">
            {error}
          </p>
        )}

        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 mb-4 rounded-lg border border-white/40 
          bg-white/60 backdrop-blur focus:ring-2 focus:ring-purple-500"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded-lg border border-white/40 
          bg-white/60 backdrop-blur focus:ring-2 focus:ring-purple-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          className="w-full py-3 rounded-lg text-white font-semibold 
          bg-linear-to-r from-purple-600 to-blue-600 
          hover:opacity-90 shadow-lg transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
