// src/components/ThemeToggle.jsx
import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={toggleTheme}
      className={`
        transition-colors duration-200
        shadow-md hover:shadow-lg
        bg-white dark:bg-[#23272b]
        border border-[#e0e0e0] dark:border-[#23272b]
        rounded-full p-3
        focus:outline-none focus:ring-2 focus:ring-cyan-400
        flex items-center justify-center
      `}
      style={{
        boxShadow:
          theme === "dark"
            ? "0 2px 8px rgba(0,0,0,0.24)"
            : "0 2px 8px rgba(60,64,67,.16)",
      }}
    >
      {theme === "dark" ? (
        <Sun className="w-6 h-6 text-yellow-400 transition-colors duration-200" />
      ) : (
        <Moon className="w-6 h-6 text-gray-700 transition-colors duration-200" />
      )}
    </button>
  );
};

export default ThemeToggle;
