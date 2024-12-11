import { useState, useEffect } from "react";

function Toggle() {
  // Initialize darkMode state with localStorage value or default to false
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });

  // Apply the initial dark mode class immediately
  if (localStorage.getItem('darkMode') === 'true') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className="flex items-center justify-start">
      <div
        onClick={toggleDarkMode}
        className={`w-14 h-8 flex items-center bg-gray-500 dark:bg-black3 rounded-full p-1 cursor-pointer transition-all duration-700 ${
          darkMode ? "justify-start" : "justify-start"
        }`}
      >
        <div
          className={`bg-white dark:bg-black1 w-6 h-6 rounded-full shadow-md transform transition-all duration-700 ${
            darkMode ? "translate-x-6" : "translate-x-0"
          }`}
        ></div>
      </div>
    </div>
  );
}

export default Toggle;
