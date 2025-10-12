"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);

    if (newDark) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 
                 overflow-hidden transition-all duration-200 
                 hover:scale-110 
                 hover:shadow-lg hover:shadow-yellow-500/30 dark:hover:shadow-blue-500/30"
    >
      <Moon
        className={`absolute w-5 h-5 text-blue-500 transition-all duration-200
          ${isDark ? "scale-0 opacity-0" : "scale-100 opacity-100"}`}
      />

      <Sun
        className={`absolute w-5 h-5 text-yellow-400 transition-all duration-200
          ${isDark ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
      />
    </button>
  );
}
