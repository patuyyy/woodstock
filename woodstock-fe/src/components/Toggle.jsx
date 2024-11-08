import { useState, useEffect } from "react";

function Toggle (){
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div
        onClick={toggleDarkMode}
        className={`w-14 h-8 flex items-center bg-gray-500 dark:bg-black3 rounded-full p-1 cursor-pointer transition-all duration-700 ${
          isDarkMode ? "justify-start" : "justify-start"
        }`}
      >
        <div
          className={`bg-white dark:bg-black1 w-6 h-6 rounded-full shadow-md transform transition-all duration-700 ${
            isDarkMode ? "translate-x-6" : "translate-x-0"
          }`}
        ></div>
      </div>
    </div>
  );
};


export default Toggle
